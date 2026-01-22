import crypto from "node:crypto";
import { AlgorithmNotAvailableError } from "./error";

type Argon2Algorithm = "argon2id" | "argon2i" | "argon2d";

export async function argon2(opts: {
  password: string;
  salt: Buffer;
  algorithm: Argon2Algorithm;
  m: number;
  t: number;
  p: number;
  keylen: number;
}) {
  // crypto.argon2 is available on Node.js/node-compat < 24.7.0
  if (typeof crypto.argon2 === "undefined") {
    throw new AlgorithmNotAvailableError(`crypto.argon2 is not available`);
  }

  return new Promise<Buffer>((resolve, reject) => {
    crypto.argon2(
      opts.algorithm,
      {
        message: opts.password,
        nonce: opts.salt,
        memory: opts.m,
        passes: opts.t,
        parallelism: opts.p,
        tagLength: opts.keylen,
      },
      (err, derivedKey) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(derivedKey);
      },
    );
  });
}

export async function scrypt(opts: {
  password: string;
  salt: Buffer;
  lN: number;
  r: number;
  p: number;
  keylen: number;
  maxmem?: number;
}) {
  return new Promise<Buffer>((resolve, reject) => {
    crypto.scrypt(
      opts.password,
      opts.salt,
      opts.keylen,
      { N: 1 << opts.lN, r: opts.r, p: opts.p, maxmem: opts.maxmem },
      (err, derivedKey) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(derivedKey);
      },
    );
  });
}

export async function pbkdf2(opts: {
  password: string;
  salt: Buffer;
  i: number;
  digest: "sha1" | "sha256" | "sha512";
  keylen: number;
}) {
  return new Promise<Buffer>((resolve, reject) => {
    crypto.pbkdf2(
      opts.password,
      opts.salt,
      opts.i,
      opts.keylen,
      opts.digest,
      (err, derivedKey) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(derivedKey);
      },
    );
  });
}
