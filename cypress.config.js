const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://91web.github.io/Login-Page/',
        supportFile: false, // Disable supportFile if it's not needed
        setupNodeEvents(on, config) {
            // Implement any necessary event listeners or plugins here
        },
    },
})