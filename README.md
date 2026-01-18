# hash-of-lyra

> This next hash is dedicated to the world!

Hash of Lyra is a JavaScript password hashing library.

## Features

- Works in various JavaScript environments (Node.js, Bun, Cloudflare Workers, web browsers, etc.)
- Tested using various vectors and other library's test cases
- Uses [PHC string format][phc-string-format]
- **(in progress)** Zero dependencies (only use built-in APIs instead of native extensions/WASM)
- **(planned)** CLI to generate hash
- **(planned)** CLI to measure hashing performance

## Usage

### Installation

Hash of Lyra is available on NPM registry:

```sh
$ bun add hash-of-lyra      # Bun
$ npm install hash-of-lyra  # NPM
```

### API

#### `hash(password: string, algorithm: mixed, parameters: object): Promise<string>`

Generates a hash string from the provided `password` using `algorithm` as hash algorithm
and `parameters` for the algorithm parameters.

```js
import { hash } from "hash-of-lyra"

const password = 'friedrice'

// All Argon2 algorithms uses the following parameters:
// - m: memory cost
// - t: time cost
// - p: degree of parallelism
// - keylen (optional): length of generated key (default = 32)
// - salt (optional): salt for the password (default = cryptographically random 8 bytes)
await hash(password, 'argon2id', { m: 12288, t: 3, p: 1 })
await hash(password, 'argon2i' , { m: 12288, t: 3, p: 1 })
await hash(password, 'argon2d' , { m: 12288, t: 3, p: 1 })
await hash(password, 'argon2d' , { m: 12288, t: 3, p: 1, keylen: 16 })

// NOTE: In Bun, `p`, `keylen`, and `salt` parameters is ignored as there is no way to pass the parameters
// to the underlying `Bun.password.hash()` function.

// Scrypt algorithm uses the following parameters:
// - lN: cost exponent (actual cost will be 2^lN)
// - r: block size
// - p: degree of parallelism
// - keylen (optional): length of generated key (default = 32)
// - maxmem (optional): memory usage limit (default = 32 * 1024 * 1024)
// - salt (optional): salt for the password (default = cryptographically random 16 bytes)
await hash(password, 'scrypt' , { lN: 15, r: 8, p: 3 })
await hash(password, 'scrypt' , { lN: 15, r: 8, p: 3, keylen: 64, maxmem: 128 * 1024 * 1024 })

// PBKDF2 algorithm uses the following parameter:
// - i: number of iterations
// - digest: HMAC digest algorithm to use (available values: 'sha256', 'sha512')
// - keylen (optional): length of generated key (default = 32 (SHA-256), 64 (SHA-512))
// - salt (optional): salt for the password (default = cryptographically random 16 bytes)
await hash(password, 'pbkdf2', { i: 600_000, digest: 'sha256' })
await hash(password, 'pbkdf2', { i: 210_000, digest: 'sha512', keylen: 32 })
```

#### Password hashing parameters

The best practice for hashing passwords is to tune the parameters to match the system performance.
Stronger parameters will make the password more difficult to crack in the event of leakage, but
it will also cause performance slowdown and make the system vulnerable to DoS attacks. Ideally, the
parameters should also be updated over time as the system evolves or moved into new machines/deployment platforms.

Therefore, we decided that `hash()` **should not provide any default parameters**, except for non-performance
related values such as generated key length. However, we provide several recommendations that you can import from
the package. All parameter objects use the name `<ALGORITHM>_<SOURCE>_<YEAR>_<ADDITIONAL_INFO>` to make it explicit
in the code.

```js
import {
  ARGON2ID_OWASP_2026_HICPU,
  ARGON2ID_OWASP_2026_HIRAM,
  ARGON2I_OWASP_2026_HICPU,
  ARGON2I_OWASP_2026_HIRAM,
  ARGON2D_OWASP_2026_HICPU,
  ARGON2D_OWASP_2026_HIRAM,
  SCRYPT_OWASP_2026_HICPU,
  SCRYPT_OWASP_2026_HIRAM,
  PBKDF2_OWASP_2026_SHA256,
  PBKDF2_OWASP_2026_SHA512,
} from "hash-of-lyra"

await hash('password', 'argon2id', ARGON2ID_OWASP_2026_HICPU)
await hash('password', 'argon2id', ARGON2ID_OWASP_2026_HIRAM)
await hash('password', 'argon2i', ARGON2I_OWASP_2026_HICPU)
await hash('password', 'argon2i', ARGON2I_OWASP_2026_HIRAM)
await hash('password', 'argon2d', ARGON2D_OWASP_2026_HICPU)
await hash('password', 'argon2d', ARGON2D_OWASP_2026_HIRAM)
await hash('password', 'scrypt', SCRYPT_OWASP_2026_HICPU)
await hash('password', 'scrypt', SCRYPT_OWASP_2026_HIRAM)
await hash('password', 'pbkdf2', PBKDF2_OWASP_2026_SHA256)
await hash('password', 'pbkdf2', PBKDF2_OWASP_2026_SHA512)
```

Sources:

- OWASP 2026: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#password-hashing-algorithms

