/// <reference types="cypress" />

context('Traversal', () => {
  beforeEach(() => {
    cy.visit('https://www.finra.org/')
  })

  it('.children() - get child DOM elements', () => {
    cy.get('#carousel_item__2').children().children('[data-word="provides"]')
    .should('have.class', 'word')
  })

  it('.parent() - get parent DOM element from DOM elements', () => {
    cy.get('[data-word="confidence"]')
      .parent().should('have.class', 'words lines splitting')
      .parent().should('have.id', 'carousel_item__2')
    });

  it('.prev() - get previous sibling DOM element', () => {
    cy.get('[data-word="confidence"]')
      .prev().should('have.class', 'whitespace')
  })

  // it('.parents() - get parent DOM elements from DOM elements', () => {
  //   // https://on.cypress.io/parents
  //   cy.get('.traversal-cite')
  //     .parents().should('match', 'blockquote')
  // })

  // it('.parentsUntil() - get parent DOM elements from DOM elements until el', () => {
  //   // https://on.cypress.io/parentsuntil
  //   cy.get('.clothes-nav')
  //     .find('.active')
  //     .parentsUntil('.clothes-nav')
  //     .should('have.length', 2)
  // })



  // it('.prevAll() - get all previous sibling DOM elements', () => {
  //   // https://on.cypress.io/prevall
  //   cy.get('.fruits-list').find('.third')
  //     .prevAll().should('have.length', 2)
  // })

  // it('.siblings() - get all sibling DOM elements', () => {
  //   // https://on.cypress.io/siblings
  //   cy.get('.traversal-pills .active')
  //     .siblings().should('have.length', 2)
  // })
})
