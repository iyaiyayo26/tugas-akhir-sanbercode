@login
Feature: Login Kasir Aja Feature

    Scenario: Login successfully with valid credentials
    Given user at login page
    When user input "toko1@gmail.com" in email field
    And user input "abcde12345" in password field
    And user click login button
    Then user redirect to dashboard page

    Scenario: Failed to login successfully because email field is empty
    Given user at login page
    When user input "abcde12345" in password field
    And user click login button
    Then user see error message because email field is empty

    Scenario: Failed to login successfully because password field is empty
    Given user at login page
    When user input "toko1@gmail.com" in email field
    And user click login button
    Then user see error message because password field is empty