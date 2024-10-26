module.exports = {
    env: {
        browser: true,  // Включає браузерні глобальні змінні
        es2021: true,   // Використовує ES2021
        node: true,     // Включає Node.js глобальні змінні
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:unicorn/recommended',
        'plugin:cypress/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
    },
    plugins: [
        'react',
        'simple-import-sort',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'unicorn/filename-case': 'off', // Вимкнення правила camelCase
        'unicorn/prefer-module': 'off', // Вимкнення правила для використання module
    },
    overrides: [
        {
            files: ['*rc.js', '*.config.js'],
            rules: {
                'unicorn/prefer-module': 'off',
                'unicorn/filename-case': 'off',
            },
        },
    ],
    globals: {
        Cypress: true, // Дозволити глобальні змінні Cypress
    },
};
