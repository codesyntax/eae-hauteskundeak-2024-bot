const { defineConfig } = require("cypress");
const fs = require('fs');



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
