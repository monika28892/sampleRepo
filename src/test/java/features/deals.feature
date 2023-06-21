#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Deal data creation

Scenario: Free CRM Create a new deal scenario

Given user is already on Home Page
When title of Home page is Free CRM
Then user hover on login button
Then user clicks on login button
Then user enters into login page
Then user enters Email and Password
| monika28892@gmail.com | Test@123 |
Then user clicks on login link
Then user enters into main page
Then user hover on deals button
Then user clicks on add icon
Then user moves into deal page
Then user enters deal details
| test Deal | 1000 | 50 | 10 |
Then user clicks on Save button
Then close the browser

