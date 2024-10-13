const { Given, When, Then } = require("@wdio/cucumber-framework");
const signUpPage = require("../Pages/signUp.page");

Given('user at Sign up page', () => {
    signUpPage.open();
    const currentUrl = browser.getUrl()
    currentUrl.includes('register');
})

When('user input {string} in nama toko field', (namaToko) => {
    signUpPage.nameTxtBox.setValue(namaToko);
})

When('user input {string} in email field', (email) => {
    signUpPage.emailTxtBox.setValue(email);
})

When('user input {string} in password field', (password) => {
    signUpPage.passwordTxtBox.setValue(password);
})

When('user click daftar button', () => {
    signUpPage.btnSignUp.click();
})

Then('user redirect to login page', () => {
    const currentUrl = browser.getUrl()
    currentUrl.includes('login');
})

Then('user see error message because nama toko field is empty', () => {
    expect(signUpPage.txtNameEmptyValue).toHaveText('"name" is not allowed to be empty');
})

Then('user see error message because email field is empty', () => {
    expect(signUpPage.txtErrEmailEmpty).toHaveText('"email" is not allowed to be empty');
})