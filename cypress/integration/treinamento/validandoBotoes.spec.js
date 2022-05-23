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


    it('Validando botão floating', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get('.btn-floating').click();
        cy.get('#div2 > h5').should('have.text', 'Você Clicou no Botão!');
    });


    it('Validando botão flat', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get('.row > .waves-teal').click();
        cy.get('#div3 > h5').should('have.text', 'Você Clicou no Botão!');  
    });


    it('Validando botão submit', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get(':nth-child(6) > :nth-child(1) > .row > .btn').click();
        cy.get('#div4 > h5').should('have.text', 'Você Clicou no Botão!'); 
    })

    it('Validando botão disable', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get("div.row > div.col.s9 > div:nth-child(7) > div > div > a").should('have.text','Button')
    
    })
})

    