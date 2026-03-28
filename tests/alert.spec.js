const {test} = require ("@playwright/test");
test("alert demo",async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    
    page.on("dialog",dialog => {
        const alertText = dialog.message();  // ✅ correct way
        console.log(alertText);
        dialog.accept();
    });
    await page.locator("#alertbtn").click();
    // const alertText = await page.locator("#alertbtn").textContent(); //this will give you button text not pop up
    // console.log(alertText);
    await page.pause();

});