///const data = require('../fixtures/xlsxData.json');
const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")

import Home from '../PageObject/01_Home.spec'
import BaseClass from "../PageObject/BaseClass.spec";
import LoginPage from '../PageObject/LoginPage.spec';
import Encryptions from '../EncryptionAndDecryption/Encryptions'
const en=new Encryptions();
const home = new Home();
const bs = new BaseClass();
const loginPage = new LoginPage();
before('Before', () => {
    cy.log('this is before block')
    cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
      let rowsLength = rows.length;
      
  
      cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
      cy.writeFile("cypress/fixtures/xlsxData.txt", { rows })
  
   })
  })

describe('', () => {
    
    Given('Teacher launche the Realize login Page', () => {
        cy.visit('/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
    When('Teacher enters valid username and password', () => {
        bs.savvasLogin('MSuite49win10chrome_teacher04', 'testing123$')
//cy.log("UserName : "+data.rows[0].username)
          let s=en.encrypt('testing123$')
     cy.writeFile("cypress/fixtures/credential.txt", s)
     cy.log("Decrypted : "+en.decrip('U2FsdGVkX1+EFkmgm6O4CMKOsYlDlAVNZMdIcRX+TDw='))
       
    })
    Then('Teacher Verify the Realize Dashboard Page', () => {

        cy.url().should('include', 'dashboard');
    })
    And('Verify the Help Icon displayed or not', () => {
        home.getHelpIconColor().should('have.css', 'color', 'rgb(0, 0, 0)')
    })
    And('Teacher clicks Help Icon', () => {
        home.getHelpIconColor().click()
    })
    Then('Teacher Verify the popup list displayed or not', () => {
        home.getPopUp().should('be.visible')
    })
    When('Teacher enters some value in the inputbox', () => {
        home.getInputBox().click().type('classes',{force:true})
    })
    And('Teacher hits enter', () => {
        home.getInputBox().click().type('{enter}')
    })
    Then('Teacher Verify the result', () => {
        home.getPopUp().should('be.visible')
    })
    And('Teacher clicks Help for this Page', () => {
        home.getHelpForThisPage().click()
    })
    Then('Teacher Verify the result for help for this page option', () => {
        cy.get('[class="floatingModal hydrated"]').should('be.visible')
    })
    And('User close the popup', () => {
        home.getPopUpCloseBtn().click()
    })
    And('Teacher clicks Program Training option', () => {
        bs.windowHandle(home.getProgramTraining())
    })
    Then('Teacher Verify the url for Program Training', () => {
        cy.url().should('include', 'https://mysavvastraining.com/')
    })
    And('Teacher clicks Technical Support option', () => {
        bs.windowHandle(home.getTechnicalSupport())
    })
    Then('Teacher Verify the url for Technical Support', () => {
        cy.url().should('include', 'support/s/contactsupport')
    })
    And('Teacher clicks Contact a Program Specialist option', () => {
        bs.windowHandle(home.getProgramSpecialist())
    })
    Then('Teacher Verify the url for Contact a Program Specialist', () => {
        cy.url().should('include', 'https://mysavvastraining.com/')
    })


})