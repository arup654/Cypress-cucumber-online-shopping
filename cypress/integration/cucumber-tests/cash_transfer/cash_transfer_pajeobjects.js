import LoginPage from "../login/loginpajeobjects"

const TRANSFR_FUNDS = '#transfer_funds_tab'
const FROM_ACCT = '#tf_fromAccountId'
const TO_ACCT ="#tf_toAccountId"
const AMOUNT = "#tf_amount"
const DESCRP ="#tf_description"
const TRANSFR_AMNT ="#btn_submit"
class Cashtransfer extends LoginPage
{

    static transfer_funds()
    {

        cy.get(TRANSFR_FUNDS).contains('Transfer Funds').click()
    }

    static from_acct()
    {

        cy.get(FROM_ACCT).select('1')
    }

    static to_acct()
    {
        cy.get(TO_ACCT).select('4')

    }

    static amount()
    {
        cy.get(AMOUNT).type('500')

    }

    static descrip()
    {
        cy.get(DESCRP).type('test transfer')
    }

    static submit()
    {
        cy.get(TRANSFR_AMNT).click()
    }

    
    

}

export default Cashtransfer