
class LoginPage
{

    launchApp()
    {
        cy.visit("https://www.yatra.com/",{headers: { "Accept-Encoding": "gzip, deflate" }});
    }

    clickLoginButton()
    {
       cy.get('div.header-drop.animation-on.elem-0').invoke('show')
       cy.get('a#signInBtn').click({force: true})
    }

    enterInvalidLoginCredential()
    {
        cy.get("#login-input").type("sarathistudy@gmail.com")
        cy.get("#login-continue-btn").click()
        cy.get("#login-password").type("Testing@18")
        cy.get("#login-submit-btn").click()
       
    }

    getInvalidLoginErrorMsg()
    {
       cy.get("#login-error").should('have.text',"Sorry! something has gone wrong. Please try again.")
    }
}

export default LoginPage

