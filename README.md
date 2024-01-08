# eslint-plugin

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

ESLint Library bundle for us.

## Install

```text
yarn add @jamashita/eslint-plugin typescript -D
```

## Prerequisite

```
> node -v
v20.10.0

> npm -v
10.2.3

> yarn -v
1.22.21
```

### Apply in `.eslintrc`

```json
{
  "extends": [
    // import settings
    "plugin:@jamashita/import",
    // JSX settings
    "plugin:@jamashita/jsx",
    // Next.js settings, including React.js settings
    "plugin:@jamashita/next",
    // Node.js settings
    "plugin:@jamashita/node",
    // React.js settings, including JSX settings
    "plugin:@jamashita/react",
    // including eslint, import, Node.js, TS settings
    "plugin:@jamashita/recommended",
    // Solid.js settings, inclding JSX settings
    "plugin:@jamashita/solid",
    // TS settings
    "plugin:@jamashita/ts"
  ]
}
```

## License

[MIT](LICENSE)