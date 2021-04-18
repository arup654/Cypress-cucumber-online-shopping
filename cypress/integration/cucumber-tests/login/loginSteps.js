import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginpajeobjects'

before(function(){

    cy.fixture('testdata').then(function(credentials)
    {
        this.credentials=credentials;
        //cy.login(this.credentials.usrname,this.credentials.password)

    })

})

Given('I open the login page',function()
{

LoginPage.visitLoginPage()
LoginPage.signIn()
cy.url().should('include','login')
cy.get('h3').should('be.visible')

})
When('I submit the login page',function()
{
    
       
    cy.login(this.credentials.usrname,this.credentials.password)

    

})
Then('I should see the home page',function()
{
    cy.get('.board-header').eq(0).then(function(accountname){
        const accounttext=accountname.text()
        expect(accounttext).to.include('Cash Accounts')
     })
     cy.get('.dropdown-toggle').last().should('contain','username')

})