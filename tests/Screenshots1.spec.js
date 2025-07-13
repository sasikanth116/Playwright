const { test, expect } = require('@playwright/test');
// Importing Playwright's test and expect functions.
// 'test' is used to define individual test cases.
// 'expect' is not used in this case but is included for completeness.

test('Page screenshot', async ({ page }) => {
   // Defines a test named 'Page screenshot'

   await page.goto('https://www.demoblaze.com/');
   // Navigates to the Demoblaze homepage.

   await page.screenshot({ 
    path: 'tests/screenshots/Homepage_' + Date.now() + '.png' 
});

   // Takes a screenshot of the **visible portion of the page** and saves it to the specified path.
   // Uses Date.now() to generate a unique filename.
});

test('Full Page screenshot', async ({ page }) => {
   // Defines a test named 'Full Page screenshot'

   await page.goto('https://www.demoblaze.com/');
   // Navigates to the Demoblaze homepage.

   await page.screenshot({ 
      path: 'tests/screenshots/Fullpage_' + Date.now() + '.png', 
      fullPage: true 
   });
   // Takes a **screenshot of the entire page**, even the parts that are not visible without scrolling.
   // Saves it with a timestamped filename.
});

test('Element screenshot', async ({ page }) => {
   // Defines a test named 'Element screenshot'

   await page.goto('https://www.demoblaze.com/');
   // Navigates to the Demoblaze homepage.

   await page.locator("img[alt='First slide']").screenshot({ 
      path: 'tests/screenshots/FirstSlide_' + Date.now() + '.png'
   });
   // Selects the image element with alt text "First slide" (part of the carousel),
   // and takes a screenshot of **just that element**, saving it with a timestamped name.
});
