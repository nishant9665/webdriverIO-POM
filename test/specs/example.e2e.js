
const HomePage = require('../pageobjects/HomePage');
const LoginPage = require('../pageobjects/login.page');
const SpecialOfferPage = require('../pageobjects/SpecialOfferPage');
const data=require('../testdata/smokeTestData')
var jdata =require('../testdata/jsonData.json')




before(async () => {  
    await LoginPage.open_URL();
    await browser.maximizeWindow()
    await browser.setTimeout({'pageLoad': 10000,'script': 6000})
    await LoginPage.clickOnlogin_Btn();
    await LoginPage.enter_credentials(data.username, data.password);
    await LoginPage.submitBtn();
  });


describe('My Login application', () => {

    it('Regression Testcases - Special offer ', async () => {
     
        await HomePage.click_OnCart();
        await HomePage.click_removeProduct();
        await SpecialOfferPage.click_specialOfferBtn();
        await SpecialOfferPage.clickOn_SpecialProductName(data.productName);
        await HomePage.addToCart();
        await HomePage.product_Checkout();
        await HomePage.confirmationOrder();
        console.log("End the Test ##################################")
        
    
    });
    it.skip('Regression Testcases - Add two producnt in cart', async () => {
      
        await HomePage.click_OnCart();
        await HomePage.click_removeProduct();
        await HomePage.select_categorymenu(jdata.categorymenu);
        await HomePage.select_firstItem();
        await HomePage.select_shoes_size();
        await HomePage.addToCart();
        await HomePage.select_categorymenu(jdata.categorymenu2);
        await HomePage.select_firstItem();
        await HomePage.addToCart();
        
    });

    it.skip('Regression Testcases -Flow from login to Payment', async () => {
        await HomePage.click_OnCart();
        await HomePage.click_removeProduct();
        await HomePage.select_categorymenu(jdata.categorymenu6);
        await HomePage.select_firstItem();
        await HomePage.addToCart();
        await HomePage.select_categorymenu(jdata.categorymenu7);
        await HomePage.select_firstItem();
        await HomePage.addToCart();
        await HomePage.product_Checkout();
        await HomePage.confirmationOrder();        

    });
    
}),
    after(async () => {  
        console.log("log out screen")
    // await browser.
    await HomePage.click_OnAccount();
    await HomePage.click_OnLogout();
        
    })


