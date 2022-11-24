import cypress from "cypress"

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.contains('Edit src/App.tsx and save to test HMR')
    cy.get('button').click()
    cy.contains('count is 1')
    cy.get('button').click()
    cy.contains('count is 2')

    cy.get('input').type('Hello World')
    cy.get('input').should('have.value', 'Hello World')
    cy.get('input').clear()
    cy.get('input').should('have.value', '')
  })
})