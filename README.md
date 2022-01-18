# Porsche Digital ESLint Config

An opinionated ESLint config which supports: JavaScript, TypeScript, Jest and React.

## 🚀 Usage of ESLint configs

Currently there are the following eslint configs provided as extensible shared components

- [Base Config](/packages/eslint-config-porschedigital-base)
- [React Config](/packages/eslint-config-porschedigital-react)

### Prettier

Make sure to also include our [prettier config](/packages/prettier-config-porschedigital).

## 📜 Decisions

### Prettier

We differ between code quality rules and stylistic rules.
Therefore we follow the [recommendation of prettier](https://prettier.io/docs/en/integrating-with-linters.html).
That means, that we use `eslint` exclusively for code quality and `prettier` for the style.
That's why this project also contains a package with a shared `prettier` config containing the rules we have agreed on (`WIP`).

### Dependencies

In order to keep this opinionated config as plug- and playable as possible, we decided to declare the dependencies not as `peerDependencies`.

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md).

## License

See [LICENSE](./LICENSE.md).
