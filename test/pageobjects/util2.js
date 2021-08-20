var util2 = async function(){

    var textz = await $$('//ul[@class="nav-pills categorymenu"]/li/a');



 this.clickOn_MenuCard= async function(menuName){


  // await browser.waitUntil(function(){ return textz.isDisplayed() === true },6000,'email is not displayed####################################') 
    console.log('length is ',textz.length) 
    for(let i=0; i<textz.length; i++){
    //    await browser.pause(3000);
            const elementq =textz[i];
            elementq.getText().then((val)=>{
            console.log("Real value is :"+val.trim());
            let list_menuName=val.trim();
            if(list_menuName === menuName){
                console.log("clicked on men menu-start")

                elementq.click();
                console.log("clicked on men menu-end")
            }
            }).catch((pic)=>{
                console.log("this is error " ,pic);
            })

}
}
};

module.exports = new util2