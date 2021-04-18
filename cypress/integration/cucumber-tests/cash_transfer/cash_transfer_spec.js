import {Given , When ,Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../login/loginpajeobjects';
import Cashtransfer from './cash_transfer_pajeobjects';


before(function(){

    cy.fixture('testdata').then (function(login_values){

        this.login_values =login_values;
    })
})

Given('I login to the application',function()
{
    LoginPage.visitLoginPage()
    LoginPage.signIn()
    cy.url().should('include','login')
    cy.get('h3').should('be.visible')
    cy.login(this.login_values.usrname,this.login_values.password)

})
When('I navigate to transfer funds',function()
{

    Cashtransfer.transfer_funds()

})
When('I transfer cash from saving account',function()
{
    Cashtransfer.from_acct()
    Cashtransfer.to_acct()
    Cashtransfer.amount()
    Cashtransfer.descrip()
    Cashtransfer.submit()

    

})
Then('the transfer must be successful',function()
{
    cy.get('#tf_fromAccountId').should('have.value','Savings')
    cy.get('#tf_toAccountId').should('have.value','Loan')
    Cashtransfer.submit()
    cy.get('.alert.alert-success').then(function(accountname){
        const accounttext=accountname.text()
        expect(accounttext).to.include('You successfully submitted your transaction.')
     })
    

     


})