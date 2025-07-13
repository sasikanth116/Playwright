// Importing the test and expect functions from Playwright Test library
const { test, expect } = require('@playwright/test');

// Defining a test case called "Home Page"
test('Home Page', async ({ page }) => {

    // Step 1: Navigate to the Demoblaze homepage
    await page.goto('https://www.demoblaze.com/');

    // Step 2: Get the title of the current page and store it in a variable
    const pageTitle = await page.title();

    // Step 3: Print the title to the console (for debugging/visibility)
    console.log('Page title is:', pageTitle);

    // Step 4: Assert that the page title is exactly 'STORE'
    await expect(page).toHaveTitle('STORE');

    // Step 5: Get the current page URL
    const pageURL = page.url();

    // Step 6: Print the URL to the console
    console.log('Page URL is:', pageURL);

    // Step 7: Assert that the current URL is exactly 'https://www.demoblaze.com/'
    await expect(page).toHaveURL('https://www.demoblaze.com/');

    // Step 8: Close the browser page after the test is complete
    await page.close();
});
