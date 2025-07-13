const { test, expect } = require('@playwright/test');
// Import Playwright's 'test' and 'expect' functions.

test('Upload Files', async ({ page }) => {
    // Defines a test named 'Upload Files' using an asynchronous function.
    // The 'page' object represents the browser tab.

    await page.goto('https://testautomationpractice.blogspot.com/');
    // Navigates to the target web page for single file upload testing.

    await page.waitForSelector('#singleFileInput');
    // Waits until the input element for file upload with ID 'singleFileInput' is available in the DOM.

    await page.locator('#singleFileInput').setInputFiles('tests/Upload Files/testfile1.jpeg');
    // Uploads a single file (testfile1.jpeg) by setting it directly to the file input field.

    await page.click("//button[text()='Upload Single File']");
    // Clicks the upload button using an XPath selector matching button text.
});

test('Upload Multiple Files', async ({ page }) => {
    // Defines a second test named 'Upload Multiple Files'.

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    // Opens a demo page that supports uploading multiple files.

    await page.waitForSelector('#filesToUpload');
    // Waits for the file input element with ID 'filesToUpload' to be present.

    await page.locator('#filesToUpload').setInputFiles([
        'tests/Upload Files/testfile1.jpeg',
        'tests/Upload Files/testfile2.jpeg'
    ]);
    // Sets multiple files to the file input field for upload.

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.jpeg');
    // Asserts that the first uploaded file listed is 'testfile1.jpeg'.

    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.jpeg');
    // Asserts that the second uploaded file listed is 'testfile2.jpeg'.

    // Remove files
    await page.locator('#filesToUpload').setInputFiles([]);
    // Clears the selected files from the input by setting an empty array.

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
    // Verifies that the file list now shows 'No Files Selected', indicating all files were removed.
});
