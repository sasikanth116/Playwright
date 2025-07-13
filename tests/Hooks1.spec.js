const { test, expect } = require('@playwright/test');
// Importing Playwright's test and expect functions.
// 'test' is used to define test suites, setup/teardown hooks, and test cases.
// 'expect' is used to make assertions about elements or values.

let page;
// Declaring a global variable 'page' to store the browser page instance used in each test.

test.beforeEach(async ({ browser }) => {
    // Hook that runs before each test case.
    // It ensures every test starts with a fresh new browser page and a logged-in state.

    page = await browser.newPage();
    // Creates a new browser tab (page) using the provided browser instance.

    await page.goto('https://www.demoblaze.com/');
    // Navigates the browser to the Demoblaze homepage.

    await page.locator('#login2').click();
    // Clicks the "Log in" button, which opens the login modal dialog.

    await page.locator('#loginusername').fill('pavanol');
    // Finds the username input field and types the username 'pavanol'.

    await page.locator('#loginpassword').fill('test@123');
    // Finds the password input field and types the password 'test@123'.

    await page.locator("//button[normalize-space()='Log in']").click();
    // Clicks the "Log in" button inside the modal using XPath to match the text exactly.

    await page.waitForSelector('#logout2');
    // Waits until the "Log out" button appears, indicating a successful login.
});

test.afterEach(async () => {
    // Hook that runs after each test case.
    // It ensures the user is logged out after each test, keeping tests independent.

    await page.locator('#logout2').click();
    // Clicks the "Log out" button to end the session.
});

test('Homepage test', async () => {
    // Test case to verify the homepage product count.

    const products = await page.$$('.hrefch');
    // Selects all product title links on the homepage using the class selector 'hrefch'.
    // Returns an array of elements.

    expect(products.length).toBe(9);
    // Asserts that there are exactly 9 products displayed on the homepage.
});

test('Add product to cart', async () => {
    // Test case to verify adding a product to the cart.

    await page.locator("//a[normalize-space()='Samsung galaxy s7']").click();
    // Clicks on the product link labeled "Samsung galaxy s7" to open its detail page.

    page.once('dialog', async dialog => {
        // Registers a one-time event listener for the alert dialog that appears after clicking "Add to cart".

        expect(dialog.message()).toContain('Product added.');
        // Asserts that the dialog message contains the text 'Product added.', confirming the product was added to the cart.

        await dialog.accept();
        // Accepts (closes) the alert dialog by clicking "OK".
    });

    await page.locator("//a[normalize-space()='Add to cart']").click();
    // Clicks the "Add to cart" button to add the current product to the shopping cart.
});
