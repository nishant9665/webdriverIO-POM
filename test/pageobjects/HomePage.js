const Page = require('./page');
const assert = require('chai').assert;



/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    

    get ele_loginBtn () {  return $('#customernav') }
    get ele_logoff () {return $ ("//ul[@class='side_account_list']//li/a[contains(text(),'Logoff')]")}
    get ele_accountBtn(){return $ ("//ul[@id='main_menu_top']//li[@data-id='menu_account']//a[@class='top menu_account']")}
    get ele_categoryMenu_List () { return $$('//ul[@class="nav-pills categorymenu"]/li/a')}
    get ele_first_iteam () {return $("//div[@class='contentpanel']//div[1]//div[2]//a[1]//img[1]")}
    get ele_shoes_Size () {return $("//form[@id='product']//div[1]//div//label[4]//input") }
    get ele_addtoCart(){return $("//a[normalize-space()='Add to Cart']")}
    get ele_checkout () { return $("//a[@id='cart_checkout1']") }
    get ele_confirmationOrder () { return $("//button[normalize-space()='Confirm Order']")}
    get ele_onCart(){return $("//ul[@class='nav topcart pull-left']")}
    get ele_removeFromCart(){return $ ("//tbody/tr[2]/td[7]/a[1]/i[1]")}
    get ele_shoppingCartMessage(){return $("//div[@class='contentpanel']")}
    get ele_outOfstock () {return $("//ul[@class='productpagecart']//li//span")}



    //ul[@class='nav topcart pull-left']

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async submitBtn () {
        await (await this.btnSubmit).click()
    }

    async select_categorymenu (Menuname) {
        browser.waitUntil(function(){ return this.ele_categoryMenu_List.isDisplayed() === true },6000,'email is not displayed####################################') 
        let categoryMenuObJ=await (await this.ele_categoryMenu_List)
        for(let i=0; i<categoryMenuObJ.length; i++){
            await browser.pause(1000);
                const elementq =categoryMenuObJ[i];
                 elementq.getText().then((val)=>{
                   console.log("Real value is :"+val.trim());
                   let menuName=val.trim();
                    if(menuName === Menuname){
                     console.log("clicked on men menu-start")
                      elementq.click();
                      console.log("clicked on men menu-end")
                   }
                   else{
                       assert.fail("this produnct is not found")
                   }
                 }).catch((pic)=>{
                     console.log("this is error " ,pic);
                 })
        
        }
    }

    async select_firstItem(){
        await (await this.ele_first_iteam).click()
    }
    async select_shoes_size(){
       // await browser.pause(1000)
        await (await this.ele_shoes_Size).click()
    }
    async addToCart(){
      //  await browser.pause(2000)
      try{
      let cartclassName=await (await this.ele_addtoCart).getAttribute('class')
     // cartMessage.then(async (mesg)=>{
        if(cartclassName === 'cart'){
            await (await this.ele_addtoCart).click();
        }
    }catch(err){
        console.log(("Error found - "+err.message))
        assert.fail("out of stock the product -web element is not found ")
    }

      //})
    }
    async product_Checkout(){
      //  await browser.pause(2000)
        await (await this.ele_checkout).click();
    }
    async confirmationOrder(){
        await browser.pause(1000)
        await (await this.ele_confirmationOrder).click();
    }
   
   async click_OnCart(){
       await browser.pause(1000)
       await (await this.ele_onCart).click();
   }

   async click_removeProduct(){
    await browser.pause(2000)       
    let emptyCartSymbol = await (await this.ele_removeFromCart).isDisplayed();
    while(emptyCartSymbol){
        await browser.pause(1000)
        await (await this.ele_removeFromCart).click();
        emptyCartSymbol = await (await this.ele_removeFromCart).isDisplayed();
    }
    let cardMessage = await(await this.ele_shoppingCartMessage).getText()
    //assert.equal(,"Your shopping cart is empty!","empty card is not displayed")
   // console.log("this is output :"+cardMessage.trim());
    let assertiontext=cardMessage.trim()
    console.log("output is :"+assertiontext)
    assert.notDeepEqual(assertiontext,'Your shopping cart is empty!');
       
   }
   async click_OnAccount(){
    await browser.pause(1000)
    await (await this.ele_accountBtn).click();
  }

  async click_OnLogout(){
    await browser.pause(1000)
    await (await this.ele_logoff).click();
    await browser.pause(2000)
  }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new HomePage();
