
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,  // Hier deaktivierst du die Support-Datei
    setupNodeEvents(on, config) {
      // Hier kannst du Events hinzufügen
    },
  },
})