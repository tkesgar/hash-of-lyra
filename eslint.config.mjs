import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import noOnlyTests from "eslint-plugin-no-only-tests";
import { defineConfig } from "eslint/config";
import path from "node:path";
import tseslint from "typescript-eslint";

export default defineConfig(
  includeIgnoreFile(path.resolve(".gitignore")),
  {
    extends: [eslint.configs.recommended, tseslint.configs.recommended],
  },
  {
    plugins: {
      "no-only-tests": noOnlyTests,
    },
    rules: {
      "no-only-tests/no-only-tests": "error",
    },
  },
  prettier,
);
