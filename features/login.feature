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
  Scenario: User opens ApiDemos app
    Given the app is launched
    When I Click on app
    Then Action option should be displayed
    

