const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 720,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
