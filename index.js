module.exports = {
    env: {
        es6: true,
        jest: true,
        browser: true,
    },
    extends: [
        './rules/general',
        './rules/import',
        './rules/typescript',
    ].map(require.resolve).concat([
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ]),
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'babel',
    ],
    overrides: [
        {
            files: ['*.spec.ts', '*.test.ts', '*.spec.tsx', '*.test.tsx', '*.spec.js', '*.test.js', '*.spec.jsx', '*.test.jsx'],
            rules: {
                'no-console': 'off',
                '@typescript-eslint/ban-ts-comment': [
                    'error',
                    {
                        'ts-ignore': 'allow-with-description'
                    }
                ],
                '@typescript-eslint/no-explicit-any': 'off',
            }
        }
    ]
};
