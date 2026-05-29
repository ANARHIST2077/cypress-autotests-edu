

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    supportFile: "cypress/support/e2e.js"
  }
});
