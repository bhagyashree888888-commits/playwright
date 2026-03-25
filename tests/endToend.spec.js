const {test} = require ("@playwright/test");

test("end to end testing demo",async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //await page.waitForLoadState('networkidle');
    await page .locator("#userEmail").fill("Admin12345678@gmail.com");
    await page.locator("#userPassword").fill("Admin@123");
    await page.locator("#login").click();
   
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const productsNameList = await page.locator(".card-body b").allTextContents();
   // const product = await page.locator(".container").allTextContents(); //whole container text it extracted
   console.log(productsNameList);
   const ProductName = "ZARA COAT 3";
   const count = await page.locator(".card-body b").count();
   
   const products = page.locator(".card-body");
   for(let i=0;i<count;i++){
    //await page.locator(".card-body b").nth(i).textContent() === ProductName wrong u written in if condition
    if(await products.nth(i).locator("b").textContent() === ProductName){
     await products.nth(i).locator("text= Add To Cart").click();
     break;
   }
   }
   await page.locator("[routerlink*='cart']").click();
   await page.locator("text=Buy Now").click();
  
   await page.locator(".txt").nth(1).fill("1234");
    await page.locator(".txt").nth(2).fill("riya")
     await page.locator(".txt").nth(3).fill("rahulshettyacademy");
    await page.locator("[type='submit']").click();

    await page.locator("[placeholder='Select Country']").pressSequentially("ind");
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const  dropdownCount = await dropdown.locator("button").count();
    console.log(dropdownCount);
    for(let i=0;i<dropdownCount;i++){
        const text = await dropdown.locator("button").nth(i).textContent(); 
        if(text === " India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }   
      await page.pause();
}});