import format from '@phc/format'
import * as nodeHash from './node-hash'
import crypto from 'node:crypto'
import { HashError, InvalidPHCStringError, PHCStringInfo, UnknownAlgorithmError } from './error'

export async function verify(phcString: string, password: string, opts: {
  scryptMaxmem?: number
} = {}): Promise<boolean> {
  if (typeof Bun !== 'undefined' && /^$argon2(id|i|d)/.test(phcString)) {
    try {
      return await Bun.password.verify(phcString, password)
    } catch (error) {
      throw new HashError(error)
    }
  }

  function phcOutputToPHCStringInfo(phcOutput: import('@phc/format').PhcOutput): PHCStringInfo {
    return { ...phcOutput, params: { ...phcOutput.params }}
  }

  const phcInfo = format.deserialize(phcString)

  const hash = phcInfo.hash
  if (typeof hash === 'undefined') {
    throw new InvalidPHCStringError('PHC string does not have hash', { ...phcInfo, params: { ...phcInfo.params }})
  }

  const salt = phcInfo.salt
  if (typeof salt === 'undefined') {
    throw new InvalidPHCStringError('PHC string does not have salt', phcOutputToPHCStringInfo(phcInfo))
  }

  switch (phcInfo.id) {
    case 'argon2id':
    case 'argon2i':
    case 'argon2d': {
      const m = phcInfo.params?.m
      const t = phcInfo.params?.t
      const p = phcInfo.params?.p

      if (typeof m !== 'number' || typeof t !== 'number' || typeof p !== 'number') {
        throw new InvalidPHCStringError('Missing argon2 parameters from PHC string', phcOutputToPHCStringInfo(phcInfo))
      }

      try {
        const passwordHash = await nodeHash.argon2({
          algorithm: phcInfo.id,
          password,
          salt,
          keylen: hash.length,
          m,
          t,
          p,
        })
        return crypto.timingSafeEqual(hash, passwordHash)
      } catch (error) {
        throw new HashError(error)
      }
    }
    case 'scrypt': {
      const lN = phcInfo.params?.ln
      const r = phcInfo.params?.r
      const p = phcInfo.params?.p

      if (typeof lN !== 'number' || typeof r !== 'number' || typeof p !== 'number') {
        throw new InvalidPHCStringError('Missing scrypt parameters from PHC string', phcOutputToPHCStringInfo(phcInfo))
      }

      try {
        const passwordHash = await nodeHash.scrypt({
          password,
          salt,
          keylen: hash.length,
          lN,
          r,
          p,
          maxmem: opts.scryptMaxmem,
        })
        return crypto.timingSafeEqual(hash, passwordHash)
      } catch (error) {
        throw new HashError(error)
      }
    }
    case 'pbkdf2-sha1':
    case 'pbkdf2-sha256':
    case 'pbkdf2-sha512': {
      const digest = (() => {
        switch (phcInfo.id) {
          case 'pbkdf2-sha1': return 'sha1'
          case 'pbkdf2-sha256': return 'sha256'
          case 'pbkdf2-sha512': return 'sha512'
        }
      })()

      const i = phcInfo.params?.i
      if (typeof i !== 'number') {
        throw new InvalidPHCStringError('Missing pbkdf2 parameters from PHC string', phcOutputToPHCStringInfo(phcInfo))
      }

      try {
        const passwordHash = await nodeHash.pbkdf2({
          password,
          salt,
          keylen: hash.length,
          i,
          digest,
        })
        return crypto.timingSafeEqual(hash, passwordHash)
      } catch (error) {
        throw new HashError(error)
      }
    }

    default:
      throw new UnknownAlgorithmError(phcInfo.id)
  }
}
