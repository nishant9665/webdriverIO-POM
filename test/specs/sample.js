describe('Homepage', () => {
    it('should assert',   () => {

        it('should assert',  () => {
    
            browser.url('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
              $("input[name='first_name']").setValue("Tejaswi")
             browser.pause(5000);
              $("input[name='last_name']").setValue("Bhondave");
             browser.pause(5000);
              $("input[name='email']").setValue("teju.890@gmail.com");
             browser.pause(5000);
              $("textarea[name='message']").setValue('First test');
             browser.pause(5000);
              $("input[type='submit']").click();
        });
    });










    it('should assert', async () => {
        browser.url('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
         await( await $("input[name='first_name']")).setValue("Tejaswi");
         browser.pause(5000);
         await (await  $("input[name='last_name']")).setValue("Bhondave");
         browser.pause(5000);
         await(await $("input[name='email']")).setValue("teju.890@gmail.com");
         browser.pause(5000);
         await (await $("textarea[name='message']")).setValue('First test');
         browser.pause(5000);
         await (await $("input[type='submit']")).click();
    });

    
});