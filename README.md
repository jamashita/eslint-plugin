# Eslint-Config

ESLint Library bundle for us.

## Requirement

```json
"@typescript-eslint/eslint-plugin": "4.0.1",
"@typescript-eslint/parser": "4.0.1",
"@typescript-eslint/typescript-estree": "4.0.1",
"eslint": "7.8.1",
"eslint-plugin-import": "2.22.0",
"eslint-plugin-jest": "23.20.0",
"eslint-plugin-jsx-a11y": "6.3.1",
"eslint-plugin-react": "7.20.6",
"eslint-plugin-react-hooks": "4.1.0",
"jest": "26.4.2",
"typescript": "4.0.2"
```

## Usage

Add this into your `.eslintrc` file, `extends` section.

```json
// Below all
'@jamashita/eslint-config'
// for TypeScript
'@jamashita/eslint-config/base'
// for Jest 
'@jamashita/eslint-config/jest'
// for React
'@jamashita/eslint-config/react'
```

```json
'extends': [
  // Below all
  '@jamashita/eslint-config'
  // for TypeScript
  '@jamashita/eslint-config/base'
  // for Jest 
  '@jamashita/eslint-config/jest'
  // for React
  '@jamashita/eslint-config/react'
]
```
