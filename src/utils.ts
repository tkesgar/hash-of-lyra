export function phcIdToAlgorithm(id: string) {
  switch (id) {
    case "argon2id":
    case "argon2i":
    case "argon2d":
    case "scrypt":
      return { algorithm: id };
    case "pbkdf2-sha1":
      return { algorithm: "pbkdf2", digest: "sha1" };
    case "pbkdf2-sha256":
      return { algorithm: "pbkdf2", digest: "sha256" };
    case "pbkdf2-sha512":
      return { algorithm: "pbkdf2", digest: "sha512" };
    default:
      throw new Error(`Unknown phc id: ${id}`);
  }
}
