/// <reference types = "cypress" />

describe("Preenchendo formulário", () => {

    it("Preenchendo formulário correto", () =>{
        cy.visit("https://automacaocombatista.herokuapp.com/users/new");
        cy.get('#user_name').type("Diego");
        cy.get("#user_lastname").type("Brito");
        cy.get("#user_email").type("diegorodriguesb@hotmail.com");
        cy.get("#user_address").type("Rua Osório Queiroga de Assis");
        cy.get("#user_university").type("UNIESP");
        cy.get("#user_profile").type("Desempregado");
        cy.get("#user_gender").type("Masculino");
        cy.get("#user_age").type("25")
        cy.get("#new_user > div:nth-child(7) > div > div").click();
        cy.get("#notice").should('have.text', 'Usuário Criado com sucesso');
    })

    it("Preenchendo formulário incorreto", () =>{
        cy.visit("https://automacaocombatista.herokuapp.com/users/new");
        cy.get('#user_name').type("Diego");
        cy.get("#user_lastname").type("Brito");
        cy.get("#user_address").type("Rua Osório Queiroga de Assis");
        cy.get("#user_university").type("UNIESP");
        cy.get("#user_profile").type("Desempregado");
        cy.get("#user_age").type("25")
        cy.get("#new_user > div:nth-child(7) > div > div").click();
        cy.get("#error_explanation > h2").should('have.text', '2 errors proibiu que este usuário fosse salvo:');
        cy.get("#error_explanation > ul > li:nth-child(1)").should('have.text','Email translation missing: pt-BR.activerecord.errors.models.user.attributes.email.blank');
        cy.get("#error_explanation > ul > li:nth-child(2)").should('have.text','Email translation missing: pt-BR.activerecord.errors.models.user.attributes.email.invalid');
    })

})