const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
  
  await page.goto('https://www.demoblaze.com/');


  await page.locator('#login2').click(); 

  await page.locator('#loginusername').fill('pavanol'); 
  await page.locator('#loginpassword').fill('test@123'); 
  await page.click("//button[normalize-space()='Log in']"); 

 
  const logoutLink = page.locator("//a[normalize-space()='Log out']");
  await expect(logoutLink).toBeVisible();

});
