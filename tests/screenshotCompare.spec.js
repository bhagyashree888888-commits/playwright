const {test,expect} =require("@playwright/test");


test.only('visual',async({page})=>
{
await page.goto("https://google.com/");
expect (await page. screenshot()).toMatchSnapshot('landing.png');
}
);