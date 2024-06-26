import {Given, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que estou com a aplicacao aberta", () =>{
    cy.carregandoAplicacao()
})

And("informo o cep de origem", () =>{
     cy.preencherCepOrigin()
})

And("seleciono o formato de caixa ou pacote", () =>{
    cy.selecionarFormatoCaixaOuPacote()
})

And("seleciono o peso do objeto", () =>{
    cy.selecionarPesoObjeto()
})

And("informa a altura do objeto", () =>{
    cy.preencherAlturaObjeto()
})

And("informa a largura do objeto", () =>{
    cy.preencherLarguraObjeto()
})

And("informa o comprimento do objeto", () =>{
    cy.preencherComprimentoObjeto()
})
      
And("informa o cep de destino", () =>{
    cy.preencherCepDestino()
})

And("clico no botao CALCULAR FRETE COM DESCONTO", () =>{
    cy.clicarBotaoCalculaFrete()
})

Then("valido a correspondencia de pacotes de envios PAC SEDEX e Mini envio", () =>{
    cy.validaMeiosDeEnvio()
})

Then("valido a obrigatoriedade do preencimento do campo cep origem", () =>{
    cy.validaObrigatoriedadeCepOrigem()
})

Then("valido a obrigatoriedade do preencimento do campo cep destino", () =>{
    cy.validaObrigatoriedadeCepDestino()
})