#### `verify(phcstring: string, password: string): Promise<boolean>`

Given a password hash string in [PHC format][phc-string-format], returns `true` if `password` matches the hash and `false` otherwise.

```js
import { verify } from "hash-of-lyra"

const phcstring = "$pbkdf2-sha1$i=4096$c2FsdA$SwB5AbdlSJq+rUnZJvch0GWkKcE"
await verify(phcstring, "password") // true
await verify(phcstring, "pasword")  // false
```

#### Errors

##### `HashError`

Thrown when the hash algorithm function call throws an error, such as OOM or invalid parameters provided.

Properties:

- `cause: any`: underlying error

```js
try {
  // Will throw error because the memory limit is only 1 MiB
  await hash(password, 'scrypt' , { lN: 20, r: 8, p: 3, keylen: 64, maxmem: 1 * 1024 * 1024 })
} catch (error) {
  console.error(error)
  // HashError: Hash function throws an error

  console.log(error.cause)
  // RangeError: Invalid scrypt params: error:030000AC:digital envelope routines::memory limit exceeded
}
```

#### `UnknownAlgorithmError`

Thrown by `verify()` when the PHC string uses an unknown algorithm.

```js
try {
  // hash-of-lyra does not implement `custom` algorithm
  const phcstring = "$custom$a=1,b=2,c=3$UGhhZXRob24K$Vml2aWFuIGJlc3QgZ2lybAo="
  await verify(phcstring, 'password')
} catch (error) {
  console.error(error)
  // UnknownAlgorithmError: Unknown algorithm: custom

  console.log(error.id) // custom
}
```

Properties:

- `id: string`: algorithm name from the PHC string

##### `InvalidPHCStringError`

Thrown by `verify()` when the PHC string is not valid (e.g. missing some parameters).

```js
try {
  // Parameter m is missing
  const phcstring = "$argon2id$v=19$t=4,p=2$xHcElztEnwcblhSU29Z0+giGsdnlqA6wSNNd2CTydrU$xEW8n/nvs5cybwBUpzKG2zm4gqQufIIJyS0PS1z5AtM"
  await verify(phcstring, 'password')
} catch (error) {
  console.error(error)
  // InvalidPHCStringError: Missing parameter for argon2id: m

  console.log(error.info)
  // {
  //   id: "argon2id",
  //   version: 19,
  //   params: { t: 4, p: 2 },
  //   salt: <Buffer c4 77 04 97 ...>,
  //   hash: <Buffer c4 45 bc 9f ...>
  // }
}
```

Properties:

- `info`: parsed information from the PHC string
  - `info.id: string`: algorithm name (e.g. `argon2id`, `pbkdf2-sha256`)
  - `info.version?: number`: version number (e.g. `16`)
  - `info.params: Record<string, string | number>`: algorithm parameters (e.g. `{ m: 1024, t: 4, p: 2 }`), can be empty object
  - `info.salt?: Uint8Array`: salt value
  - `info.hash?: Uint8Array`: hash value

#### `AlgorithmNotAvailableError`

Thrown if the environment does not support the algorithm.

```js
try {
  // crypto.argon2 is only available in Node 24.7+
  await hash('password', 'argon2id', { m: 12288, t: 3, p: 1 })
} catch (error) {
  console.error(error)
  // AlgorithmNotAvailableError: crypto.argon2 is not available
}

try {
  // crypto.argon2 is only available in Node 24.7+
  const phcstring = "$argon2id$v=19$m=1024,t=4,p=2$xHcElztEnwcblhSU29Z0+giGsdnlqA6wSNNd2CTydrU$xEW8n/nvs5cybwBUpzKG2zm4gqQufIIJyS0PS1z5AtM"
  await verify(phcstring, 'password')
} catch (error) {
  console.error(error)
  // AlgorithmNotAvailableError: crypto.argon2 is not available
}
```

### CLI

#### `hash-of-lyra generate`

TBD

#### `hash-of-lyra benchmark`

TBD

## Notes

### Supported environments

| Environment | Argon2 | Scrypt | PBKDF2 |
|-------------|--------|--------|--------|
| Node.js                                      | ❎<sup>[1]</sup> | ✅ | ✅ |
| Bun                                          | ✅<sup>[2]</sup> | ✅ | ✅ |
| Cloudflare Workers (with `nodejs_compat`)    | TBD | TBD | TBD |
| Cloudflare Workers (without `nodejs_compat`) | TBD | TBD | TBD |

> <sup>[1]</sup> `crypto.argon2` is available on [Node.js 24.7.0+][nodejs-crypto-argon2].

> <sup>[2]</sup> `Bun.password.hash` Argon2 implementation does not support passing `p`, `salt`, and `keylen`,
> so hashes generated in Bun will always have `p = 1`, randomly generated salt, and fixed hash length (32 bytes).

[nodejs-crypto-argon2]: https://nodejs.org/api/crypto.html#cryptoargon2algorithm-parameters-callback
[bun-password-hash]: https://bun.com/docs/guides/util/hash-a-password

## License

MIT License

[phc-string-format]: https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md
