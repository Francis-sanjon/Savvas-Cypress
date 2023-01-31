import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../PageObject/LoginPage.spec";
import BaseClass from "../PageObject/BaseClass.spec";
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
const bs = new BaseClass();
const home = new Home();
const profilePage = new ProfilePage()

let fnameLength, fullNameLength;
describe('', () => {
    When('Teacher enters valid username and password-3', () => {
        bs.savvasLogin('stud1_test01', 'testing123$')
    })
    Then('User Verify profile is visible or not', () => {
        home.getProfileIcon().should('be.visible')
    })
    And('User clicks profile Icon', () => {
        home.getProfileIcon().click()
    })
    Then('User verifies the length of UserName', () => {
        home.getProfileIcon().then((data) => {
            fnameLength = data.length
           })
    })
    And('User clicks Setting Icon', () => {
        cy.get('.header__navbar_student').shadow().find('[class="avatar-dropdown hydrated"]').shadow().find('[data-id="settings"]').click()
    })
    Then('User verifies if the length of the first name less than X char then ellipsis should not be displayed', () => {

        cy.get('#studentName').then(($first) => {
            const Value = $first.text()
            let firstValue = Value.split(" ")[0];
            cy.get('.header__navbar_student').shadow().find('[class="platform__navbar--profileUtility hydrated"]').shadow().find('[class="utility__item--userName"]').then(($second) => {
                const secondValue = $second.text()
                fullNameLength = $second.length
                expect(firstValue).to.eq(secondValue)


            })
        })
        if (fnameLength < fullNameLength) {
            cy.get('.header__navbar_student').shadow().find('[aria-describeby="tooltip-id"]').should('not.be.visible')
        }
    })
    And('user clicks Home Button', () => {
        profilePage.getHomeMenu().click()
    })
    And('User verify username displayed without ellipsis', () => {
        cy.get('.header__navbar_student').shadow().find('[data-utility-id="profile"]').should('not.have.class', 'profile-name profile-name--hover')
    })
    And('user clicks Browse Button', () => {
        profilePage.getBrowseMenu().click()
    })
    And('User clicks Classes Menu', () => {
        profilePage.getClaasesMenu().click()
    })
    And('User clicks Grades Menu', () => {
        profilePage.getGradesMenu().click()
    })



















})