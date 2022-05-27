/// <reference types="cypress" />

describe('Pagina de alertas', () =>{
    it('Testando botão JS Alert', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/alert');
    cy.get('div h3').should('have.text', 'JavaScript Alerts')
    cy.get('body > div.row > div.col.s9 > div:nth-child(2) > div > div.example > ul > li:nth-child(1) > button').click();
    cy.wait(5)
    cy.on ('window:alert', (str) => {
        expect(str).to.equal("Eu sou um alerta JS!")
    })
    })  
})