import url from 'node:url'
import path from 'node:path'

const entries: Array<{
  password: string
  phc: string
}> = []

const algorithms = ["argon2id", "argon2i", "argon2d"] as const;
for (const algorithm of algorithms) {
  const password = 'password'
  const phc = await Bun.password.hash(password, {
    algorithm,
    memoryCost: 4,
    timeCost: 3,
  });

  entries.push({ password, phc })
}

const outPath = path.join(url.fileURLToPath(import.meta.url), '../../bun-hash.txt')
const outFile = Bun.file(outPath)
await outFile.write(
  entries.map(entry => `${entry.password}:${entry.phc}`).join('\n')
)
