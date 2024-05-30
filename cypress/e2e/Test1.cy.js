describe('This is a demo test suite', () => {
  it('Login to my page', () => {
    cy.visit('https://rahulshettyacademy.com/client')
    cy.xpath("//*[@id='userEmail']").focus().blur().type("testuser123@example.com")
    //cy.xpath().type('Password@123')
    cy.xpath("//*[@id='userPassword']").type("Password@123")
    cy.get('#login').click()
  })
})