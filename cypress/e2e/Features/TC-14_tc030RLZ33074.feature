Feature: Verify tooltip displayed for square class card quicklinks


    Scenario: Verify tooltip displayed for square class card quicklinks
        Given User launche the Realize login Page
        When User Logins as Teacher14
        Then User Verify the Realize Dashboard Page
        #Then User Verifies the square class cards in new Realize homepage
        And User Hover 'Pen and Paper' icon
        Then User verifies Tooltip message 'Assignments' is displayed or not
        And User Hover 'People' icon
        Then User verifies Tooltip message 'Student & Groups' is displayed or not
        And User Hover 'Graph' icon
        Then User verifies Tooltip message 'Data' is displayed or not
        And User Hover 'Book' icon
        Then User verifies Tooltip message 'Programs' is displayed or not