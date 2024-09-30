import globals from "globals";
import ESLint from "@eslint/js";


export default [
  ESLint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {},
    rules: {},
  },
];