import { Given , Then } from "cypress-cucumber-preprocessor/steps";

class Login
{

   UsrnameText = "input[placeholder='Username']";
   PasswordText = "input[placeholder='Password']";
   LoginBtn = "//button[contains(text(),'Login')]";

    setUsername(Username){
        cy.get(this.UsrnameText).type(Username)
    }

    setPassword(Password){
        cy.get(this.PasswordText).type(Password)
     
    }

    clickLogin(){
        cy.xpath(this.LoginBtn).click()  
  
    }
}

export default Login