module.exports = {
    rules: {
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'array-callback-return': [
            'error'
        ],
        'arrow-body-style': [
            'error',
            'as-needed'
        ],
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'arrow-spacing': [
            'error'
        ],
        'block-spacing': [
            'error'
        ],
        'brace-style': [
            'error'
        ],
        'camelcase': [
            'error',
            {
                'ignoreDestructuring': true
            }
        ],
        'comma-dangle': [
            'error',
            'always-multiline'
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'complexity': [
            'error',
            10
        ],
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'curly': [
            'error'
        ],
        'default-param-last': 'off',
        'dot-notation': [
            'error'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'eqeqeq': [
            'error',
            'always'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'generator-star-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'guard-for-in': [
            'error'
        ],
        'id-length': [
            'error',
            {
                'min': 2,
                'exceptions': [
                    'x',
                    'y',
                    'z',
                    'i',
                    'j',
                    'k',
                    '_'
                ]
            }
        ],
        'implicit-arrow-linebreak': [
            'error',
            'beside'
        ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'VariableDeclarator': 1,
                'outerIIFEBody': 1,
                'FunctionDeclaration': {
                    'parameters': 1,
                    'body': 1
                },
                'FunctionExpression': {
                    'parameters': 1,
                    'body': 1
                },
                'CallExpression': {
                    'arguments': 1
                },
                'ArrayExpression': 1,
                'ObjectExpression': 1,
                'ImportDeclaration': 1,
                'flatTernaryExpressions': false,
                'ignoredNodes': [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild'
                ],
                'ignoreComments': false
            }
        ],
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        'key-spacing': [
            'error'
        ],
        'keyword-spacing': [
            'error',
            {
                'overrides': {
                    'if': {
                        'after': true
                    },
                    'for': {
                        'after': true
                    },
                    'while': {
                        'after': true
                    },
                    'else': {
                        'after': true
                    }
                }
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-len': [
            'error',
            {
                'code': 120,
                'ignoreStrings': true,
                'ignoreUrls': true,
                'ignoreRegExpLiterals': true,
                'ignoreTemplateLiterals': true
            }
        ],
        'max-lines': [
            'warn',
            {
                'max': 800,
                'skipBlankLines': true,
                'skipComments': true
            }
        ],
        'max-lines-per-function': [
            'warn',
            {
                'max': 60,
                'skipBlankLines': true,
                'skipComments': true,
                'IIFEs': true
            }
        ],
        'newline-per-chained-call': [
            'warn',
            {
                'ignoreChainWithDepth': 3
            }
        ],
        'no-alert': [
            'error'
        ],
        'no-array-constructor': [
            'error'
        ],
        'no-case-declarations': [
            'error'
        ],
        'no-confusing-arrow': [
            'error'
        ],
        'no-const-assign': [
            'error'
        ],
        'no-console': [
            'error'
        ],
        'no-dupe-class-members': [
            'error'
        ],
        'no-else-return': [
            'error',
            {
                'allowElseIf': false
            }
        ],
        'no-eval': [
            'error'
        ],
        'no-iterator': [
            'error'
        ],
        'no-labels': [
            'error',
            {
                'allowLoop': false,
                'allowSwitch': false
            }
        ],
        'no-lone-blocks': [
            'error'
        ],
        'no-loop-func': [
            'error'
        ],
        'no-mixed-operators': [
            'error',
            {
                'allowSamePrecedence': true
            }
        ],
        'no-multi-assign': [
            'error'
        ],
        'no-multiple-empty-lines': [
            'error'
        ],
        'no-nested-ternary': [
            'error'
        ],
        'no-new-func': [
            'error'
        ],
        'no-new-object': [
            'error'
        ],
        'no-new-wrappers': [
            'error'
        ],
        'no-param-reassign': [
            'error',
            {
                'props': false
            }
        ],
        'no-prototype-builtins': [
            'error'
        ],
        'no-restricted-properties': [
            'warn',
            {
                'object': 'Math',
                'property': 'pow',
                'message': 'Use ** instead'
            }
        ],
        'no-restricted-syntax': [
            'warn',
            {
                'selector': 'ForInStatement',
                'message': 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                'selector': 'LabeledStatement',
                'message': 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                'selector': 'WithStatement',
                'message': '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        'no-script-url': [
            'error'
        ],
        'no-self-compare': [
            'error'
        ],
        'no-shadow': 'off',
        'no-trailing-spaces': [
            'error'
        ],
        'no-undef': 'off',
        'no-underscore-dangle': [
            'warn',
            {
                'allowAfterThis': true
            }
        ],
        'no-unneeded-ternary': [
            'error'
        ],
        'no-unused-vars': [
            'error',
            {
                'args': 'after-used',
                "argsIgnorePattern": "^_",
                'ignoreRestSiblings': true,
            }
        ],
        'no-useless-constructor': 'off',
        'no-useless-escape': [
            'error'
        ],
        'no-var': [
            'error'
        ],
        'no-whitespace-before-property': [
            'error'
        ],
        'nonblock-statement-body-position': [
            'error',
            'beside'
        ],
        'object-curly-newline': [
            'error'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-shorthand': [
            'warn'
        ],
        'one-var': [
            'error',
            'never'
        ],
        'operator-linebreak': [
            'error'
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'prefer-arrow-callback': [
            'warn'
        ],
        'prefer-const': [
            'error',
            {
                'destructuring': 'any',
                'ignoreReadBeforeAssign': false
            }
        ],
        'prefer-destructuring': [
            'warn',
            {
                'object': true,
                'array': false
            }
        ],
        'prefer-rest-params': [
            'error'
        ],
        'prefer-spread': [
            'error'
        ],
        'prefer-template': [
            'error'
        ],
        'quote-props': [
            'error',
            'as-needed',
            {
                'keywords': false
            }
        ],
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': false
            }
        ],
        'radix': [
            'warn'
        ],
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        'semi': [
            'error',
            'always'
        ],
        'semi-spacing': [
            'error'
        ],
        'semi-style': [
            'error'
        ],
        'space-before-blocks': [
            'error'
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': [
            'error'
        ],
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false
            }
        ],
        'spaced-comment': [
            'error',
            'always'
        ],
        'template-curly-spacing': [
            'error',
            'never'
        ],
        'template-tag-spacing': [
            'error'
        ],
        'unicode-bom': [
            'error'
        ],
        'wrap-iife': [
            'error',
            'outside'
        ],
        'babel/new-cap': [
            'error'
        ],
    },
};
