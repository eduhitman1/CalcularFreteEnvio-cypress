const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
      },
      },
      e2e: {
        setupNodeEvents(on, config) {
          on('file:preprocessor',cucumber())
        },
        specPattern: "cypress/e2e/step_definitions/*.feature"
      },
      env: {
        baseUrl:  'https://web.superfrete.com/',
        codigoOrigem: "08090-284",
        tipoFormatoObjeto: "Caixa / Pacote",
        selecionarPeso: "Até 300g",
        altura: "0.4",
        largura: "8",
        comprimento: "13",
        codigoDestino: "05407-002",
      }
});
