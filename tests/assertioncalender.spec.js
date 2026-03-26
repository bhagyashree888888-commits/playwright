const {test} = require ("@playwright/test");

test("calender demo",async ({page}) =>
    {
        const year = "2028";
        const month = "8";
        const date = "28";
        const expectedDate= [year,month,date];
        
          await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
          await page.locator(".react-date-picker__inputGroup").click();
          await page.locator(".react-calendar__navigation__label").click();
           await page.locator(".react-calendar__navigation__label").click();
           await page.getByText(year).click();
           await page.locator(".react-calendar__year-view__months__month").nth(month-1).click();
           await page.locator(`//abbr[text()='${date}']`).click();
           const count = await page.locator(".react-date-picker__inputGroup__input").allTextContents();
           console.log(count);
          await page.pause();
    }
)