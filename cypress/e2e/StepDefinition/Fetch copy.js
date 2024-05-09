import { And, Given , Then ,} from "cypress-cucumber-preprocessor/steps";

import GSTR1 from '../PageObject/GSTR1.js'
import Login from '../PageObject/Login.js'

const ln = new Login();
const gstr1 = new GSTR1();
    
const url = 'https://uat3.asp2.aw.navigatetax.pwc.co.in/#/login'

And(`Go to Fetch Page`,()=>{
  gstr1.naviagateToFetch()
})

Then(`Verify the Abort Functionality`,()=>{
  gstr1.verifyAbortFunctionality()
})

And(`Apply filter on State and Financial Year`,()=>{
  gstr1.FilterState()
  gstr1.FilterFinancialYear()
  gstr1.clickApply()
})


Then(`Verify the DownloadedFile`,()=>{
  gstr1.verifyDownloadedFile()
})