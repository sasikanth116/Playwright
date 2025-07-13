const { test, expect } = require('@playwright/test');
// Importing Playwright's test runner and assertion library.
// 'test' is used to define tests and lifecycle hooks.
// 'expect' is used for making assertions in tests (not used here but included for completeness).

// Global hook: runs once before all tests
test.beforeAll(async () => {
    console.log('this is beforeAll test....');
    // Logs a message before any test in the suite starts.
});

// Global hook: runs once after all tests are finished
test.afterAll(async () => {
    console.log('this is afterAll test....');
    // Logs a message after all tests in the suite have finished.
});

// Hook: runs before each individual test
test.beforeEach(async () => {
    console.log('this is beforeEach test....');
    // Logs a message before each test starts, useful for setup tasks.
});

// Hook: runs after each individual test
test.afterEach(async () => {
    console.log('this is afterEach test....');
    // Logs a message after each test ends, useful for cleanup tasks.
});

// Group1: A test group defined using 'test.describe'
test.describe('Group1', () => {

    test('Test1', async () => {
        console.log('this is test1....');
        // A simple test case that logs a message.
    });

    test('Test2', async () => {
        console.log('this is test2....');
        // Another test case that logs a message.
    });

    // Both tests here will trigger beforeEach/afterEach hooks.
});

// Group2: Another test group
test.describe('Group2', () => {

    test('Test3', async () => {
        console.log('this is test3....');
        // Test3 logs a message to indicate it ran.
    });

    test('Test4', async () => {
        console.log('this is test4....');
        // Test4 logs a message to indicate it ran.
    });

    // These will also trigger beforeEach/afterEach hooks.
});

// Group3: This group is skipped using test.describe.skip
test.describe.skip('Group3', () => {

    test('Test5', async () => {
        console.log('this is test5....');
        // Skipped test — this code will NOT execute.
    });

    test('Test6', async () => {
        console.log('this is test6....');
        // Skipped test — this code will NOT execute.
    });

    // Entire group is skipped and won't appear in test results unless skip is removed.
});

// Group4: Another skipped group
test.describe.skip('Group4', () => {

    test('Test7', async () => {
        console.log('this is test7....');
        // Skipped test — this code will NOT execute.
    });

    test('Test8', async () => {
        console.log('this is test8....');
        // Skipped test — this code will NOT execute.
    });

    // Like Group3, this will not run or log anything.
});
