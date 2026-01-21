import { AlgorithmNotAvailableError, HashError } from "./error"
import * as nodeHash from './node-hash'
import crypto from 'node:crypto'
import format from '@phc/format'

export enum HashAlgorithm {
  Argon2id = "argon2id",
  Argon2i = "argon2i",
  Argon2d = "argon2d",
  Scrypt = "scrypt",
  PBKDF2 = "pbkdf2",
}

interface BaseParams {
  algorithm: HashAlgorithm,
  keylen?: number
  salt?: Uint8Array
}

interface Argon2Params extends BaseParams {
  algorithm: HashAlgorithm.Argon2id | HashAlgorithm.Argon2i | HashAlgorithm.Argon2d
  m: number
  t: number
  p: number
}

interface ScryptParams extends BaseParams {
  algorithm: HashAlgorithm.Scrypt
  lN: number
  r: number
  p: number
  maxmem?: number
}

interface PBKDF2Params extends BaseParams {
  algorithm: HashAlgorithm.PBKDF2
  i: number
  digest?: 'sha1' | 'sha256' | 'sha512'
}

type HashParams = Argon2Params | ScryptParams | PBKDF2Params

export async function hash(password: string, opts: HashParams): Promise<string> {
  if (typeof Bun !== 'undefined') {
    switch (opts.algorithm) {
      case HashAlgorithm.Argon2id:
      case HashAlgorithm.Argon2i:
      case HashAlgorithm.Argon2d:
        try {
          return await Bun.password.hash(password, {
            algorithm: opts.algorithm,
            memoryCost: opts.m,
            timeCost: opts.t,
          })
        } catch (error) {
          throw new HashError(error)
        }
      default:
        break
    }
  }

  switch (opts.algorithm) {
    case HashAlgorithm.Argon2id:
    case HashAlgorithm.Argon2i:
    case HashAlgorithm.Argon2d: {
      const { m, t, p } = opts
      const salt = Buffer.from(opts.salt ?? crypto.randomBytes(32))
      const hash = await nodeHash.argon2({
        algorithm: opts.algorithm,
        password,
        salt,
        m,
        t,
        p,
        keylen: opts.keylen ?? 32,
      })

      return format.serialize({
        id: opts.algorithm,
        hash,
        salt,
        params: { m, t, p },
        version: 0x13,
      })
    }
    case HashAlgorithm.Scrypt: {
      const { lN, r, p } = opts
      const salt = Buffer.from(opts.salt ?? crypto.randomBytes(16))
      const hash = await nodeHash.scrypt({
        password,
        salt,
        lN,
        r,
        p,
        keylen: opts.keylen ?? 32,
      })

      return format.serialize({
        id: opts.algorithm,
        hash,
        salt,
        params: { ln: lN, r, p },
      })
    }
    case HashAlgorithm.PBKDF2: {
      const { i, digest = 'sha512' } = opts
      if (digest === 'sha1' && !process.env.ALLOW_SHA1_HASH) {
        throw new AlgorithmNotAvailableError('PBKDF2 hash with SHA1 is not allowed')
      }

      const salt = Buffer.from(opts.salt ?? crypto.randomBytes(16))
      const keylen = opts.keylen ?? (() => {
        switch (digest) {
          case 'sha1': return 20
          case 'sha256': return 32
          case 'sha512': return 64
        }
      })()
      const hash = await nodeHash.pbkdf2({
        password,
        salt,
        i,
        digest,
        keylen,
      })

      return format.serialize({
        id: `pbkdf2-${digest}`,
        hash,
        salt,
        params: { i },
      })
    }
  }
}
