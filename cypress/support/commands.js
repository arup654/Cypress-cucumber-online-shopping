Cypress.Commands.add("login", (userid, password) => 
{ 
    
    cy.get('#user_login').type(userid)
    cy.get('#user_password').type(password)
    cy.get('.btn').click()
})