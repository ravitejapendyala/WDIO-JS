Feature: The Internet Guinea Pig Website

@webdefault
  # Scenario Outline: As a user, I can log into the secure area

  #   Given I am on the login page
  #   When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |
  

  Scenario: User opens Ruby app and signon
    Given the app is launched
    When the user clicks the button
    Then the result element should be displayed
  
  @ApiDemosFirstTest
  Scenario: User verifies Action option displayed
    Given the app is launched
    When I Click on app
    Then Action option should be displayed
  
  @FindElementByClass
  Scenario: User identifies element by ClassName
    Given the app is launched
    When I get text from first element by className  
  
  @FullNavigation
  Scenario: User verifies 
    Given the app is launched
    When I Click on app
    And I Navigate to 'Alert Dialogs'
    And I Navigate to 'List dialog'
    And I Navigate to 'Command two'
    Then I get text from option selected
    

