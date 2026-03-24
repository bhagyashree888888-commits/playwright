const {test} = require ("@playwright/test");

test("end to end testing demo",async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //await page.waitForLoadState('networkidle');
    await page .locator("#userEmail").fill("Admin12345678@gmail.com");
    await page.locator("#userPassword").fill("Admin@123");
    await page.locator("#login").click();
   // await page.getByText("Add To Cart").click();
   await page.waitForLoadState('networkidle');
   const product = await page.locator(".card-body b").allTextContents();
   // const product = await page.locator(".container").allTextContents(); //whole container text it extracted
   console.log(product);
   for(let p of product){
  if(p.includes("ZARA COAT 3")){
    console.log(p + " is found");
    break;
   }
   else {    console.log("product not found");
   }
   
}});