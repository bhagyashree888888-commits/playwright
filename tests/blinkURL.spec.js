const {test , expect} = require("@playwright/test");
test ("dropdown demo",async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const link= page.locator("[href*='hire.com']");
    await expect (link).toHaveAttribute("class","blinkingText");   

});

