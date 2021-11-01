'use strict';

module.exports = {
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2021,
    'sourceType': 'module',
    'project': './tsconfig.json',
    'tsconfigRootDir': '.'
  },
  'plugins': [
    '@typescript-eslint',
    '@jamashita'
  ],
  'env': {
    'es2020': true,
    'es2021': true,
    'es6': true
  },
  'overrides': [
    {
      'files': [
        '*.ts',
        '*.tsx'
      ],
      'excludedFiles': '*.d.ts',
      'rules': {
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
        '@typescript-eslint/consistent-indexed-object-style': [
          'error',
          'index-signature'
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            'assertionStyle': 'as',
            'objectLiteralTypeAssertions': 'allow'
          }
        ],
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
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
              'abstract-field',
              'static-field',
              'static-method',
              'constructor',
              'abstract-method',
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
        '@typescript-eslint/no-confusing-void-expression': 'error',
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
            'allowStaticOnly': true,
            'allowWithDecorator': true
          }
        ],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-meaningless-void-operator': 'error',
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
        '@typescript-eeslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-restricted-imports': 'error',
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
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/padding-line-between-statements': 'error',
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
        '@typescript-eslint/sort-type-union-intersection-members': 'error',
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
        '@typescript-eslint/comma-dangle': 'error',
        '@typescript-eslint/comma-spacing': 'error',
        '@typescript-eslint/default-param-last': 'off',
        '@typescript-eslint/dot-notation': 'off',
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
        '@typescript-eslint/no-duplicate-imports': 'error',
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
        '@typescript-eslint/no-loop-func': 'off',
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
        '@typescript-eslint/object-curly-spacing': [
          'error',
          'always'
        ],
        'object-property-newline': [
          'error',
          {
            'allowAllPropertiesOnSameLine': false
          }
        ],
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
        '@typescript-eslint/space-infix-ops': 'error'
      }
    }
  ]
};
