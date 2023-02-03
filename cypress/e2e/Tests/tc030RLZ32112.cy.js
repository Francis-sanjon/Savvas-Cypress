const { When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from '../PageObject/BaseClass.spec'
const bs=new BaseClass()

describe('',()=>{
    When('User Logins Savvas as Teacher',()=>{
    bs.savvasLogin('smokesuite17_teacher01','testing123$')
    }) 
    Then('User verifies rectangular class card is displayed in full browser window',()=>{
        cy.get(':nth-child(1) > .classHeader > .classAssignmentLink > .h-100').should('have.attr','style','max-width: 456px;')
    })  
    And('User Change bowser resolution to 767 and verify mobile class card',()=>{
        cy.viewport(767,1024)
    }) 
    Then('User verifies mobile class card is displayed or not when browser resolution is below 768',()=>{
        cy.viewport(800,1024)
    }) 
    And('User Change bowser resolution to 800 and verify rectangular class card',()=>{
        cy.get(':nth-child(1) > .classHeader > .classAssignmentLink > .h-100').should('have.attr','style','max-width: 326px;')
    }) 

})