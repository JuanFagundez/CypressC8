/// <reference types="Cypress" />

const { cyan } = require("color-name")

describe('My First Test', () => {
    
    it('Should visit Kitchen Sink', () =>{
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()


        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })
})