Feature: Verify FirstName

    Scenario:Verify the UserName displayed on the profile shows the first name without elipsis when it less than X char or pixel for Student user
        Given Teacher launche the Realize login Page
        When Teacher enters valid username and password-3
        Then Teacher Verify the Realize Dashboard Page
        Then User Verify profile is visible or not
        Then User verifies the length of UserName
        And User clicks profile Icon
        And User clicks Setting Icon
        Then User verifies if the length of the first name less than X char then ellipsis should not be displayed
        And user clicks Home Button
        Then User verify username displayed without ellipsis
        And user clicks Browse Button
        Then User verify username displayed without ellipsis
        And User clicks Classes Menu
         Then User verify username displayed without ellipsis
        And User clicks Grades Menu
         Then User verify username displayed without ellipsis
        