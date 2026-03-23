const {test , expect} = require("@playwright/test");
test ("dropdown demo",async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await page.locator("#dropdown-class-example").selectOption("option2");
   const radio= page.locator("[value='radio2']");
   await radio.click();
   console.log(await radio.isChecked());
await expect (radio).toBeChecked();
   await page.pause();

});