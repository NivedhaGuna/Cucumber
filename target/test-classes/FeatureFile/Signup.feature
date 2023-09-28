Feature: To validate the login functionality of the foodee application
Background:
Given User should launch the browser and load the url

  Scenario Outline: To validate the signup functions of the foodee with invalid customer details
    
    And User should maximize the screen and click the login button
    When User should enter the invalid name "<Fname>" and invalid email id "<Email>"     
    And User should click the continue button 
    And User should give the delivery address
    Then User should navigate to invalid credential page
    
    Examples:
        |Fname  | Email           |
        |Nivedha| g.nive@gmail.com|
  
  
  Scenario: To validate the login functionality of the foodee 
  
    When User should enter the invalid email and invalid password
    
   |Email             |Password|
   |g.nive06@gmail.com|12345678|
    
    And User should click the continue button
    Then User should navigate to invalid credential page

