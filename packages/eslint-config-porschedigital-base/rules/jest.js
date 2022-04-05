module.exports = {
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx", "**/*.test.js", "**/*.test.jsx"],
      plugins: ["jest"],
      env: {
        "jest/globals": true,
      },
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
    },
  ],
};
