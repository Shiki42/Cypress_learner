/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.finra.org/')
    })
  
    it('.type() - type into a DOM element', () => {

      cy.get('#edit-search-api-fulltext')
        .type('Hello, World').should('have.value', 'Hello, World')

        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')
  
        // .type() with key modifiers
        .type('{alt}{option}' ) //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')
  
        // Delay each keypress by 0.1 sec
        .type('slow.typing', { delay: 100 })
        .should('have.value', 'slow.typing')
    })

    it('.focus() - focus on a DOM element', () => {
        cy.get('#edit-submit-search-finra')
        .should('have.attr', 'style', 'display: none;');

        cy.get('#edit-search-api-fulltext').focus()
          .get('#edit-submit-search-finra')          
          .should('have.attr', 'style', 'display: inline-block;')
      })

});