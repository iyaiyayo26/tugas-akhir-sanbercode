Feature: Login Kasir Aja Feature

    Scenario: Login successfully with valid credentials
    Given user at login page
    When user input "toko1@gmail.com" in email field
    And user input "abcde12345" in password field
    Then user redirect to dashboard page