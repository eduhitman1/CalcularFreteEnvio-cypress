import { dadosObjeto } from '../../../fixtures/massas.fixture'

const LBL_ORIGEM_OBRIGATORIO = '#originPostcode-helper-text'
const LBL_DESTINO_OBRIGATORIO = '#destinationPostcode-helper-text'
const LBL_PAC = 'p:contains(PAC)'
const LBL_SEDEX = 'p:contains(SEDEX)'
const LBL_MINI_ENVIOS = 'p:contains(Mini Envios)'

const SELECT_FORMATO = '#object_format'
const SELECT_PESO = '#weight'

const IMPUT_POSTCODE_ORIGEM = "#originPostcode"
const IMPUT_ALTURA = '#packageHeight'
const IMPUT_LARGURA = '#packageWidth'
const IMPUT_COMPRIMENTO = '#packageDepth'
const IMPUT_POSTCODE_DESTINO = '#destinationPostcode'

const BUTTON_CALCULAR_FRETE = '[data-cy="calculator-submit"]'

Cypress.Commands.add('carregandoAplicacao', ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable) => {    
        return false
    })
    cy.viewport(1366, 768)
    cy.wait(2000)
    cy.visit(Cypress.env('baseUrl'))    
    cy.wait(10000)
})

Cypress.Commands.add('preencherCepOrigin', ()=>{
    cy.get(IMPUT_POSTCODE_ORIGEM).should('exist')
    cy.get(IMPUT_POSTCODE_ORIGEM).type(Cypress.env('codigoOrigem'))
    cy.wait(5000)
})

Cypress.Commands.add('selecionarFormatoCaixaOuPacote', ()=>{
    cy.get(SELECT_FORMATO).click()
    cy.get(`li:contains(${Cypress.env('tipoFormatoObjeto')})`).click()
})

Cypress.Commands.add('selecionarPesoObjeto', ()=>{
    cy.get(SELECT_PESO).click()
    cy.get(`li:contains(${Cypress.env('selecionarPeso')})`).click()
})  

Cypress.Commands.add('preencherAlturaObjeto', ()=>{
    cy.get(IMPUT_ALTURA).type(Cypress.env('altura'))
})

Cypress.Commands.add('preencherLarguraObjeto', ()=>{
    cy.get(IMPUT_LARGURA).type(Cypress.env('largura'))
})

Cypress.Commands.add('preencherComprimentoObjeto', ()=>{
    cy.get(IMPUT_COMPRIMENTO).type(Cypress.env('comprimento'))
})

Cypress.Commands.add('preencherCepDestino', ()=>{
    cy.get(IMPUT_POSTCODE_DESTINO).type(Cypress.env('codigoDestino'))
})

Cypress.Commands.add('clicarBotaoCalculaFrete', ()=>{
    cy.get(BUTTON_CALCULAR_FRETE).click()
})

Cypress.Commands.add('validaObrigatoriedadeCepOrigem', ()=>{
    cy.get(LBL_ORIGEM_OBRIGATORIO).should('be.visible')
})

Cypress.Commands.add('validaObrigatoriedadeCepDestino', ()=>{
    cy.get(LBL_DESTINO_OBRIGATORIO).should('be.visible')
})

Cypress.Commands.add('validaMeiosDeEnvio', ()=>{
    cy.wait(2000)
    cy.get(LBL_PAC).scrollIntoView() 
        
    cy.get(LBL_PAC).should('be.visible')
    cy.get(LBL_SEDEX).should('be.visible')
    cy.get(LBL_MINI_ENVIOS).should('be.visible')
})