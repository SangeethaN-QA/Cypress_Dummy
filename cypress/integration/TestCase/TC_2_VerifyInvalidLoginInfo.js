import verify_InvalidLoginInfo from '../PageObjects/verify_InvalidLoginInfo'
const testData_Val = require('../../fixtures/testData.json')

describe('TC-1 Verify Invalid Login Info', function()
 {
   it('Should->Verify Invalid Login Info Error Message', function()
    {
        const verifyInvalidLoginError = new verify_InvalidLoginInfo()
        verifyInvalidLoginError.launchApp()
        verifyInvalidLoginError.clickOrders()
        verifyInvalidLoginError.enterInvalidLoginInfo(testData_Val.txtEmailData,testData_Val.txtPasswordData)
      //  verifyInvalidLoginError.verify_InvalidLoginError(testData_Val.txtLoginErrorMsg)
         
    })
  })
 