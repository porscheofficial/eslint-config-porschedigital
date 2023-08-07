module.exports = {
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/base.ts
        // sets plugin and parser
        // disables rules from eslint:recommended which are already handled by TypeScript.
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: true,
      },
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
        "@typescript-eslint/adjacent-overload-signatures": "error",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
        "@typescript-eslint/array-type": "error",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
        "@typescript-eslint/class-literal-property-style": "off",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
        "@typescript-eslint/consistent-indexed-object-style": "off",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
        "@typescript-eslint/consistent-type-assertions": "error",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        // Buggy: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md#when-not-to-use-it
        "@typescript-eslint/consistent-type-imports": "off",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowDirectConstAssertionInArrowFunctions: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "explicit",
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        "@typescript-eslint/explicit-module-boundary-types": [
          "error",
          {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "semi",
              requireLast: true,
            },
            singleline: {
              delimiter: "semi",
              requireLast: false,
            },
            multilineDetection: "brackets",
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
        // Todo enable?
        "@typescript-eslint/member-ordering": "off",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
        // Todo enable?
        "@typescript-eslint/method-signature-style": "off",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        // Todo enable?
        "@typescript-eslint/naming-convention": "off",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
        "@typescript-eslint/no-confusing-void-expression": [
          "error",
          { ignoreArrowShorthand: true },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            allowSingleExtends: false,
          },
        ],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
        "@typescript-eslint/no-explicit-any": "warn",

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
        // Todo enable?
        "@typescript-eslint/no-inferrable-types": [
          "error",
          {
            ignoreParameters: false,
            ignoreProperties: false,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
        "@typescript-eslint/no-require-imports": ["error"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
        "@typescript-eslint/no-type-alias": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
        "@typescript-eslint/no-unnecessary-qualifier": ["error"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
        "@typescript-eslint/non-nullable-type-assertion-style": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
        "@typescript-eslint/prefer-enum-initializers": ["error"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
        // todo enable?
        "@typescript-eslint/prefer-for-of": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
        "@typescript-eslint/prefer-function-type": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
        "@typescript-eslint/prefer-namespace-keyword": ["error"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
        "@typescript-eslint/prefer-nullish-coalescing": [
          "error",
          {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
        "@typescript-eslint/prefer-optional-chain": ["error"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
        "@typescript-eslint/prefer-readonly": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
        "@typescript-eslint/prefer-readonly-parameter-types": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
        "@typescript-eslint/prefer-regexp-exec": ["error"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
        // Todo enable?
        "@typescript-eslint/prefer-string-starts-ends-with": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
        "@typescript-eslint/promise-function-async": [
          "error",
          {
            allowedPromiseNames: ["Thenable"],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
        // Todo enable?
        "@typescript-eslint/require-array-sort-compare": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
        "@typescript-eslint/sort-type-union-intersection-members": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
        // Todo enable?
        "@typescript-eslint/strict-boolean-expressions": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
        // Todo enable?
        "@typescript-eslint/switch-exhaustiveness-check": ["off"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
        "@typescript-eslint/type-annotation-spacing": ["error"],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
        // Todo enable?
        "@typescript-eslint/typedef": ["off"],

        // Extension Rules
        // Need to be in sync with js rules
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules

        "brace-style": ["off"],
        "@typescript-eslint/brace-style": [
          "error",
          "1tbs",
          { allowSingleLine: true },
        ],

        "comma-dangle": ["off"],
        "@typescript-eslint/comma-dangle": [
          "error",
          {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
          },
        ],

        "comma-spacing": ["off"],
        "@typescript-eslint/comma-spacing": [
          "error",
          { before: false, after: true },
        ],

        "default-param-last": ["off"],
        "@typescript-eslint/default-param-last": ["error"],

        "dot-notation": ["off"],
        "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],

        "func-call-spacing": ["off"],
        "@typescript-eslint/func-call-spacing": ["error", "never"],

        indent: ["off"],
        // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
        "@typescript-eslint/indent": ["off"],

        "@typescript-eslint/init-declarations": ["off"],

        "keyword-spacing": ["off"],
        "@typescript-eslint/keyword-spacing": [
          "error",
          {
            before: true,
            after: true,
            overrides: {
              return: { after: true },
              throw: { after: true },
              case: { after: true },
            },
          },
        ],

        "lines-between-class-members": ["off"],
        "@typescript-eslint/lines-between-class-members": [
          "error",
          "always",
          { exceptAfterSingleLine: false },
        ],

        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": ["error"],

        "@typescript-eslint/no-duplicate-imports": ["off"],

        "no-empty-function": ["off"],
        "@typescript-eslint/no-empty-function": [
          "error",
          {
            allow: ["arrowFunctions", "functions", "methods"],
          },
        ],

        "@typescript-eslint/no-extra-parens": ["off"],

        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": ["error"],

        "@typescript-eslint/no-invalid-this": ["off"],

        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": ["error"],

        "no-magic-numbers": ["off"],
        "@typescript-eslint/no-magic-numbers": [
          "error",
          {
            ignore: [0, 1],
            ignoreDefaultValues: false,
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
            ignoreTypeIndexes: true,
          },
        ],

        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"],

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],

        "no-unused-expressions": ["off"],
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
          },
        ],

        "no-use-before-define": ["off"],
        "@typescript-eslint/no-use-before-define": [
          "error",
          { functions: true, classes: true, variables: true },
        ],

        "object-curly-spacing": ["off"],
        "@typescript-eslint/object-curly-spacing": ["error", "always"],

        quotes: ["off"],
        "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

        "no-return-await": "off",
        "@typescript-eslint/return-await": ["error"],

        semi: ["off"],
        "@typescript-eslint/semi": ["error", "always"],

        "space-before-function-paren": ["error"],
        "@typescript-eslint/space-before-function-paren": [
          "error",
          {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
          },
        ],

        "space-infix-ops": ["off"],
        "@typescript-eslint/space-infix-ops": ["error"],

        // Overrides
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            js: "never",
            mjs: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
          },
        ],
        // https://typescript-eslint.io/rules/no-import-type-side-effects/
        "@typescript-eslint/no-import-type-side-effects": "error",
      },
    },
  ],
};
