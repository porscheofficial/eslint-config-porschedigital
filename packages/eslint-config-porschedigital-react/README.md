# @porscheofficial/eslint-config-porschedigital-react

This package provides the react eslint config as an extensible shared component.

- [Intended Projects](#-intended-projects)
- [Configure Project](#-configure-project)
- [Errors](#-errors)
- [License](#license)

## ✅ Intended Projects

- React based projects
- Other JS based projects: [`@porscheofficial/eslint-config-porschedigital-base`](/packages/eslint-config-porschedigital-base)

## 🔧 Configure Project

1. Install with peerDependencies:

```sh
  npm info "@porscheofficial/eslint-config-porschedigital-react" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "@porscheofficial/eslint-config-porschedigital-react"
```

2. Create or update `/.eslintrc`:

```json
{
  "extends": "@porscheofficial/eslint-config-porschedigital-react"
}
```

3. [Optional] Add prettier config:

```sh
yarn add --dev --exact prettier @porscheofficial/prettier-config-porschedigital
```

Update `package.json`:

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

## Errors

### `ESLint couldn't find the plugin "eslint-plugin-jest"`

Unfortunately `eslint` doesn't officially support plugins as dependencies in shareable configs ([See eslint#3458](https://github.com/eslint/eslint/issues/3458)).
The result is, that `eslint` doesn't find these plugins.
However, we want this package to be as convient to use as possible, so we don't plan to add these plugins as peerDependencies.

If you see a complain like `"eslint-plugin-jest"`, simply install this dependency explicitly:

```
yarn add --dev --exact eslint-plugin-jest
```

With more recent package managers, dependencies are installed in a flat way.
That means, that dependencies and secondary dependencies are installed directly in the top level `node_modules` directory ([See how npm3 works](https://npm.github.io/how-npm-works-docs/npm3/how-npm3-works.html)).

### `Parsing error: Cannot read file [...]tsconfig`

Reference directly to your `.tsconfig`.

```js
//.eslintrc
{
  // ...
      "parserOptions": {
      "project": "./tsconfig.json"
    },
 // ...
}
```

## License

See [LICENSE](./LICENSE.md).
