module.exports = {
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': [
            'error'
        ],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                'assertionStyle': 'as',
                'objectLiteralTypeAssertions': 'never'
            }
        ],
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/default-param-last': [
            'error'
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error'
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/no-empty-interface': [
            'warn',
            {
                'allowSingleExtends': true
            }
        ],
        '@typescript-eslint/no-inferrable-types': [
            'warn'
        ],
        '@typescript-eslint/no-namespace': [
            'error',
            {
                'allowDeclarations': true,
                'allowDefinitionFiles': true
            }
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': [
            'error'
        ],
        '@typescript-eslint/no-parameter-properties': [
            'off'
        ],
        '@typescript-eslint/no-require-imports': [
            'error'
        ],
        '@typescript-eslint/no-shadow': [
            'error'
        ],
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                'allowDestructuring': true
            }
        ],
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true,
                'allowTernary': true,
                'allowTaggedTemplates': true
            }
        ],
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                'functions': false,
                'classes': true,
                'variables': true
            }
        ],
        '@typescript-eslint/no-useless-constructor': [
            'warn'
        ],
        '@typescript-eslint/prefer-for-of': [
            'warn'
        ],
        '@typescript-eslint/prefer-function-type': [
            'warn'
        ],
        '@typescript-eslint/prefer-namespace-keyword': [
            'error'
        ],
        '@typescript-eslint/prefer-optional-chain': [
            'error'
        ],
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                'path': 'never',
                'types': 'always',
                'lib': 'always'
            }
        ],
        '@typescript-eslint/type-annotation-spacing': [
            'error'
        ],
        '@typescript-eslint/typedef': [
            'error',
            {
                'arrayDestructuring': false,
                'arrowParameter': false,
                'memberVariableDeclaration': false,
                'objectDestructuring': false,
                'parameter': false,
                'propertyDeclaration': true,
                'variableDeclaration': false
            }
        ],
        '@typescript-eslint/unified-signatures': [
            'error'
        ],
    },
};
