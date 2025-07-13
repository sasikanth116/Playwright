const { test, expect } = require('@playwright/test');
// Importing Playwright's test and expect utilities.
// 'test' is used to define test cases and hooks, and 'expect' is used for assertions.

let page;
// Declaring a global variable 'page' to hold the browser page instance shared across tests.

test.beforeAll(async ({ browser }) => {
    // This hook runs once before all tests in the file.

    page = await browser.newPage();
    // Launches a new browser page (tab) and assigns it to the global 'page' variable.

    await page.goto('https://www.demoblaze.com/');
    // Navigates to the homepage of the Demoblaze demo website.

    await page.locator('#login2').click();
    // Clicks the 'Log in' button to open the login modal.

    await page.locator('#loginusername').fill('pavanol');
    // Fills the username input field with 'pavanol'.

    await page.locator('#loginpassword').fill('test@123');
    // Fills the password input field with 'test@123'.

    await page.locator("//button[normalize-space()='Log in']").click();
    // Clicks the 'Log in' button in the modal using an XPath selector that matches the visible text.

    await page.waitForSelector('#logout2');
    // Waits until the 'Log out' button is visible to ensure login was successful.
});

test.afterAll(async () => {
    // This hook runs once after all tests are finished.

    await page.locator('#logout2').click();
    // Clicks the 'Log out' button to end the session.
});

test('Homepage test', async () => {
    // First test: Verify the homepage displays the correct number of products.

    const products = await page.$$('.hrefch');
    // Selects all product title links (elements with class 'hrefch') and stores them in an array.

    expect(products.length).toBe(9);
    // Asserts that there are exactly 9 products displayed on the homepage.
});

test('Add product to cart', async () => {
    // Second test: Add a specific product to the shopping cart.

    await page.locator("//a[normalize-space()='Samsung galaxy s7']").click();
    // Clicks on the product link for 'Samsung galaxy s7' using XPath.

    page.once('dialog', async dialog => {
        // Sets up an event listener for the browser alert dialog triggered by the add-to-cart action.
        // This listener will handle the dialog the first time it appears.

        expect(dialog.message()).toContain('Product added.');
        // Asserts that the dialog message contains the expected success text.

        await dialog.accept();
        // Closes the dialog by clicking 'OK' on the alert.
    });

    await page.locator("//a[normalize-space()='Add to cart']").click();
    // Clicks the 'Add to cart' link to add the selected product to the cart.
});
