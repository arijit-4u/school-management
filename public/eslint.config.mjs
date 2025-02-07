import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      // Possible errors
      "no-console": "warn",
      "no-debugger": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",

      // Best practices
      eqeqeq: "error",
      "no-eval": "error",
      "no-implicit-coercion": "error",

      // Variables
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-shadow": "error",
      "no-redeclare": "error",

      // Code complexity
      "max-lines": ["warn", 300],
      "max-nested-callbacks": ["warn", 3],

      // ES6
      "prefer-const": "error",
      "no-duplicate-imports": "error",
    },
  },
];
