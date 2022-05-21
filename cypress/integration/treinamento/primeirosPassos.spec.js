/// <reference types = "cypress" />

describe("Teste de botões", () => {
    it("Validando botão ao clicar", () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/botoes");
        cy.get('#teste').click();
        cy.get("#div1 > h5").should("have.text","Você Clicou no Botão!");
    });

    it("Validando botão submit", () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/botoes");
        cy.get("div.row > div.col.s9 > div:nth-child(6) > div:nth-child(1) > div > button").click();
        cy.get("#div4 > h5").should("have.text","Você Clicou no Botão!");
    });

    it("Preechendo formulário", () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield");
        cy.get('#first_name').type("Diego");
        cy.get('#first_name').should('have.value','Diego')
        cy.get("#last_name").type("Brito")
        cy.get("#last_name").should('have.value',"Brito")
    });



});