const test =require("@playwright/test");

test("locator demo",async({page})=>{
    //await page.goto("https://www.google.com/");  
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
      await page.locator("#username").type("rahulshettyacademy")
      await page.locator("#password").type("learning");
      await page.locator("#signInBtn").click();
      console.log(await page.locator("[style*='block']").textContent()  );
      //test.expect(await page.locator("[style*='block']").textContent()).toContain("Incorrect");
      
      //await expect(page.locator("[style*='block']")).toContainText("old");
})