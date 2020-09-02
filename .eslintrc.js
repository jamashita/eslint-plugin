module.exports = {
  'root': true,
  'plugins': [
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2020,
    'ecmaFeatures': {
      'jsx': true
    },
    'project': './tsconfig.json',
    'tsconfigRootDir': '.'
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended'
  ],
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'es2020': true
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'accessor-pairs': 'error',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'off',
    'array-element-newline': [
      'error',
      'consistent'
    ],
    'arrow-body-style': [
      'error',
      'always'
    ],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': 'off',
    'callback-return': 'error',
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'error',
    'comma-spacing': 'off',
    'comma-style': 'error',
    'complexity': 'error',
    'computed-property-spacing': 'error',
    'consistent-return': 'error',
    'consistent-this': 'error',
    'constructor-super': 'error',
    'curly': [
      'error',
      'all'
    ],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'off',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'off',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'error',
    'function-call-argument-newline': [
      'error',
      'consistent'
    ],
    'function-paren-newline': [
      'error',
      'consistent'
    ],
    'generator-star-spacing': 'error',
    'global-require': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'error',
    'indent': 'off',
    'indent-legacy': 'off',
    'init-declarations': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': 'off',
    'line-comment-position': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'lines-around-directive': 'error',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'error',
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'error',
    'new-cap': 'off',
    'new-parens': 'error',
    'newline-after-var': 'error',
    'newline-before-return': 'error',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'off',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-div-regex': 'error',
    'no-dupe-else-if': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': [
      'error',
      {
        'skipStrings': false
      }
    ],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-exports': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'off',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'off',
    'no-spaced-func': 'error',
    'no-sync': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'error',
    'no-throw-literal': 'off',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'error',
      {
        'consistent': true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': [
      'error',
      {
        'allowAllPropertiesOnSameLine': false
      }
    ],
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': 'error',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    'quotes': 'off',
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'off',
    'require-jsdoc': 'error',
    'require-unicode-regexp': 'error',
    'rest-spread-spacing': 'error',
    'semi': 'off',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always'
    ],
    'strict': 'error',
    'switch-colon-spacing': 'error',
    'symbol-description': 'off',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'valid-jsdoc': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    'yoda': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'generic',
        'readonly': 'generic'
      }
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      'stroustrup'
    ],
    '@typescript-eslint/class-literal-property-style': [
      'error',
      'fields'
    ],
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        'assertionStyle': 'as',
        'objectLiteralTypeAssertions': 'allow'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        'prefer': 'no-type-imports'
      }
    ],
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowExpressions': true,
        'allowTypedFunctionExpressions': true,
        'allowHigherOrderFunctions': true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'explicit'
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/func-call-spacing': [
      'error',
      'never'
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/init-declarations': [
      'error',
      'always'
    ],
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': true
        }
      }
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        'classes': [
          'instance-field',
          'static-field',
          'static-method',
          'constructor',
          'instance-method'
        ]
      }
    ],
    '@typescript-eslint/method-signature-style': [
      'error',
      'method'
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'variableLike',
        'format': [
          'camelCase',
          'PascalCase',
          'UPPER_CASE'
        ],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': 'memberLike',
        'format': [
          'camelCase',
          'PascalCase',
          'UPPER_CASE'
        ]
      },
      {
        'selector': 'typeLike',
        'format': [
          'PascalCase',
          'UPPER_CASE'
        ]
      },
      {
        'selector': 'class',
        'format': [
          'PascalCase'
        ]
      },
      {
        'selector': 'interface',
        'format': [
          'PascalCase'
        ]
      }
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        'allow': [
          'constructors'
        ]
      }
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        'allowSingleExtends': false
      }
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        'fixToUnknown': true
      }
    ],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all'
    ],
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        'allowStaticOnly': true
      }
    ],
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        'checksConditionals': true,
        'checksVoidReturn': false
      }
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      {
        'allowDeclarations': true,
        'allowDefinitionFiles': true
      }
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        'ignoreDeclarationMerge': true
      }
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        'allowDestructuring': true
      }
    ],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': true
      }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single'
    ],
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        'allowNumber': true,
        'allowBoolean': true
      }
    ],
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        'allowString': false,
        'allowNumber': false,
        'allowNullableObject': false
      }
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        'before': false,
        'after': true,
        'overrides': {
          'arrow': {
            'before': true,
            'after': true
          }
        }
      }
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        'arrayDestructuring': false,
        'arrowParameter': true,
        'memberVariableDeclaration': true,
        'objectDestructuring': false,
        'parameter': true,
        'propertyDeclaration': true,
        'variableDeclaration': true,
        'variableDeclarationIgnoreFunction': true
      }
    ],
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'off',
    'import/no-unresolved': 'off',
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': [
      'error',
      {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function'
      }
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': [
      'error',
      'always'
    ],
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': [
      'error',
      {
        'component': true,
        'html': true
      }
    ],
    'react/sort-comp': [
      'error',
      {
        'order': [
          'static-methods',
          'lifecycle',
          'render',
          'everything-else'
        ]
      }
    ],
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': [
      'error',
      'always'
    ],
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': [
      'error',
      'always'
    ],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': [
      'error',
      {
        'nonEmpty': 'tag-aligned',
        'selfClosing': 'tag-aligned'
      }
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        'props': 'never',
        'children': 'never'
      }
    ],
    'react/jsx-curly-newline': [
      'error',
      {
        'multiline': 'consistent',
        'singleline': 'consistent'
      }
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        'when': 'never'
      }
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never'
    ],
    'react/jsx-filename-extension': 'error',
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline'
    ],
    'react/jsx-fragments': [
      'error',
      'syntax'
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [
      'error',
      2,
      {
        'indentLogicalExpressions': true
      }
    ],
    'react/jsx-indent-props': [
      'error',
      2
    ],
    'react/jsx-key': [
      'error',
      {
        'checkFragmentShorthand': true
      }
    ],
    'react/jsx-max-depth': [
      'error',
      {
        'max': 5
      }
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        'when': 'multiline'
      }
    ],
    'react/jsx-no-bind': [
      'error',
      {
        'allowArrowFunctions': true
      }
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': [
      'error',
      {
        'enforceDynamicLinks': 'always'
      }
    ],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': [
      'error',
      {
        'allow': 'single-child'
      }
    ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never',
        'beforeClosing': 'never'
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        'declaration': 'parens-new-line',
        'assignment': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'parens-new-line',
        'logical': 'parens-new-line',
        'prop': 'parens-new-line'
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/autocomplete-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'off',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/lang': 'off',
    'jsx-a11y/media-has-caption': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp'
        ]
      }
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-onchange': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp'
        ]
      }
    ],
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
    'jest/no-jasmine-globals': 'off',
    'jest/no-test-callback': 'off'
  }
};
