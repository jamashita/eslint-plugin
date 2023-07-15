'use strict';

module.exports = {
  'extends': [
    'eslint:recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2024,
    'sourceType': 'module'
  },
  'plugins': [],
  'env': {
    'es2020': true,
    'es2021': true,
    'es6': true
  },
  'rules': {
    /* Eslint */
    // Possible Errors
    'array-callback-return': 'off',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'off',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': [
      'error',
      {
        'skipStrings': false,
        'skipComments': false,
        'skipRegExps': false,
        'skipTemplates': false
      }
    ],
    'no-loss-of-precision': 'off',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': [
      'error',
      {
        'disallowArithmeticOperators': true
      }
    ],
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    // Suggestions
    'accessor-pairs': 'off',
    'arrow-body-style': [
      'error',
      'always'
    ],
    'block-scoped-var': 'error',
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'error',
    'consistent-this': 'error',
    'curly': [
      'error',
      'all'
    ],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'eqeqeq': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'logical-assignment-operators': [
      'error',
      'never'
    ],
    'max-classes-per-file': 'error',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-continue': 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-function': 'off',
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'off',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'off',
    'no-inline-comments': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-redeclare': 'off',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': [
      'error',
      {
        'allowInParentheses': false
      }
    ],
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'error',
    'no-throw-literal': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    'radix': 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'error',
    'spaced-comment': [
      'error',
      'always'
    ],
    'strict': 'error',
    'symbol-description': 'off',
    'vars-on-top': 'error',
    'yoda': 'error',
    // Layout & Formatting
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'error',
    'array-element-newline': [
      'error',
      'consistent'
    ],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'dot-location': [
      'error',
      'property'
    ],
    'eol-last': 'error',
    'func-call-spacing': 'off',
    'function-call-argument-newline': [
      'error',
      'consistent'
    ],
    'function-paren-newline': [
      'error',
      'consistent'
    ],
    'generator-star-spacing': 'error',
    'implicit-arrow-linebreak': 'error',
    'indent': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'line-comment-position': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'max-len': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-extra-parens': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'error',
      {
        'consistent': true
      }
    ],
    'object-curly-spacing': 'off',
    'object-property-newline': [
      'error',
      {
        'allowAllPropertiesOnSameLine': false
      }
    ],
    'operator-linebreak': 'error',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'quotes': 'off',
    'rest-spread-spacing': 'error',
    'semi': 'off',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'off',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error'
  }
};
