// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress-xpath" />


require('cy-verify-downloads').addCustomCommand();
/*
import Login from '../PageObject/Login.js'


Cypress.Commands.add("Login_fun",()=>{
  console.log("COmmand File executed")
    cy.visit('https://stage.asp2.aw.navigatetax.pwc.co.in/#/login')
    const ln = new Login();
    cy.fixture('testData').then( (Logindata)=>{
      ln.setUsername(Logindata.Username)
      ln.setPassword(Logindata.Password)
      ln.clickLogin()
    })
  });
*/
  