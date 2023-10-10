/// <reference types="cypress" />


describe('hello world', () => {
    it('home page', () => {
        cy.visit('https://www.finra.org/')
        cy.contains('FINRA').should('be.visible')

    })
});