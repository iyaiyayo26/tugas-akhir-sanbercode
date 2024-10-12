const Page = require("./page");

class LoginPage extends Page {

    open() {
        super.open('https://kasirdemo.vercel.app/login')
    }
}

module.exports = new LoginPage();