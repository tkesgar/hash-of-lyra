import argon2 from "@phc/argon2";
import pbkdf2 from "@phc/pbkdf2";
import fs from "node:fs";
import path from "node:path";

const entries = [];

const variants = ["id", "i", "d"];
for (const variant of variants) {
  const password = "password";
  const phc = await argon2.hash(password, { variant });
  entries.push({ password, phc });
}

const digests = ["sha1", "sha256", "sha512"];
for (const digest of digests) {
  const password = "password";
  const phc = await pbkdf2.hash(password, { digest, iterations: 1000 });
  entries.push({ password, phc });
}

const outPath = path.join(import.meta.dirname, "phc-hash.txt");
fs.writeFileSync(
  outPath,
  entries.map((entry) => `${entry.password}:${entry.phc}`).join("\n"),
);
