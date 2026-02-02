import format from "@phc/format";
import crypto from "node:crypto";
import { AlgorithmNotAvailableError, HashError } from "./error";
import * as nodeHash from "./node-hash";

export type HashAlgorithm =
  | "argon2id"
  | "argon2i"
  | "argon2d"
  | "scrypt"
  | "pbkdf2";

interface BaseParams {
  algorithm: HashAlgorithm;
  keylen?: number;
  salt?: Uint8Array;
}

export interface Argon2Params extends BaseParams {
  algorithm: "argon2id" | "argon2i" | "argon2d";
  m: number;
  t: number;
  p: number;
}

export interface ScryptParams extends BaseParams {
  algorithm: "scrypt";
  lN: number;
  r: number;
  p: number;
  maxmem?: number;
}

export interface PBKDF2Params extends BaseParams {
  algorithm: "pbkdf2";
  i: number;
  digest?: "sha1" | "sha256" | "sha512";
}

export type HashParams = Argon2Params | ScryptParams | PBKDF2Params;

export async function hash(
  password: string,
  params: HashParams,
): Promise<string> {
  if (typeof Bun !== "undefined") {
    switch (params.algorithm) {
      case "argon2id":
      case "argon2i":
      case "argon2d":
        try {
          return await Bun.password.hash(password, {
            algorithm: params.algorithm,
            memoryCost: params.m,
            timeCost: params.t,
          });
        } catch (error) {
          throw new HashError(error);
        }
      default:
        break;
    }
  }

  switch (params.algorithm) {
    case "argon2id":
    case "argon2i":
    case "argon2d": {
      const { m, t, p } = params;
      const salt = Buffer.from(params.salt ?? crypto.randomBytes(32));
      const hash = await nodeHash.argon2({
        algorithm: params.algorithm,
        password,
        salt,
        m,
        t,
        p,
        keylen: params.keylen ?? 32,
      });

      return format.serialize({
        id: params.algorithm,
        hash,
        salt,
        params: { m, t, p },
        version: 0x13,
      });
    }
    case "scrypt": {
      const { lN, r, p } = params;
      const salt = Buffer.from(params.salt ?? crypto.randomBytes(16));
      const hash = await nodeHash.scrypt({
        password,
        salt,
        lN,
        r,
        p,
        keylen: params.keylen ?? 32,
        // Default value of 32 * 1024 * 1024 is from Node.js defaults:
        // https://nodejs.org/api/crypto.html#cryptoscryptpassword-salt-keylen-options-callback
        maxmem: params.maxmem ?? 32 * 1024 * 1024,
      });

      return format.serialize({
        id: params.algorithm,
        hash,
        salt,
        params: { ln: lN, r, p },
      });
    }
    case "pbkdf2": {
      const { i, digest = "sha512" } = params;
      if (digest === "sha1" && !process.env.ALLOW_SHA1_HASH) {
        throw new AlgorithmNotAvailableError(
          "PBKDF2 hash with SHA1 is not allowed",
        );
      }

      const salt = Buffer.from(params.salt ?? crypto.randomBytes(16));
      const keylen =
        params.keylen ??
        (() => {
          switch (digest) {
            case "sha1":
              return 20;
            case "sha256":
              return 32;
            case "sha512":
              return 64;
          }
        })();
      const hash = await nodeHash.pbkdf2({
        password,
        salt,
        i,
        digest,
        keylen,
      });

      return format.serialize({
        id: `pbkdf2-${digest}`,
        hash,
        salt,
        params: { i },
      });
    }
  }
}
