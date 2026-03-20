const { test,expect } = require("@playwright/test");

test("open the browser", async ({ browser }) => {

    const context = await browser.newContext(); // ✅ store it
    const page = await context.newPage();       // ✅ create page properly

    await page.goto('https://www.google.com/');
    await page.goto('https://www.facebook.com/');
     console.log(await page.title());
     await expect(page).toHaveTitle(/Facebook/);
});