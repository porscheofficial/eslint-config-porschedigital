# @porscheofficial/eslint-config-porschedigital-base

This package provides the base ESLint config as an extensible shared component.

- [Intended projects](#-intended-projects)
- [Configure Project](#-configure-project)
- [License](#license)

## ✅ Intended Projects

- `node.js` or other JS based projects
- `react`: Better use [`@porscheofficial/eslint-config-porschedigital-react`](/packages/eslint-config-porschedigital-react)

## 🔧 Configure Project

1. Install with peerDependencies:

```sh
  npm info "@porscheofficial/eslint-config-porschedigital-base" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "@porscheofficial/eslint-config-porschedigital-base"
```

2. Create or update `/.eslintrc`:

```json
{
  "extends": "@porscheofficial/eslint-config-porschedigital-base"
}
```

3. [Optional] Add prettier config:

```sh
yarn add --dev --exact prettier @porscheofficial/prettier-config-porschedigital
```

```json
{
  "prettier": "@porscheofficial/prettier-config-porschedigital"
}
```

4. [Optional] Add scripts to `./package.json`:

```json
"scripts": {
  "eslint:ci": "eslint src/ --ext .js,.jsx,.tsx,.ts -f stylish",
  "eslint:fix": "eslint src/ --fix --ext .js,.jsx,.tsx,.ts  -f stylish --quiet",
  "prettier:ci": "prettier --check ./",
  "prettier:fix": "prettier --write ./"
}

```

5. [Optional] Enable eslint autofix:

### `if(ide === "vscode")` update `./.vscode/settings.json`:

> Requires Prettier Plugin `esbenp.prettier-vscode`
> Requires ESLint Plugin: `dbaeumer.vscode-eslint`

```js
// .vscode/settings.json
{
 "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
 },
 "eslint.validate": [
     "html",
     "javascript",
     "typescript",
     "typescript",
 ],
 "editor.formatOnSave": true,
 "[javascript]": {
     "editor.formatOnSave": false
 },
 "[javascriptreact]": {
     "editor.formatOnSave": false
 },
 "[typescript]": {
     "editor.formatOnSave": false
 },
 "[typescriptreact]": {
     "editor.formatOnSave": false
 }
}
```

## License

See [LICENSE](./LICENSE.md).
