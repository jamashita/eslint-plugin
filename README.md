# Eslint-Config

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

ESLint Library bundle for us.

## Requisite

these packages are required.

```json
{
  "@typescript-eslint/eslint-plugin": "4.11.1",
  "@typescript-eslint/parser": "4.11.1",
  "@typescript-eslint/typescript-estree": "4.11.1",
  "eslint": "7.15.0",
  "eslint-plugin-import": "2.22.1",
  "eslint-plugin-jest": "24.1.3",
  "eslint-plugin-jsx-a11y": "6.4.1",
  "eslint-plugin-react": "7.21.5",
  "eslint-plugin-react-hooks": "4.2.0",
  "jest": "26.6.3",
  "typescript": "4.1.3"
}
```

## Rules

### `@jamashita/eslint-config`

Base config. TypeScript required.

### Install

```text
yarn add @jamashita/eslint-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  @typescript-eslint/typescript-estree \
  eslint \
  eslint-plugin-import \
  typescript -D
```

### Append in `.eslintrc`

```json
{
  "extends": [
    "@jamashita/eslint-config"
  ]
}
```

### `@jamashita/eslint-config/jest`

Jest config. Jest required.

### Install

```text
yarn add @jamashita/eslint-config \
  eslint \
  eslint-plugin-jest \
  jest -D
```

### Append in `.eslintrc`

```json
{
  "extends": [
    "@jamashita/eslint-config/jest"
  ]
}
```

### `@jamashita/eslint-config/react`

React config.

### Install

```text
yarn add @jamashita/eslint-config \
  eslint \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks -D
```

### Append in `.eslintrc`

```json
{
  "extends": [
    "@jamashita/eslint-config/react"
  ]
}
```

## License

[MIT](LICENSE)