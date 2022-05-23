/// <reference types = "cypress" />

describe ('Alterando usuário', () =>{

    it('Alterando Universidade', () =>{
        cy.visit('https://automacaocombatista.herokuapp.com/users');
        cy.get("div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(4)").clear();
        cy.get("div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(10)").click();
        cy.get("div.row > div.col.s9 > div:nth-child(2) > div > h5").should('have.text', 'Editar Usuário!!');
        cy.get("#user_university").type("UNIESP");
        cy.get("#edit_user_3560 > div:nth-child(8) > div > div > input[type=submit]").click();
        cy.get("#notice").should('have.text',"Seu Usuário foi Atualizado!");
    })
    /*
    it.only('Excluindo usuário', () =>{
        cy.visit('https://automacaocombatista.herokuapp.com/users');
        cy.get("div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(2)").should('have.text);       
    })
    */
})