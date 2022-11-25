import cypress from "cypress"

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.contains('About Us')
    cy.get('a').click()
    cy.contains('Go home')
    cy.url().should('include', '/about')
    cy.url().should('eq', 'http://127.0.0.1:5173/about')
    // cy.get('a').click()
  })
})