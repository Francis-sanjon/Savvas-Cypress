Feature: "Verify rectangular/square class card based on screen resolution for teacher user

    Scenario:"Verify rectangular/square class card based on screen resolution for teacher user
        Given User launche the Realize login Page
        When User Logins Savvas as Teacher
        Then User verifies rectangular class card is displayed in full browser window
And User Change bowser resolution to 767 and verify mobile class card
Then User verifies mobile class card is displayed or not when browser resolution is below 768
And User Change bowser resolution to 800 and verify rectangular class card
#Then User verifies Rectangular class card is displayed or not when browser resolution is 768 or above
