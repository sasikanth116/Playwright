const { test, expect } = require('@playwright/test');
// Importing the 'test' and 'expect' functions from Playwright's test module.
// 'test' is used to define a test case, and 'expect' is used for assertions (though it's not used in this particular test).

test('Keyboard Actions', async ({ page }) => {
    // Defines an asynchronous test case named 'Keyboard Actions'.
    // The 'page' object represents a browser tab where actions like navigation and interaction are performed.

    await page.goto('https://gotranscript.com/text-compare');
    // Navigates the browser page to the GoTranscript text comparison tool.

    await page.type("[name='text1']", "Hello Playwright");
    // Finds the first text input area with the name attribute 'text1' and types "Hello Playwright" into it.

    await page.keyboard.press('Meta+A');
    // Simulates pressing 'Command+A' (on macOS) or 'Ctrl+A' (on Windows/Linux) to select all text in the first input box.
    // 'Meta' corresponds to the Command key on macOS or the Windows key on Windows.

    await page.keyboard.press('Meta+C');
    // Simulates pressing 'Command+C' (or 'Ctrl+C') to copy the selected text to the clipboard.

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    // Simulates pressing the 'Tab' key to move focus from the first input box to the second input box.
    // The 'down' and 'up' simulate the press and release actions of the Tab key.

    await page.keyboard.press('Meta+V');
    // Simulates pressing 'Command+V' (or 'Ctrl+V') to paste the copied text into the second input box.
});
