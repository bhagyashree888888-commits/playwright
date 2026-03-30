const { test, expect, request } = require('@playwright/test');

const LoginPayload = {
  userEmail: "Admin12345678@gmail.com",
  userPassword: "Admin@123"
};

let token;

test.beforeAll(async () => {
  const apiContext = await request.newContext();

  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    { data: LoginPayload }
  );

  expect(loginResponse.ok()).toBeTruthy();

  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;

  console.log("Token:", token);
});

test('place order', async ({ page }) => {

  // Inject token into localStorage before page loads
  await page.addInitScript(value => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client");

  const email = "Admin12345678@gmail.com";
  const productName = 'ZARA COAT 3';

  const products = page.locator(".card-body");

  // Wait for products to load
  await page.locator(".card-body b").first().waitFor();

  const count = await products.count();

  for (let i = 0; i < count; ++i) {
    const productText = await products.nth(i).locator("b").textContent();

    if (productText.trim() === productName) {
      await products.nth(i).locator("text=Add To Cart").click();
      break;
    }
  }

  // Go to cart
  await page.locator("[routerlink*='cart']").click();

  await page.locator("div li").first().waitFor();

  const isVisible = await page.locator(`h3:has-text("${productName}")`).isVisible();
  expect(isVisible).toBeTruthy();

  await page.locator("text=Checkout").click();

  // Select country
  await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });

  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();

  const optionsCount = await dropdown.locator("button").count();

  for (let i = 0; i < optionsCount; ++i) {
    const text = await dropdown.locator("button").nth(i).textContent();

    if (text.trim() === "India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  // Validate email (FIXED: use toHaveValue)
  //await expect(page.locator(".user__name [type='text']").first()).toHaveValue(email);
  await expect(page.locator(".user__name label").first()).toHaveText(email);

  // Place order
  await page.locator(".action__submit").click();

  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log("Order ID:", orderId);

  // Go to orders page
  await page.locator("button[routerlink*='myorders']").click();

  await page.locator("tbody").waitFor();

  const rows = page.locator("tbody tr");

  for (let i = 0; i < await rows.count(); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();

    if (orderId.trim().includes(rowOrderId.trim())) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }

  const orderIdDetails = await page.locator(".col-text").textContent();

  expect(orderId.trim().includes(orderIdDetails.trim())).toBeTruthy();
});