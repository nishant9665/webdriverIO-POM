

describe('Automation store -Details', function(){

it('Automation store ', async  () => {

// navigate to a new URL
    browser.url('https://automationteststore.com/')

    browser.maximizeWindow()
    const elem = await $('#customernav')
    browser.setTimeout({'pageLoad': 100000,'script': 60000})

    console.log("start.........1")
    browser.waitUntil(function(){ return elem.isDisplayed() === true },6000,'email is not displayed####################################')
    console.log("start.........2")
    elem.click()

    const loginBtn =  $('//input[@id="loginFrm_loginname"]')
    const passwordBTn =  $('//input[@id="loginFrm_password"]')
    const submitBtn= $('//button[@type="submit" and @title="Login"]')

    loginBtn.setValue("nishant123")
    passwordBTn.setValue("test123")
    submitBtn.click()
   
    /*var textz = await $$('//ul[@class="nav-pills categorymenu"]/li/a')
    browser.waitUntil(function(){ return textz.isDisplayed() === true },6000,'email is not displayed####################################') 
    console.log('length is ',textz.length) 
    for(let i=0; i<textz.length; i++){
        await browser.pause(3000);
            const elementq =textz[i];
             elementq.getText().then((val)=>{
               console.log("Real value is :"+val.trim());
               let menuName=val.trim();
               if(menuName === 'APPAREL & ACCESSORIES'){
                 console.log("clicked on men menu-start")
    
                  elementq.click();
                  console.log("clicked on men menu-end")
               }
             }).catch((pic)=>{
                 console.log("this is error " ,pic);
             })
    
    }  
    const shoesLocation = await $("//div[@class='contentpanel']//div[1]//div[2]//a[1]//img[1]")
    await shoesLocation.scrollIntoView();

    shoesLocation.click();

    await browser.pause(2000)

    const Shoesize = await $("//form[@id='product']//div[1]//div//label[4]//input")
    
    await Shoesize.click();

    await browser.pause(2000)

    const AddtoCart = await $("//a[normalize-space()='Add to Cart']")
    await AddtoCart.click();
    await browser.pause(2000)

    const Checkout = await $("//a[@id='cart_checkout1']")
    await Checkout.click();
    await browser.pause(1000)

    const ConfirmOrder = await $("//button[normalize-space()='Confirm Order']")
    await ConfirmOrder.click();
    await browser.pause(1000)

    const last_Message=await $("//div[@class='contentpanel']//p[2]")
    last_Message.getText().then((val1)=>{
    console.log("this is last message is :"+val1)
    }).catch((val2)=>{
        console.log("not get the text is:"+val2)

    })



    //console.log("this is last message is :"+await last_Message.getText())
    
    await browser.pause(1000)

    
    console.log("Print the End ######################")

*/

    
    })
});
