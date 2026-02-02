import {
  type Argon2Params,
  type PBKDF2Params,
  type ScryptParams,
} from "./hash";

export const ARGON2ID_OWASP_2026_HIMEM: Argon2Params = {
  algorithm: "argon2id",
  m: 47104,
  t: 1,
  p: 1,
};

export const ARGON2ID_OWASP_2026_HICPU: Argon2Params = {
  algorithm: "argon2id",
  m: 7168,
  t: 5,
  p: 1,
};

export const ARGON2I_OWASP_2026_HIMEM: Argon2Params = {
  algorithm: "argon2i",
  m: 12288,
  t: 3,
  p: 1,
};

export const ARGON2I_OWASP_2026_HICPU: Argon2Params = {
  algorithm: "argon2i",
  m: 7168,
  t: 5,
  p: 1,
};

export const ARGON2D_OWASP_2026_HIMEM: Argon2Params = {
  algorithm: "argon2d",
  m: 47104,
  t: 1,
  p: 1,
};

export const ARGON2D_OWASP_2026_HICPU: Argon2Params = {
  algorithm: "argon2d",
  m: 7168,
  t: 5,
  p: 1,
};

export const SCRYPT_OWASP_2026_HIMEM: ScryptParams = {
  algorithm: "scrypt",
  lN: 17,
  r: 8,
  p: 1,
};

export const SCRYPT_OWASP_2026_HICPU: ScryptParams = {
  algorithm: "scrypt",
  lN: 13,
  r: 8,
  p: 10,
};

export const PBKDF2_OWASP_2026_SHA256: PBKDF2Params = {
  algorithm: "pbkdf2",
  digest: "sha256",
  i: 600_000,
};

export const PBKDF2_OWASP_2026_SHA512: PBKDF2Params = {
  algorithm: "pbkdf2",
  digest: "sha512",
  i: 210_000,
};
