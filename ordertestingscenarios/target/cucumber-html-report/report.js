$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginLogoutScenario.feature");
formatter.feature({
  "line": 1,
  "name": "To test the Login and Logout feature in the weborders application",
  "description": "",
  "id": "to-test-the-login-and-logout-feature-in-the-weborders-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To Login to the web orders application",
  "description": "",
  "id": "to-test-the-login-and-logout-feature-in-the-weborders-application;to-login-to-the-web-orders-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I Launch a web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"\u003cUsername\u003e\" \"\u003cPassword\u003e\" and login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am logged into the weborders application",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "to-test-the-login-and-logout-feature-in-the-weborders-application;to-login-to-the-web-orders-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 8,
      "id": "to-test-the-login-and-logout-feature-in-the-weborders-application;to-login-to-the-web-orders-application;;1"
    },
    {
      "cells": [
        "Tester",
        "test"
      ],
      "line": 9,
      "id": "to-test-the-login-and-logout-feature-in-the-weborders-application;to-login-to-the-web-orders-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "To Login to the web orders application",
  "description": "",
  "id": "to-test-the-login-and-logout-feature-in-the-weborders-application;to-login-to-the-web-orders-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I Launch a web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"Tester\" \"test\" and login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am logged into the weborders application",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.BrowserSetup()"
});
formatter.result({
  "duration": 6519961140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 13
    },
    {
      "val": "test",
      "offset": 22
    }
  ],
  "location": "Login.LoginWeborderApp(String,String)"
});
formatter.result({
  "duration": 12151548215,
  "status": "passed"
});
formatter.match({
  "location": "Login.VerifyLogin()"
});
formatter.result({
  "duration": 2082847815,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Log out of the Web Orders application",
  "description": "",
  "id": "to-test-the-login-and-logout-feature-in-the-weborders-application;log-out-of-the-web-orders-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I Log out of the application",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Logout()"
});
formatter.result({
  "duration": 3087130016,
  "status": "passed"
});
formatter.match({
  "location": "Login.CloseBrowser()"
});
formatter.result({
  "duration": 19457973211,
  "status": "passed"
});
formatter.uri("OrderScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "To verify the functionalities of placing order, update order and deleting order",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Place a new Order",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;place-a-new-order",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I Launch a web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"\u003cUsername\u003e\" \"\u003cPassword\u003e\" and login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I navigate to order creation page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the Product information \"\u003cProduct\u003e\" \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter the Address information \"\u003cCustomerName\u003e\" \"\u003cStreet\u003e\" \"\u003cCity\u003e\" \"\u003cState\u003e\" \"\u003cZip\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter the payment information \"\u003cCard\u003e\" \"\u003cCardNr\u003e\" \"\u003cExpirydate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I submit the order",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;place-a-new-order;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Product",
        "Quantity",
        "CustomerName",
        "Street",
        "City",
        "State",
        "Zip",
        "Card",
        "CardNr",
        "Expirydate"
      ],
      "line": 13,
      "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;place-a-new-order;;1"
    },
    {
      "cells": [
        "Tester",
        "test",
        "FamilyAlbum",
        "2",
        "Jason Higgins",
        "10, Leopald Street",
        "Liverpool",
        "US",
        "748",
        "visa",
        "54874512",
        "04/21"
      ],
      "line": 14,
      "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;place-a-new-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Place a new Order",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;place-a-new-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I Launch a web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"Tester\" \"test\" and login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I navigate to order creation page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the Product information \"FamilyAlbum\" \"2\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter the Address information \"Jason Higgins\" \"10, Leopald Street\" \"Liverpool\" \"US\" \"748\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter the payment information \"visa\" \"54874512\" \"04/21\"",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I submit the order",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.BrowserSetup()"
});
formatter.result({
  "duration": 4544455719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 13
    },
    {
      "val": "test",
      "offset": 22
    }
  ],
  "location": "Login.LoginWeborderApp(String,String)"
});
formatter.result({
  "duration": 8937869717,
  "status": "passed"
});
formatter.match({
  "location": "Order.NavigateToOrderCreationPage()"
});
formatter.result({
  "duration": 3316050130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FamilyAlbum",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "Order.EnterProductInformation(String,String)"
});
formatter.result({
  "duration": 1317571391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jason Higgins",
      "offset": 31
    },
    {
      "val": "10, Leopald Street",
      "offset": 47
    },
    {
      "val": "Liverpool",
      "offset": 68
    },
    {
      "val": "US",
      "offset": 80
    },
    {
      "val": "748",
      "offset": 85
    }
  ],
  "location": "Order.EnterAddrInfo(String,String,String,String,String)"
});
formatter.result({
  "duration": 490919735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "visa",
      "offset": 31
    },
    {
      "val": "54874512",
      "offset": 38
    },
    {
      "val": "04/21",
      "offset": 49
    }
  ],
  "location": "Order.EnterPaymentInfo(String,String,String)"
});
formatter.result({
  "duration": 240066955,
  "status": "passed"
});
formatter.match({
  "location": "Order.submitorder()"
});
formatter.result({
  "duration": 2111617007,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Update a new Order",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;update-a-new-order",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I select the order to be edited \"\u003cCustomerName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Enter the Product information \"\u003cProduct\u003e\" \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I update the order",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;update-a-new-order;",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "Product",
        "Quantity"
      ],
      "line": 23,
      "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;update-a-new-order;;1"
    },
    {
      "cells": [
        "Jason Higgins",
        "ScreenSaver",
        "10"
      ],
      "line": 24,
      "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;update-a-new-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Update a new Order",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;update-a-new-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I select the order to be edited \"Jason Higgins\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Enter the Product information \"ScreenSaver\" \"10\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I update the order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Jason Higgins",
      "offset": 33
    }
  ],
  "location": "Order.EditOrder(String)"
});
formatter.result({
  "duration": 4149703423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ScreenSaver",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 45
    }
  ],
  "location": "Order.EnterProductInformation(String,String)"
});
formatter.result({
  "duration": 1309942773,
  "status": "passed"
});
formatter.match({
  "location": "Order.updateorder()"
});
formatter.result({
  "duration": 67109077,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Delete a selected Order",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;delete-a-selected-order",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I select the order to be deleted \"\u003cCustomerName\u003e\" and delete",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I Log out of the application",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;delete-a-selected-order;",
  "rows": [
    {
      "cells": [
        "CustomerName"
      ],
      "line": 31,
      "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;delete-a-selected-order;;1"
    },
    {
      "cells": [
        "Jason Higgins"
      ],
      "line": 32,
      "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;delete-a-selected-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Delete a selected Order",
  "description": "",
  "id": "to-verify-the-functionalities-of-placing-order,-update-order-and-deleting-order;delete-a-selected-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I select the order to be deleted \"Jason Higgins\" and delete",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I Log out of the application",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I close the Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Jason Higgins",
      "offset": 34
    }
  ],
  "location": "Order.deleteorder(String)"
});
formatter.result({
  "duration": 5819360401,
  "status": "passed"
});
formatter.match({
  "location": "Login.Logout()"
});
formatter.result({
  "duration": 5317708836,
  "status": "passed"
});
formatter.match({
  "location": "Login.CloseBrowser()"
});
formatter.result({
  "duration": 935401962,
  "status": "passed"
});
});