/// <reference types="cypress" />

describe('ToDoMVC', () =>{
    it('Adicionado, removendo e validando tarefas', () =>{
        
        cy.intercept('GET','https://todomvc.com/learn.json').as('getTodo');
        cy.intercept('GET','https://todomvc.com/api').as('getApi');
        // cy.intercept('POST','https://todomvc.com/examples/angularjs/#/').as('postTodo');
       
        cy.visit("https://todomvc.com/examples/angularjs/#/");
        
        cy.wait('@getTodo').then((res) => {
            expect(res.response.statusCode).to.eq(200);
        })
        
        cy.wait('@getApi').then((res) => {
            expect(res.response.statusCode).to.eq(404);
        })
        
        /* cy.wait('@postTodo').then((res) => {
            expect(res.response.statusCode).to.eq(200);
        }) */
        
        cy.get("input.new-todo").type("Realizar teste automatizado{enter}");
        cy.get("label.ng-binding").should('have.text', 'Realizar teste automatizado');
        cy.get("input.new-todo").type("Realizar mais um teste automatizado{enter}");
        cy.get("ul.todo-list li").should('have.length', 2);
        cy.get("ng-view > section > section > ul > li:nth-child(2) > div > input").click();
        cy.get("ul.todo-list li.ng-scope.completed").should('have.length', 1);
        cy.get("ng-view > section > footer > ul > li:nth-child(2) > a").click();
        cy.get("label.ng-binding").should('have.text', 'Realizar teste automatizado');
        cy.get("ng-view > section > footer > ul > li:nth-child(3) > a").click();
        cy.get(".todo-list li").should('have.length', 1);
        cy.get(".clear-completed").click();
        cy.get(".new-todo").should('not.have.value');
    });
});
