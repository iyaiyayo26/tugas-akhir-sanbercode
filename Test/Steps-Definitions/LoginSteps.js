const { Given, When, Then } = require("@wdio/cucumber-framework")
const loginPage = require("../Pages/login.page")

Given('user at login page', () => {
    loginPage.open();
    const currentUrl = browser.getUrl()
    currentUrl.includes('login');
})

When('user input {string} in email field', (email) => {
    loginPage.emailTxtBox.setValue(email);
})

When('user input {string} in password field', (password) => {
    loginPage.passwordTxtBox.setValue(password);
})

When('user click login button', () => {
    loginPage.btnLogin.click();
})

Then('user redirect to dashboard page', () => {
    const currentUrl = browser.getUrl()
    currentUrl.includes('dashboard');
    expect(loginPage.txtDashboard).toHaveText('dashboard');
})

Then('user see error message because email field is empty', () => {
    expect(loginPage.txtErrEmailEmpty).toBeDisplayed();
    expect(loginPage.txtErrEmailEmpty).toHaveText('"email" is not allowed to be empty');
})

Then('user see error message because password field is empty', () => {
    expect(loginPage.txtErrEmailEmpty).toBeDisplayed();
    expect(loginPage.txtErrEmailEmpty).toHaveText('"password" is not allowed to be empty');
})