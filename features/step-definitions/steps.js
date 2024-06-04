import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import { ALLOWED_SCHEMA_EXTENSIONS } from 'appium/build/lib/schema/schema.js';

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
    await driver.pause(6000);
});

When('the user clicks the button', async () => {
    // Find the button by its resource ID (change to your button's ID)
    // const button = await $('~button_resource_id');
    // await button.click();
    // Locate the sign-in button by its class name
    //const signInButton = await $('android=new UiSelector().className("android.view.ViewGroup")');
    const signInButton = await $('android=new UiSelector().className("android.widget.TextView").text("Sign In")');
    await signInButton.click();
    await driver.pause(5000);
});

Then('the result element should be displayed', async () => {
    // Verify the result element is displayed (change to your result element's ID)
        const usernameField = await $('//android.widget.EditText[@hint="USERNAME"]');
        await usernameField.waitForExist({ timeout: 5000 });
        await usernameField.setValue('cdwmobileqa');
        const PassowrdField = await $('//android.widget.EditText[@hint="PASSWORD"]');
        await PassowrdField.waitForExist({ timeout: 5000 });
        await PassowrdField.setValue('blu');
        const signIn_btn = await $('android=new UiSelector().className("android.widget.Button")');
        await PassowrdField.waitForExist({ timeout: 5000 });
        await signIn_btn.click();
});

Then('Action option should be displayed', async() => {
  const actionBar = await $('~Action Bar');
  await expect(actionBar).toBeExisting();
})

When('I Click on app', async() => {
  // Write code here that turns the phrase above into concrete actions

    const appOption = await $('~App');
    await appOption.click();
    await driver.pause(5000);
})

When(`I get text from first element by className`, async() => {
    // [When] Describes the action or event that triggers the scenario.

    const className = await $('android.widget.TextView');
    console.log(await className.getText());
    await expect(className).toHaveText("API Demos");

});


When(`I Navigate to {string}`, async (controlName) => {
    if(controlName == "Alert Dialogs"){
        const alertDialogsButton = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]'); // Replace with actual selector
        await alertDialogsButton.click();
        await driver.pause(5000);
    }
    else if(controlName == "List dialog"){
        //
     const listDialog = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
     await listDialog.click();
    }
    else if(controlName == "Command two"){
        //
     driver.pause(3000);
        const commandTwo = await $('//android.widget.TextView[@text="Command two"]');
     await commandTwo.click();
    }
});

Then(`I get text from option selected`, async () => {
    
    const optionText = await $('id:android:id/message');
    const optionValue = await optionText.getText();
    expect(optionValue.toHaveText("You selected: 1 , Command two"));
    console.log("option selected is : "+optionValue);
});



