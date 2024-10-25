// .eslintrc.js
module.exports = {
    env: {
        browser: true,  // Включає браузерні глобальні змінні
        es2021: true,   // Використовує ES2021
        node: true,     // Включає Node.js глобальні змінні
    },
    extends: [
        'eslint:recommended',                // Рекомендовані правила ESLint
        'plugin:react/recommended',          // Рекомендовані правила для React
        'plugin:react-hooks/recommended',    // Рекомендовані правила для хуків React
        'plugin:import/errors',              // Правила для імпортів
        'plugin:import/warnings',
        'plugin:unicorn/recommended',        // Рекомендовані правила для плагіна Unicorn
        'plugin:cypress/recommended',        // Рекомендовані правила для Cypress
    ],
    settings: {
        react: {
            version: 'detect',               // Автоматичне визначення версії React
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],  // Розширення файлів для імпортів
            },
        },
    },
    plugins: [
        'react',                             // Плагін для React
        'simple-import-sort',                // Плагін для сортування імпортів
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',   // React не потрібно в імпорті, якщо використовується в нових версіях
        'simple-import-sort/imports': 'error', // Сортування імпортів
        'simple-import-sort/exports': 'error', // Сортування експортів
        'import/first': 'error',              // Імпорти повинні бути першими
        'import/newline-after-import': 'error', // Порожній рядок після імпортів
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
    },
    overrides: [
        {
            files: ['*rc.js', '*.config.js'], // Налаштування для специфічних файлів
            rules: {
                'unicorn/prefer-module': 'off', // Вимкнення деяких правил для конфігураційних файлів
                'unicorn/filename-case': 'off',
            },
        },
    ],
    globals: {
        Cypress: true, // Дозволити глобальні змінні Cypress
    },
};
