Feature: Verify clicking on the Rectangular Google class card title navigates to the assignment listing page of that class for Student

    Scenario: Verify clicking on the Rectangular Google class card title navigates to the assignment listing page of that class for Student
        Given User launche the Realize login Page
        When User Login to Realize as Google Student
        Then User Verify the Realize Dashboard Page
        And User Mouse hover on the class card title
        Then User verify it displays with underline on the class card title
        And User Hover on the colorbar area
        Then verify cursor turns into hand symbol
        Then User Verify class card image clickable or not
        And User clicks class card header
        Then User verifies which nagating to assignment listing page