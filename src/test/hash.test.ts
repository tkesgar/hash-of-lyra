import format from "@phc/format";
import semver from "semver";
import { afterAll, beforeAll, describe, it } from "vitest";
import { hash } from "../hash";
import { phcIdToAlgorithm } from "../utils";
import {
  testHashArgon2,
  testHashPBKDF2,
  testHashScrypt,
} from "./fixtures/vectors";

describe("hash", () => {
  describe("argon2", () => {
    it.for(testHashArgon2)(
      "should generate correct hash ($hash)",
      async (tc, { expect, skip }) => {
        if (!semver.satisfies(process.versions.node, ">=24.7.0")) {
          skip("node <24.7.0");
        }

        const testPhc = format.deserialize(tc.hash);
        const phcString = await hash(tc.password, {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          algorithm: testPhc.id as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(testPhc.params! as any),
          salt: testPhc.salt!,
        });

        const phc = format.deserialize(phcString);
        expect(phc).toEqual(testPhc);
      },
    );
  });

  describe("pbkdf2", () => {
    describe("generate correct hash", () => {
      beforeAll(() => {
        process.env.ALLOW_SHA1_HASH = "OK";
      });

      it.for(testHashPBKDF2)(
        "should generate correct hash ($hash)",
        async (tc, { expect }) => {
          const testPhc = format.deserialize(tc.hash);
          const phcString = await hash(tc.password, {
            ...phcIdToAlgorithm(testPhc.id),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(testPhc.params! as any),
            salt: testPhc.salt!,
          });

          const phc = format.deserialize(phcString);
          expect(phc).toEqual(testPhc);
        },
      );

      afterAll(() => {
        delete process.env.ALLOW_SHA1_HASH;
      });
    });

    it("should not allow PBKDF2 with digest = sha1", async ({ expect }) => {
      await expect(() => {
        return hash("password", {
          algorithm: "pbkdf2",
          i: 1000,
          digest: "sha1",
        });
      }).rejects.toThrowError("PBKDF2 hash with SHA1 is not allowed");
    });
  });

  describe("scrypt", () => {
    it.for(testHashScrypt)(
      "should generate correct hash ($hash)",
      async (tc, { expect }) => {
        const testPhc = format.deserialize(tc.hash);
        const phcString = await hash(tc.password, {
          algorithm: "scrypt",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(testPhc.params! as any),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          lN: testPhc.params!.ln! as any,
          salt: testPhc.salt!,
        });

        const phc = format.deserialize(phcString);
        expect(phc).toEqual(testPhc);
      },
    );
  });
});
