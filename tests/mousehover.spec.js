const {test} = require ("@playwright/test");
test("alert demo",async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   
    //await page.locator("#mousehover").click(); //click = hover + click
    await page.locator("#mousehover").hover();
    await page.locator("[href*='top']").click();
    //await page.locator("[href*='top']").click();
    await page.pause();
    
    

});
