const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    

    get loginBtn () {  return $('#customernav') }
    get inputUsername () { return $('//input[@id="loginFrm_loginname"]') }
    get inputPassword () { return $('//input[@id="loginFrm_password"]') }
    get btnSubmit () { return $('//button[@type="submit" and @title="Login"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

     async open_URL () {
      //  browser.url('https://automationteststore.com')
        await super.open('login')
    }
    
    async clickOnlogin_Btn () {
       browser.waitUntil(function(){ return this.loginBtn.isDisplayed() === true },6000,'Login button is not displayed####################################')
       await (await this.loginBtn).click()
       
    }

    async submitBtn () {
        await (await this.btnSubmit).click()
    }

    async enter_credentials (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
