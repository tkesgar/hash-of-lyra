import format from "@phc/format";
import semver from "semver";
import { describe, it } from "vitest";
import { hash } from "../hash";
import * as params from "../params";

describe("OWASP params", () => {
  it.for(Object.entries(params))(
    "should be able to generate hash ($0)",
    async ([name, params], { expect, skip }) => {
      if (
        name.startsWith("ARGON2") &&
        !semver.satisfies(process.versions.node, ">=24.7.0")
      ) {
        skip("node <24.7.0");
      }

      let maxmem: number | undefined = undefined;
      if (name === "SCRYPT_OWASP_2026_HIMEM") {
        if (import.meta.env.ALLOW_SLOW_TESTS) {
          maxmem = 256 * 1024 * 1024;
        } else {
          skip("slow");
        }
      }

      const phcString = await hash("password", {
        ...params,
        ...{ maxmem },
        salt: Buffer.from("starsoflyra"),
      });
      expect(format.deserialize(phcString)).toMatchSnapshot();
    },
  );
});
