module.exports = {
  extends: [
    "@porscheofficial/eslint-config-porschedigital-base",
    "./rules/react",
    "./rules/react-a11y",
    "./rules/react-hooks",
    "./rules/prettier",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
