const {test , expect} = require("@playwright/test");
test ("dropdown demo",async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const checkbox= page.locator("#checkBoxOption1");
    await checkbox.click();
    await checkbox.uncheck();
    //expect (await page.locator("#checkBoxOption1")).isChecked().toBeFalsy();

});