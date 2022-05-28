/// <reference types="cypress" />

describe('Selects, checkBox e radionButtons', () =>{
    
    before('Acessar URL', () => {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Validar selects', () =>{
        cy.get('#dropdowm-menu-1').should('be.visible').select('JAVA').should('have.value','java');
        cy.get('#dropdowm-menu-2').should('be.visible').select('Eclipse').should('have.value', 'eclipse');
        cy.get('#dropdowm-menu-3').should('be.visible').select('HTML').should('have.value', 'html');
    })

    it('Validar checkBox', () =>{
        cy.get('input[value="option-1"]').check().should('be.checked');
        cy.get('input[value="option-2"]').check().should('be.checked');
        cy.get('input[value="option-3"]').check().should('be.checked').uncheck().should('be.not.checked')
        .check().should('be.checked');
        cy.get('input[value="option-4"]').check().should('be.checked');
    })

    it('Validar Radio button', () =>{
        cy.get('input[value="green"]').check('green').should('be.checked');
        cy.get('input[value="blue"]').check('blue').should('be.checked');
        cy.get('input[value="green"]').should('be.not.checked');
    })

    it('Validar selected e disabled', () =>{
        cy.get('input[value="pumpkin"]').should('be.checked');
        cy.get('input[value="lettuce"]').check('lettuce').should('be.checked');
        cy.get('input[value="pumpkin"]').should('be.not.checked');
        cy.get('#fruit-selects').should('be.visible').should('have.value','grape')
        cy.get('#fruit-selects').should('be.visible').select('apple').should('have.value','apple')

    })
})
