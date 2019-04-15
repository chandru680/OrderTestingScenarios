Feature: To verify the functionalities of placing order, update order and deleting order

  Scenario Outline: Place a new Order
    Given I Launch a web browser
    When I enter the "<Username>" "<Password>" and login
    Given I navigate to order creation page
    And Enter the Product information "<Product>" "<Quantity>"
    And Enter the Address information "<CustomerName>" "<Street>" "<City>" "<State>" "<Zip>"
    And Enter the payment information "<Card>" "<CardNr>" "<Expirydate>"
    Then I submit the order

    Examples:
    |Username|Password|Product|Quantity|CustomerName|Street|City|State|Zip|Card|CardNr|Expirydate|
    |Tester|test      |FamilyAlbum  |2 |Jason Higgins|10, Leopald Street|Liverpool|US|748|visa|54874512|04/21|


  Scenario Outline: Update a new Order
    When I select the order to be edited "<CustomerName>"
    And Enter the Product information "<Product>" "<Quantity>"
    Then I update the order

    Examples:
      |CustomerName|Product|Quantity|
      |Jason Higgins|ScreenSaver|10  |

    Scenario Outline: Delete a selected Order
    When I select the order to be deleted "<CustomerName>" and delete
    When I Log out of the application
    And I close the Browser
    Examples:
      |CustomerName|
      |Jason Higgins|
