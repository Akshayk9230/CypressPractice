/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('This is a Practice Test Suite', () => {
  it('Validate Title of the webPage', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.title().should('eq','Practice Page')
  })
  it('To Click on radio buttons', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.xpath('//*[@value="radio1"]').click()
  })
})
