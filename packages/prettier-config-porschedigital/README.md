# @porscheofficial/prettier-config-porschedigital

This package provides the prettier config as an extensible shared component.

The config just reflects the default values. It doesn't make any sense to install this without the ESLint config. Have a look here for specific and complete setup information:

- [Base Config](/packages/eslint-config-porschedigital-base)
- [React Config](/packages/eslint-config-porschedigital-react)

## 🔧 Configure Project

1. Install with peerDependencies:

```sh
  npm info "@porscheofficial/prettier-config-porschedigital" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "@porscheofficial/prettier-config-porschedigital"
```

2. Update `package.json`:

```json
{
  "prettier": "@porscheofficial/prettier-config-porschedigital"
}
```

3. [Optional] Add scripts to `package.json`:

```json
"scripts": {
  "prettier:ci": "prettier --check ./",
  "prettier:fix": "prettier --write ./"
}

```

5. [Optional] Enable eslint autofix:

### `if(ide === "vscode")` update `./.vscode/settings.json`:

> Requires Prettier Plugin `esbenp.prettier-vscode`

```js
// .vscode/settings.json
{
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
