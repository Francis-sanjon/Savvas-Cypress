const { When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Home from '../PageObject/01_Home.spec'
import BaseClass from '../PageObject/BaseClass.spec'
const home = new Home()
const bs = new BaseClass();

describe('', () => {
    When('User Login to Realize as Google Student', () => {
        bs.savvasLogin('autostuddashon01@gedu-demo-pearson.com', 'testing123$')

    })


})