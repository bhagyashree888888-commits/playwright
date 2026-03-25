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
   const productsName = await page.locator(".card-body b").allTextContents();
   // const product = await page.locator(".container").allTextContents(); //whole container text it extracted
   console.log(productsName);

//    const count = await page.locator(".card-body ").count();
//    console.log(count);
//    let p="ZARA COAT 3 ";
//    for(let i=0;i<count;i++){
//   if(await page.locator(".card-body b").nth(i).textContent()===p){
//     await page.locator(".card-body button").nth(i).click();
//     break;
//    }
//   //await page.pause();
//    await page.waitForTimeout(2000); // waits for 2 seconds
// await page.close();
});