/// <reference types="cypress" />

describe('ToDoMVC', () =>{
    it('Adicionado, removendo e validando tarefas', () =>{
        
        cy.intercept('GET','https://todomvc.com/learn.json').as('getTodo');
        cy.intercept('GET','https://todomvc.com/api').as('getApi');
        //cy.intercept('POST','https://www.google-analytics.com/j/collect?v=1&_v=j96&a=1409751748&t=pageview&_s=1&dl=https%3A%2F%2Ftodomvc.com%2Fexamples%2Fangularjs%2F&ul=pt-br&de=UTF-8&dt=AngularJS%20%E2%80%A2%20TodoMVC&sd=24-bit&sr=1536x864&vp=852x762&je=0&_utma=269352180.1318032416.1653340392.1653340392.1653340392.1&_utmz=269352180.1653340392.1.1.utmcsr%3Dgoogle%7Cutmccn%3D(organic)%7Cutmcmd%3Dorganic%7Cutmctr%3D(not%2520provided)&_utmht=1653739644344&_u=AACCAEABAAAAAC~&jid=1096008995&gjid=785383799&cid=1318032416.1653340392&tid=UA-31081062-1&_gid=1524445503.1653739276&_r=1&_slc=1&z=1173446921').as('postTodo');
       
        cy.visit("https://todomvc.com/examples/angularjs/#/");
        
        cy.wait('@getTodo').then((res) => {
            expect(res.response.statusCode).to.eq(200);
        })
        
        cy.wait('@getApi').then((res) => {
            expect(res.response.statusCode).to.eq(404);
        })
        
        /*cy.wait('@postTodo').then((res) => {
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
