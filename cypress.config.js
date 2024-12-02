const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    mobileWidth: 430,
    mobileHeight: 932,
    desktopWidth: 1080,
    desktopHeight: 1920,
  },
});
