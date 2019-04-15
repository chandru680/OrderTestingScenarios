Feature: To test the Login and Logout feature in the weborders application

  Scenario Outline: To Login to the web orders application
    Given I Launch a web browser
    When I enter the "<Username>" "<Password>" and login
    Then I am logged into the weborders application
    Examples:
    |Username|Password|
    |Tester  |test    |

  Scenario: Log out of the Web Orders application
    When I Log out of the application
    And I close the Browser



