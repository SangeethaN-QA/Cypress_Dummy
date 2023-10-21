import LoginPage from '../Pages/LoginPage'

describe('TC-2 Verify Invalid Login Info', function()
 {
   it('Should->Verify Invalid Login Info Error Message', function()
    {
        const loginPage = new LoginPage()
        loginPage.launchApp()
        loginPage.clickLoginButton()
        loginPage.enterInvalidLoginCredential()
        loginPage.getInvalidLoginErrorMsg()
         
    })
  })
 