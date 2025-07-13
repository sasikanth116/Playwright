const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('https://www.demoblaze.com/');

  // 7. Wait for product elements to be visible
  await page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); // Corrected XPath

  // 8. Get all product links and print their names
  const products = await page.$$("xpath=//div[@id='tbodyid']//div//h4/a");
  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }
});
