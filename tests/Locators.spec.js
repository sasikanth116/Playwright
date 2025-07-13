const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('https://www.demoblaze.com/');

  // 2. Click on the "Log in" link
  await page.locator('#login2').click(); // Using CSS selector
//await page.click(‘id=login2’)

  // 3. Fill in the login form
  await page.locator('#loginusername').fill('pavanol'); // Username
   //await page.fill(‘#loginusername’, ‘sasi)
   //await page.type(‘#loginusername’, ‘sasi’)
  await page.locator('#loginpassword').fill('test@123'); // Password

  // 4. Click the login button
  await page.click("//button[normalize-space()='Log in']"); // XPath selector

  // 5. Wait for and verify that the "Log out" link is visible (means login was successful)
  const logoutLink = page.locator("//a[normalize-space()='Log out']");
  await expect(logoutLink).toBeVisible();

});
