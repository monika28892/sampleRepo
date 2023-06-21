$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/QA/SeleniumWorkSpace/CucumberFreeCRMProject/src/test/java/features/contacts.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "## (Comments)"
    },
    {
      "line": 17,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 18,
  "name": "Free CRM Create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "title of Home page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user hover on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user enters into login page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters into main page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user hover on contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on add icon",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user moves into contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user enters contact details \"\u003cFirst Name\u003e\" and \"\u003cLast Name\u003e\" and \"\u003cPosition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password",
        "First Name",
        "Last Name",
        "Position"
      ],
      "line": 39,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "monika28892@gmail.com",
        "Test@123",
        "Monika",
        "Patel",
        "QA Analyst"
      ],
      "line": 40,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "monika28892@gmail.com",
        "Test@123",
        "Nilesh",
        "Patel",
        "QA Engineer"
      ],
      "line": 41,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "title of Home page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user hover on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user enters into login page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user enters \"monika28892@gmail.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters into main page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user hover on contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on add icon",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user moves into contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user enters contact details \"Monika\" and \"Patel\" and \"QA Analyst\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 5108029600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_Home_page_is_Free_CRM()"
});
formatter.result({
  "duration": 5665900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_hower_on_login_button()"
});
formatter.result({
  "duration": 155750500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_into_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "monika28892@gmail.com",
      "offset": 13
    },
    {
      "val": "Test@123",
      "offset": 41
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_hover_on_contacts_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_add_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_into_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monika",
      "offset": 29
    },
    {
      "val": "Patel",
      "offset": 42
    },
    {
      "val": "QA Analyst",
      "offset": 54
    }
  ],
  "location": "LoginStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "title of Home page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user hover on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user enters into login page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user enters \"monika28892@gmail.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters into main page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user hover on contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on add icon",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user moves into contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user enters contact details \"Nilesh\" and \"Patel\" and \"QA Engineer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 4305395900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_Home_page_is_Free_CRM()"
});
formatter.result({
  "duration": 3194100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_hower_on_login_button()"
});
formatter.result({
  "duration": 142261100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_into_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "monika28892@gmail.com",
      "offset": 13
    },
    {
      "val": "Test@123",
      "offset": 41
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_hover_on_contacts_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_add_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_into_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nilesh",
      "offset": 29
    },
    {
      "val": "Patel",
      "offset": 42
    },
    {
      "val": "QA Engineer",
      "offset": 54
    }
  ],
  "location": "LoginStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});