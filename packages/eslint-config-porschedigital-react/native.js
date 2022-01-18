module.exports = {
  extends: ["./rules/react-native.js", "./index.js"].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
