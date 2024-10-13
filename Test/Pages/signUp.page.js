const Page = require("./page");

class SignUpPage extends Page {
    get nameTxtBox () {
        return $('#name');
    }

    get emailTxtBox() {
        return $('#email');
    }

    get passwordTxtBox() {
        return $('#password');
    }

    get btnSignUp() {
        return $('//button[text()="daftar"]');
    }

    get txtNameEmptyValue() {
        return $('//div[text()=""name" is not allowed to be empty"]');
    }

    get txtErrEmailEmpty() {
        return $('//div[text()=""email" is not allowed to be empty"]')
    }
    open() {
        super.open('https://kasirdemo.vercel.app/register')
    }
}

module.exports = new SignUpPage();