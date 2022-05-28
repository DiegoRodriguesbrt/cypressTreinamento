/// <reference types="cypress" />

describe('Formulario de Usuario', () =>{

    beforeEach('Visitar a url antes dos testes', () =>{
        cy.visit('https://automacaocombatista.herokuapp.com/users/new');
    })
    
    it('Criar usuario com dados validos', () => {
        cy.get('div h5').should('have.text','Novo Usuário!!');
        cy.get('div input#user_name').should('be.visible').type('Diego');
        cy.get('div input#user_lastname').should('be.visible').type('Brito');
        cy.get("#user_email").should('be.visible').type("diegorodriguesb@hotmail.com");
        cy.get("#user_address").should('be.visible').type("Rua Osório Queiroga de Assis");
        cy.get("#user_university").should('be.visible').type("UNIESP");
        cy.get("#user_profile").should('be.visible').type("Desempregado");
        cy.get("#user_gender").should('be.visible').type("Masculino");
        cy.get("#user_age").should('be.visible').type("25");
        cy.get('input[value="Criar"]').click();
       
        // Validar sempre a mensagem de sucesso e um elemento posterior
        cy.get('#notice').should('have.text', 'Usuário Criado com sucesso');
        cy.contains('p','Nome').should('contain','Diego');
    })

    // 3 etapas da automação: Pré condição, ação e validação!
    it('Criar usuário com dados', () => {
        cy.get('div h5').should('have.text','Novo Usuário!!');
        cy.get('input[value="Criar"]').click();
        cy.get('#error_explanation > h2').should('contain','errors proibiu que este usuário fosse salvo');
    })
})