module.exports = {
  extends: ["plugin:n/recommended"],
  env: {
    node: true,
  },
  rules: {
    // require all requires be top-level
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
    "n/global-require": "error",

    // disallow mixing regular variable and require declarations
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
    "n/no-mixed-requires": ["off", false],

    // disallow use of new operator with the require function
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
    "n/no-new-require": "error",

    // disallow string concatenation with __dirname and __filename
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
    "n/no-path-concat": "error",

    // disallow use of process.env
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
    "n/no-process-env": "error",
  },
};
