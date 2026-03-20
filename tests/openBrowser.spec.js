const { test } = require("@playwright/test");//1 install 

//2 test syntax
//test( "mssge",({browser})=>{code})
//js is async
test.only('dirct open browser page', async ({ page }) => {
    await page.goto('https://www.google.com/');
    //await page.screenshot({ path: 'screenshot.png' });
})
test('open browser', async ({ browser }) => {
    //{browser} in curly bracese bez it regonize as fixture
    const context = await browser.newContext(); // new incognito window  
    const page = await browser.newPage();       //// new tab inside it
    // by skkiping the context ,This works because:
//Playwright will automatically create a context for you behind the scenes
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await page.screenshot({ path: 'screenshot.png' });
})