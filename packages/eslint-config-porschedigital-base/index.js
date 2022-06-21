require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/node",
    "./rules/style",
    "./rules/variables",
    "./rules/es6",
    "./rules/imports",
    "./rules/jest",
    "./rules/strict",
    "./rules/typescript",
    "./rules/prettier",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
