Feature: Verify Class card Header background colour should persist between logins for GC Student


    Scenario: Verify Class card Header background colour should persist between logins for GC Student
        Given User launche the Realize login Page
        When User Login to Realize dashboard as a Student16
        Then User Verify the Realize Dashboard Page
        Then User Verifies the square class cards header colour in new Realize homepage
        And User Clicks profile Icon
        And User Clicks SignOut button
         Given User launche the Realize login Page
        When User Login to Realize dashboard as a Student16
        Then User Verify the Realize Dashboard Page
        Then User Verifies the square class cards header colour in new Realize homepage1
        And User Clicks profile Icon
        And User Clicks SignOut button