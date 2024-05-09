import { And, Given , Then ,} from "cypress-cucumber-preprocessor/steps";

import GSTR1 from '../PageObject/GSTR1.js'
import Login from '../PageObject/Login.js'

const ln = new Login();
const gstr1 = new GSTR1();
    
const url = 'https://uat3.asp2.aw.navigatetax.pwc.co.in/#/login'
Given('I open Application', () => {
  cy.visit(url)
})


And(`Enter {string} and {string} in username and password`, (username , password) => {
  ln.setUsername(username)
  ln.setPassword(password)
  })

And(`Click on Login Button`,()=>{
    ln.clickLogin()
    cy.wait(5000)
 })

 When(`User Selects the GSTR1 Option`,()=>{
  gstr1.navigateToGSTR1()
})

And(`Go to Fetch Page`,()=>{
  gstr1.naviagateToFetch()
})

