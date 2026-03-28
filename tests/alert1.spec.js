const {test} = require ("@playwright/test");
test("alert demo",async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.on("dialog",dialog =>
    {
        dialog.accept();
        //dialog.dismiss();
    })
    await page.locator("#confirmbtn").click();
    
    

});
