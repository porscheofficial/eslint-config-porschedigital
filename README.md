# Porsche Digital JavaScript Style Guide

*Version 3 is a detached fork of Airbnb's eslint config.
For now it's even more opinionated: TypeScript, Jest as Test Runner, React and React Native support.*

- Maintainer: Patrick
- Used in projects: YSLY, HomeStudio.fit, YuuYoga, Porsche Digital Web, VinArt,...
## 🚀 Usage of eslint configs

Currently there are the following eslint configs provided as extensible shared components

- [Base](/packages/eslint-config-porschedigital-base)
- [React (native)](/packages/eslint-config-porschedigital-react)

The current alpha version is tagged as `latest` to increase adoption rate.
To stay with v2 make sure to install it explicitly: `@2.2.4`.

### Prettier

Make sure to also include our [prettier config](/packages/prettier-config-porschedigital).

## TODO

- [ ] Look through all rules (deprecated,...)
- [ ] Check compatibility with recent projects
- [ ] Deconstruct the recommended rules

## 📜 Decisions
### Prettier

We differ between code quality rules and stylistic rules.
Therefor we follow the [recommendation of prettier](https://prettier.io/docs/en/integrating-with-linters.html).
That means, that we use `eslint` exclusively for code quality and `prettier` for the style.
That's why this project also contains a package with a shared `prettier` config containing the rules we have agreed on (`WIP`).

### Development

#### Update dependencies

Use `yarn upgrade-interactive --latest`.

### 🎉 Release

In order to release a new version use the configured pipelines.
The changelogs will be generated based on the commit messages.

## :memo: License

**Eventually** Licensed under the [MIT License](./LICENSE).