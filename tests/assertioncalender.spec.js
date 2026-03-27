const {test} = require ("@playwright/test");
const { expect } = require ("@playwright/test");

test("calender demo",async ({page}) =>
    {
        const year = "2028";
        const month = "8";
        const date = "28";
        const expectedDate= [month,date,year];
        
          await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
          await page.locator(".react-date-picker__inputGroup").click();
          await page.locator(".react-calendar__navigation__label").click();
           await page.locator(".react-calendar__navigation__label").click();
           await page.getByText(year).click();
           await page.locator(".react-calendar__year-view__months__month").nth(month-1).click();
           await page.locator(`//abbr[text()='${date}']`).click();
           const count = await page.locator(".react-date-picker__inputGroup__input");
           for(let i =0;i<expectedDate.length;i++)
           {
            const text = await count.nth(i).inputValue();
            expect(text).toEqual(expectedDate[i]);
            //checking the value of text with expected date with if else condition
            // if(text === expectedDate[i])
            // {
            //     console.log(`Date matched for index ${i}: ${text}`);
            // }
            // else {
            //     console.log(`Date mismatch for index ${i}: expected ${expectedDate[i]}, but got ${text}`);
            // }
           }

           //console.log(count);
          //await page.pause();
    }
)