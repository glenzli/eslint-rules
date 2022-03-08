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
};
