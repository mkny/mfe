/*eslint sort-keys: "error"*/

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:prettier/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "prettier",
    "import",
    //
  ],
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": isProduction ? "error" : "warn",
    "array-callback-return": ["error", { allowImplicit: true }],
    "arrow-body-style": ["error", "as-needed"],
    complexity: ["error", 4],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    indent: "off",
    // indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": ["error", "always"],
    "max-lines": [
      "error",
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "multiline-ternary": ["error", "always-multiline"],
    "no-console": isProduction ? "error" : "warn",
    "no-multi-spaces": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../../", "../../", "./../../../"],
      },
    ],
    "no-trailing-spaces": "error",
    "no-unused-vars": isProduction ? "error" : "warn",
    "object-curly-spacing": ["error", "always"],
    "prefer-template": "error",
    "prettier/prettier": "error",
    quotes: ["error", "double"],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    semi: ["error", "always"],
  },
  settings: {
    react: {
      "import/internal-regex": "^(assets|common|components|hooks|tokens)/",
      version: "detect",
    },
  },
};
