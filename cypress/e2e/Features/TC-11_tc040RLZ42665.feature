Feature: Verify new class details page is not displayed with new UI

    Scenario: Verify new class details page is not displayed with new UI
        Given User launche the Realize login Page
        When User logins Savvas as a Teacher with valid username and password11
        Then User Verify the Realize Dashboard Page
        And User Hover on Classes subnav
        Then User verifies class list popup modesl is displayed or not
        And User Click on any classes displayed in class list popup modal
        Then User verifies new class details page is not displayed