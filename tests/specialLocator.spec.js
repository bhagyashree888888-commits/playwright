const {test} = require("@playwright/test");

test ("special locators types", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Check me out if you Love IceCreams!").check();
await page.waitForTimeout(2000);
    await page.goBack();
await page.waitForTimeout(2000);
    await page.goForward();
await page.waitForTimeout(2000);
 await page.getByLabel("Check me out if you Love IceCreams!").check();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByLabel("Employed").click();
 await page.getByPlaceholder("Password").fill("123456");
 await page.getByRole("button", { name: "Submit" }).click();
 const SuccessMessage = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
 console.log(SuccessMessage);
 await page.getByRole("link", { name: "Shop" }).click();
 await page.locator("app-card").filter({ hasText: "Nokia Edge" }).getByRole("button").click();
    await page.pause();

});