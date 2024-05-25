import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given('the app is launched', async () => {
    // Wait for the app to load
    await driver.pause(11000);
});

When('the user clicks the button', async () => {
    // Find the button by its resource ID (change to your button's ID)
    // const button = await $('~button_resource_id');
    // await button.click();
    // Locate the sign-in button by its class name
    //const signInButton = await $('android=new UiSelector().className("android.view.ViewGroup")');
    const signInButton = await $('android=new UiSelector().className("android.widget.TextView").text("Sign In")');
    await signInButton.click();
});

Then('the result element should be displayed', async () => {
    // Verify the result element is displayed (change to your result element's ID)
    const resultElement = await $('~result_element_id');
    await expect(resultElement).toBeDisplayed();
});

