import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { verify } from "../../verify";
import { phcPBDKF2Vectors, phcScryptVectors } from "../fixtures/vectors";

describe("verify", () => {
  const phcStrings: Array<{
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
        phcStrings.push({
          password: password!,
          hash: hash!,
        });
      });
  }

  test.each(phcStrings)(
    "should return true for verify($hash, $password)",
    async (tc) => {
      if (!import.meta.env.ALLOW_SLOW_TESTS) {
        // TODO Use Bun skip feature instead
        return;
      }

      expect(
        await verify(tc.hash, tc.password, { scryptMaxmem: tc.maxmem }),
      ).toBe(true);
    },
  );
});
