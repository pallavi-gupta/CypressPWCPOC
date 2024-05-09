const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
const {verifyDownloadTasks} = require('cy-verify-downloads')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: "**/**/*.feature", 
    experimentalStudio: true,
    experimentalRunAllSpecs : true,
    video: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      on('task',verifyDownloadTasks)
      require("cypress-mochawesome-reporter/plugin")(on)
      // implement node event listeners here
    }
  },
});
