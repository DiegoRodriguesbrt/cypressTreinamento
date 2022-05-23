/// <reference types="cypress" />

describe('ToDoMVC', () =>{
    it('Adicionar tarefas', () =>{
        cy.visit("https://todomvc.com/examples/angularjs/#/");
        cy.get("input.new-todo").type("Realizar teste automatizado{enter}");
        cy.get("label.ng-binding").should('have.text', 'Realizar teste automatizado');
        cy.get("input.new-todo").type("Realizar mais um teste automatizado{enter}");
        cy.get("ul.todo-list li").should('have.length', 2);

    });
});
