const SIGN_IN = '#signin_button'

class LoginPage

{
    static visitLoginPage()
    {
        cy.visit(Cypress.env('URL'))
    }

    static signIn()
    {
        cy.get(SIGN_IN).click()
    }

    
    
}

export default LoginPage