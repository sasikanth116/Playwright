const { test, expect } = require('@playwright/test');
// Or modern import: import { test, expect } from '@playwright/test';

test('Locators built-in', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Validate that the company logo is visible
  const logo = await page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

  // 3. Fill in the login form using built-in placeholder locators
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // 4. Click the login button using role-based locator
  await page.getByRole('button', { name: 'Login' }).click();

  // 5. Wait for the user's dropdown name to appear after login
  const userNameLocator = page.locator('//p[@class="oxd-userdropdown-name"]');
  const name = await userNameLocator.textContent();

  // 6. Assert that the user's name is visible on the page
  await expect(page.getByText(name)).toBeVisible()

});
