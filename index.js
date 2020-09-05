module.exports = {
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2020,
    'project': './tsconfig.json',
    'tsconfigRootDir': '.'
  },
  'plugins': [
    '@typescript-eslint',
    'import'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'es2020': true
  },
  'globals': {
    'NodeJS': false
  },
  'rules': {
    /* Eslint */
    // Possible Errors
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
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
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    // Best Practices
    'accessor-pairs': 'off',
    'array-callback-return': 'off',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'error',
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
    'eqeqeq': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'off',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'off',
    'no-restricted-properties': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'radix': 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',
    // Strict Mode
    'strict': 'error',
    // Variables
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    // Stylistic Issues
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'error',
    'array-element-newline': [
      'error',
      'consistent'
    ],
    'block-spacing': 'error',
    'brace-style': 'off',
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'comma-dangle': 'error',
    'comma-spacing': 'off',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'error',
    'eol-last': 'error',
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
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'error',
    'indent': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': 'off',
    'line-comment-position': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'lines-between-class-members': 'off',
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
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'off',
    'no-bitwise': 'error',
    'no-continue': 'off',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'error',
    'no-tabs': 'error',
    'no-ternary': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
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
    'one-var': [
      'error',
      'never'
    ],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': 'error',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    'quotes': 'off',
    'semi': 'off',
    'semi-spacing': 'error',
    'semi-style': 'error',
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
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error',
    // ECMAScript 6
    'arrow-body-style': [
      'error',
      'always'
    ],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-exports': 'error',
    'no-restricted-imports': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
    /* @typescript-eslint */
    // Supported Rules
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
    '@typescript-eslint/class-literal-property-style': [
      'error',
      'fields'
    ],
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
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
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
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        'allowStaticOnly': true
      }
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
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
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
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
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        'allowNumber': true,
        'allowBoolean': true
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
    // Extension Rules
    '@typescript-eslint/brace-style': [
      'error',
      'stroustrup'
    ],
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/dot-notation': 'error',
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
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        'allow': [
          'constructors'
        ]
      }
    ],
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all'
    ],
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        'ignoreDeclarationMerge': true
      }
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
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
    '@typescript-eslint/quotes': [
      'error',
      'single'
    ],
    '@typescript-eslint/require-await': 'error',
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
    /* import */
    // Static analysis
    'import/no-unresolved': 'off',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',
    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',
    // Module systems
    'import/unambiguous': 'error',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    // Style guide
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'error',
    'import/extensions': [
      'error',
      'never'
    ],
    'import/order': 'off',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-default-export': 'error',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off'
  }
};
