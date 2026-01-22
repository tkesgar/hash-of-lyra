import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { verify } from "../../verify";
import { phcPBDKF2Vectors, phcScryptVectors } from "../fixtures/vectors";

describe("verify", () => {
  const testcases: Array<{
    password: string;
    hash: string;
    slow?: boolean;
    maxmem?: number;
  }> = [...phcPBDKF2Vectors, ...phcScryptVectors];

  for (const hashFile of ["bun-hash.txt", "phc-hash.txt", "zig-hash.txt"]) {
    const hashFilePath = path.join(
      import.meta.dirname,
      "../fixtures",
      hashFile,
    );
    fs.readFileSync(hashFilePath, "utf-8")
      .split("\n")
      .map((ln) => ln.trim())
      .filter(Boolean)
      .forEach((ln) => {
        const [password, hash] = ln.split(":");
        testcases.push({
          password: password!,
          hash: hash!,
        });
      });
  }

  for (const tc of testcases) {
    test.skipIf(Boolean(tc.slow))(
      `should return true for verify(${tc.hash}, ${tc.password})`,
      async () => {
        expect(
          await verify(tc.hash, tc.password, { scryptMaxmem: tc.maxmem }),
        ).toBe(true);
      },
    );
  }
});
