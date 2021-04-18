Feature:  transfer cash from my savings accounts

    As a valid user  I login to the application I should be able to transfer funds

    Scenario: Transferring funds from one account to another and verifying the transfer
    Given I login to the application
    And I navigate to transfer funds
    And I transfer cash from saving account
    Then the transfer must be successful
