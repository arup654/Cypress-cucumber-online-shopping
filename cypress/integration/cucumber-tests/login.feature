Feature: Login to the application

    As a valid user
    I want to login to the application

    Scenario: Login with valid user
    Given I open the login page
    When I submit the login page
    Then I should see the home page
