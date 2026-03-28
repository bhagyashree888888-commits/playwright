const test =require("@playwright/test");

test("locator demo",async({page})=>{
    //await page.goto("https://www.google.com/");  
      await page.goto("https://rahulshettyacademy.com/AutomationPractice/"); 
      await page.locator("#displayed-text").isVisible();
      
      await page.locator("#hide-textbox").click();
      await page.locator("#displayed-text").isHidden();
     
      
})