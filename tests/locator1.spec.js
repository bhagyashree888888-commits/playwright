const test =require("@playwright/test");

test("locator demo",async({page})=>{
    //await page.goto("https://www.google.com/");  
      await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/"); 
      //const products = await page.locator("h4.product-name").allTextContents();
      const products = await page.locator("h4.product-name").nth(3).textContent();
      //await page.locator(".card-body b").waitFor();
      //await page.waitForLoadState('networkidle');
      
      console.log(products);
     
      
})