$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/feature/Testfeature.feature");
formatter.feature({
  "line": 2,
  "name": "ProductStore Website",
  "description": "",
  "id": "productstore-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "productstore-website;login-into-demo-blaze-website;;1"
    },
    {
      "cells": [
        "shreyas",
        "123456789"
      ],
      "line": 13,
      "id": "productstore-website;login-into-demo-blaze-website;;2"
    },
    {
      "cells": [
        "pliya",
        "pliya"
      ],
      "line": 14,
      "id": "productstore-website;login-into-demo-blaze-website;;3"
    },
    {
      "cells": [
        "bltcts",
        "123456"
      ],
      "line": 15,
      "id": "productstore-website;login-into-demo-blaze-website;;4"
    },
    {
      "cells": [
        "demoblaze",
        "demoblaze"
      ],
      "line": 16,
      "id": "productstore-website;login-into-demo-blaze-website;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"shreyas\" and \"123456789\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 8018503571,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_LoginTab_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 92395029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shreyas",
      "offset": 22
    },
    {
      "val": "123456789",
      "offset": 36
    }
  ],
  "location": "StepLoginPage.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 3318930521,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_login_button_and_close_the_browser()"
});
formatter.result({
  "duration": 17171117478,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"pliya\" and \"pliya\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 8940914379,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_LoginTab_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 83594162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pliya",
      "offset": 22
    },
    {
      "val": "pliya",
      "offset": 34
    }
  ],
  "location": "StepLoginPage.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 3268368659,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_login_button_and_close_the_browser()"
});
formatter.result({
  "duration": 15231766417,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"bltcts\" and \"123456\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 18281061600,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_LoginTab_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 76406937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bltcts",
      "offset": 22
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "StepLoginPage.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 3260667611,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_login_button_and_close_the_browser()"
});
formatter.result({
  "duration": 17133379661,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"demoblaze\" and \"demoblaze\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 7619126383,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_LoginTab_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 77885501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demoblaze",
      "offset": 22
    },
    {
      "val": "demoblaze",
      "offset": 38
    }
  ],
  "location": "StepLoginPage.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 3307416195,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_login_button_and_close_the_browser()"
});
formatter.result({
  "duration": 15246219663,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "Adding to cart of product",
  "id": "productstore-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@TC_02_Add_Cart"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "The user launches the Chrome browser of demoblaze application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Select the product",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accept the Alert message and close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepAddToCart.the_user_launches_the_Chrome_browser_of_demoblaze_application()"
});
formatter.result({
  "duration": 12090955862,
  "status": "passed"
});
formatter.match({
  "location": "StepAddToCart.select_the_product()"
});
formatter.result({
  "duration": 4713556507,
  "status": "passed"
});
formatter.match({
  "location": "StepAddToCart.click_on_Add_to_cart()"
});
formatter.result({
  "duration": 5099482933,
  "status": "passed"
});
formatter.match({
  "location": "StepAddToCart.accept_the_Alert_message_and_close_the_Browser()"
});
formatter.result({
  "duration": 6102926405,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "",
  "id": "productstore-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC_03_contact"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User launches the product store application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Click on the contact tab",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Enter the Contact Email as \"shreyas@gmail.com\" and Contact Name as \"shreyas\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter the Message as \"Application have good collection of products\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Accept the Alert message in contact and close the Application Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepContact.user_launches_the_product_store_application()"
});
formatter.result({
  "duration": 7504901179,
  "status": "passed"
});
formatter.match({
  "location": "StepContact.click_on_the_contact_tab()"
});
formatter.result({
  "duration": 1094306966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shreyas@gmail.com",
      "offset": 28
    },
    {
      "val": "shreyas",
      "offset": 68
    }
  ],
  "location": "StepContact.enter_the_Contact_Email_as_and_Contact_Name_as(String,String)"
});
formatter.result({
  "duration": 3326320031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Application have good collection of products",
      "offset": 22
    }
  ],
  "location": "StepContact.enter_the_Message_as(String)"
});
formatter.result({
  "duration": 2333116923,
  "status": "passed"
});
formatter.match({
  "location": "StepContact.accept_the_Alert_message_in_contact_and_close_the_Application_Browser()"
});
formatter.result({
  "duration": 4164846989,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "To click on next page and select the product",
  "id": "productstore-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@TC_04_nextpage"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User launches the demo blaze application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Click on the next page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Select the product in the next page of mac",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Check the product and Close the BrowserApplication",
  "keyword": "And "
});
formatter.match({
  "location": "StepsForNextPage.user_launches_the_demo_blaze_application()"
});
formatter.result({
  "duration": 6892158181,
  "status": "passed"
});
formatter.match({
  "location": "StepsForNextPage.click_on_the_next_page()"
});
formatter.result({
  "duration": 60018248,
  "status": "passed"
});
formatter.match({
  "location": "StepsForNextPage.select_the_product_in_the_next_page_of_mac()"
});
formatter.result({
  "duration": 9357257314,
  "status": "passed"
});
formatter.match({
  "location": "StepsForNextPage.check_the_product_and_Close_the_BrowserApplication()"
});
formatter.result({
  "duration": 7056377790,
  "status": "passed"
});
});