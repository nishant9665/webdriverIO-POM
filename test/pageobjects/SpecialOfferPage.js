const Page = require('./page');
const assert = require('chai').assert;



/**
 * sub page containing specific selectors and methods for a specific page
 */
class SpecialOfferPage extends Page {
    /**
     * define selectors using getter methods
     */
    

    get ele_loginBtn () {  return $('#customernav') }
    get ele_specialOfferBtn () { return $("//ul[@id='main_menu_top']//li[@data-id='menu_specials']//a")}
    get ele_List_specialoffer_Productname () { return $$("//a[@class='prdocutname']")}
    get ele_spec_CartenableORdisable(){return $("//a[@class='productcart']")}
    get ele_spec_endOfPage () { return $("//select[@id='limit']")}



    //ul[@class='nav topcart pull-left']

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async submitBtn () {
        await (await this.btnSubmit).click()
    }
    async click_specialOfferBtn () {
        await (await this.ele_specialOfferBtn).click()
    }

    async clickOn_SpecialProductName(ProductName){
        let productNameObJ=await (await this.ele_List_specialoffer_Productname)
        for(let i=0; i<productNameObJ.length; i++){
            await browser.pause(1000);
                const elementq =productNameObJ[i];
                 elementq.getText().then(async (val) =>{
                    console.log("Real value is :"+val.trim());
                    let productName=val.trim();
                    if(productName === ProductName){
                      browser.pause(2000)
                      elementq.click();
                          }
                    else{
                        assert.fail("Produnct is not found !!!!!!!!!!")
                    }      
                      })               
                   }
            
                 };
        
        }

module.exports = new SpecialOfferPage();
