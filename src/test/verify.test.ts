import fs from "node:fs";
import path from "node:path";
import semver from "semver";
import { describe, test } from "vitest";
import { verify } from "../verify";
import { phcPBDKF2Vectors, phcScryptVectors } from "./fixtures/vectors";

describe("verify", () => {
  const phcStrings: Array<{
    password: string;
    hash: string;
    slow?: boolean;
    maxmem?: number;
  }> = [...phcPBDKF2Vectors, ...phcScryptVectors];

  for (const hashFile of ["bun-hash.txt", "phc-hash.txt", "zig-hash.txt"]) {
    const hashFilePath = path.join(import.meta.dirname, "./fixtures", hashFile);
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

  test.for(phcStrings)(
    "should return true for verify($hash, $password)",
    async (tc, { expect, skip }) => {
      if (tc.slow && !import.meta.env.ALLOW_SLOW_TESTS) {
        skip("slow");
      }

      if (
        tc.hash.startsWith("$argon2") &&
        !semver.satisfies(process.versions.node, "24.7.0")
      ) {
        skip("node <24.7.0");
      }

      expect(
        await verify(tc.hash, tc.password, { scryptMaxmem: tc.maxmem }),
      ).toBe(true);
    },
  );
});
