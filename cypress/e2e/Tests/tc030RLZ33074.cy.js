const { When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from '../PageObject/BaseClass.spec'
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
import 'cypress-real-events'
const bs = new BaseClass();
const home = new Home()
const profilePage = new ProfilePage();


describe('', () => {

    When('User Logins as Teacher14', () => {
        bs.savvasLogin('MSuite49win10chrome_teacher06', 'testing123$')
    })
    Then('User Verifies the square class cards in new Realize homepage', () => {
        //should('have.attr', 'style', 'max-width: 726px;')
        cy.get('[class="classAssignmentLink"]').should('have.attr', 'style', 'max-width: 726px;')
    })
    And("User Hover 'Pen and Paper' icon", () => {
        cy.get('[data-e2e-id="class-listing-assignments-link"]').eq(0).realHover()
    })
    Then("User verifies Tooltip message 'Assignments' is displayed or not", () => {
        cy.get('[data-e2e-id="class-listing-assignments-link"]').eq(0).realHover().should('have.attr', 'title', 'Assignments');
    })
    And("User Hover 'People' icon", () => {
        cy.get('[data-e2e-id="class-listing-studentsAndGroups-link"]').eq(0).realHover()
    })
    Then("User verifies Tooltip message 'Student & Groups' is displayed or not", () => {
        cy.get('[data-e2e-id="class-listing-studentsAndGroups-link"]').eq(0).realHover().should('have.attr', 'title', 'Students & Groups');
    })
    And("User Hover 'Graph' icon", () => {
        cy.get('[data-e2e-id="class-listing-data-link"]').eq(0).realHover()
    })
    Then("User verifies Tooltip message 'Data' is displayed or not", () => {
        cy.get('[data-e2e-id="class-listing-data-link"]').eq(0).realHover().should('have.attr', 'title', 'Data');
    })
    And("User Hover 'Book' icon", () => {
        cy.get('[title="Programs"]').eq(0).realHover()
    })
    Then("User verifies Tooltip message 'Programs' is displayed or not", () => {
        cy.get('[title="Programs"]').eq(0).realHover().should('have.attr', 'title', 'Programs');
    })



})