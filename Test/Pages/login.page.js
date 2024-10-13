const Page = require("./page");

class LoginPage extends Page {
    get emailTxtBox(){
        return $('#email');
    }

    get passwordTxtBox(){
        return $('#password');
    }

    get txtDashboard(){
        return $('//div[text()="dashboard"]')
    }

    get btnLogin(){
        return $('//button[text()="login"]')
    }

    get txtErrEmailEmpty(){
        return $('//div[text()=""email" is not allowed to be empty"]')
    }

    get txtErrPasswordEmpty(){
        return $('//div[text()=""password" is not allowed to be empty"]')
    }

    open() {
        super.open('https://kasirdemo.vercel.app/login')
    }
}

module.exports = new LoginPage();