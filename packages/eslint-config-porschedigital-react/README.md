# eslint-config-porschedigital-react

This package provides the base eslint config as an extensible shared component.

- [Intended projects](#-intended-projects)
- [1. Access](#1-access)
- [2. Configure Project](#2-configure-project)

## ✅ Intended Projects

- React based projects
- other JS based projects: [`@porsche-digital/eslint-config-porschedigital-base`](/packages/eslint-config-porschedigital-base)

## 1. 🚀 Access

In order to access this eslint-config follow these steps:

1. Generate a personal access token with api read access: https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html

2. Make sure that the env variable is set: GITLAB_NPM_REGISTRY_TOKEN

```sh
# e.g. through ~/.zshenv
# export GITLAB_NPM_REGISTRY_TOKEN="Your Personal Access Token"
```

## 2. 🔧 Configure Project

1. Create `.npmrc` on projectlevel

```sh
@porsche-digital:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/projects/15220410/packages/npm/:_authToken=${GITLAB_NPM_REGISTRY_TOKEN}
//gitlab.com/api/v4/packages/npm/:_authToken=${GITLAB_NPM_REGISTRY_TOKEN}
//gitlab.com/api/v4/projects/:_authToken=${GITLAB_NPM_REGISTRY_TOKEN}
```

2. Configure access to npm registry for GitLab CI/CD:

```yaml
# .gitlab-ci.yml

# CI_JOB_TOKEN is set by GitLab-CI
before_script:
  - export GITLAB_NPM_REGISTRY_TOKEN=$CI_JOB_TOKEN
```

3. Install with peerDependencies:

```sh
  npm info "@porsche-digital/eslint-config-porschedigital-react" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "@porsche-digital/eslint-config-porschedigital-react"
```

4. Create or update `/.eslintrc`:

```json
{
  "extends": "@porsche-digital/eslint-config-porschedigital-react"
}
```

5. Use the provided `/.tsconfig.json` as base or continue using existing config:

```json
{
  "extends": "@porsche-digital/eslint-config-porschedigital-base/tsconfig.json",
    // Consider restricting the scope: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#wide-includes-in-your-tsconfig 
  "include": ["src/**/*"]
}
```

6. [Optional] Enable eslint autofix: `if(ide === "vscode")` update `./.vscode/settings.json`:

> Better use this instead of Prettier plugin of vscode.
> Requires ESLint Plugin: `dbaeumer.vscode-eslint`

   ```js
   "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "html",
        "javascript",
        "typescript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
   "editor.formatOnSave":  true,
   "[javascript]":  {
    "editor.formatOnSave":  false,
   },
   "[javascriptreact]":  {
    "editor.formatOnSave":  false,
   },
   "[typescript]":  {
    "editor.formatOnSave":  false,
   },
   "[typescriptreact]":  {
    "editor.formatOnSave":  false,
   },
   ```


## 3. 🔬Tweaks

### @porsche-digital/eslint-config-porschedigital-react/native

This entry point enables the linting rules for React Native. To use, add `"extends": ["@porsche-digital/eslint-config-porschedigital-react", "@porsche-digital/eslint-config-porschedigital-react/native"]` to your `.eslintrc`

### Prettier

Better use vscode setting `editor.codeActionsOnSave`: See step 6.
