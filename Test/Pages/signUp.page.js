const Page = require("./page");

class SignUpPage extends Page {

    open() {
        super.open('https://kasirdemo.vercel.app/register')
    }
}

module.exports = new SignUpPage();