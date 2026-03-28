const {test} = require ("@playwright/test");
test("alert demo",async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   
    const framesPage = page. frameLocator ("#courses-iframe") ;
await framesPage. locator("li a[href *= 'lifetime-access']:visible").click();
const textCheck =await framesPage. locator(".text h2") . textContent();
console. log(textCheck.split(" ") [1]);
    
    await page.pause();
    
    

});
