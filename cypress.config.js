const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kemkov',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },env :{
    email:"test100@gmail.com",
    password:"Amel@1991"
  }
});
