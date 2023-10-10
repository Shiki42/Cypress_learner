/// <reference types="cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://www.finra.org/')
  })

  it('cy.viewport() - set the viewport size and dimension', () => {

    cy.get('#CollapsingNavbar').should('be.visible')
    cy.viewport(320, 480)
    // the navbar should have collapse since our screen is smaller
    cy.get('#CollapsingNavbar').should('not.be.visible')
    cy.get('.navbar-toggler.navbar-toggler-right[type="button"]').click()
    cy.get('#CollapsingNavbar').should('be.visible')

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    cy.viewport('macbook-15')
    cy.wait(1000)
    cy.viewport('iphone-6+')
    cy.wait(1000)

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.config.{js|ts})
  })
})
