Feature: Sign up Kasir Aja Feature

    Scenario: Sign up successfully with valid credentials
    Given user at Sign up page
    When user input "toko2" in nama toko field
    And user input "toko2@gmail.com" in email field
    And user input "abcde12345" in password field
    And user click daftar button
    Then user redirect to login page

    Scenario: Sign up failed because nama toko field is empty
    Given user at Sign up page
    When user input "toko2@gmail.com" in email field
    And user input "abcde12345" in password field
    And user click daftar button
    Then user see error message because nama toko field is empty

    Scenario: Sign up failed because email field is empty
    Given user at Sign up page
    When user input "toko2" in nama toko field
    And user input "abcde12345" in password field
    And user click daftar button
    Then user see error message because email field is empty