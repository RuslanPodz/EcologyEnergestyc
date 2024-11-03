const { defineConfig } = require('cypress');
const webpackConfig = require('./config/webpack.cypress.config');

module.exports = defineConfig({
  projectId: 'bdijg3',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    specPattern: ['src/**/*.cy.{js,jsx}'],
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
      return config;
    },
  },
  e2e: {
    baseUrl: 'http://localhost:9000', // Додаємо baseUrl для E2E тестів
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
