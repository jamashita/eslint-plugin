# eslint-plugin

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

ESLint Library bundle for us.

## Install

```text
yarn add @jamashita/eslint-plugin typescript -D
```

### Apply in `.eslintrc`

```json
{
  "extends": [
    // eslint settings
    "plugin:@jamashita/es",
    // import settings
    "plugin:@jamashita/import",
    // JSX settings
    "plugin:@jamashita/jsx",
    // Next.js settings, including react settings
    "plugin:@jamashita/next",
    // Node.js settings
    "plugin:@jamashita/node",
    // React.js settings, including JSX settings
    "plugin:@jamashita/react",
    // including eslint, import, Node.js, TS settings
    "plugin:@jamashita/recommended",
    // including Solid.js settings, inclding JSX settings
    "plugin:@jamashita/solid",
    // including TS settings
    "plugin:@jamashita/solid"
  ]
}
```

## License

[MIT](LICENSE)