const {test, expect} = require("@playwright/test");
const appUrl = "http://localhost:3000";

test('Verify All Books link is visible', async ({page}) => {
    //Open the application
    await page.goto(appUrl);

    //Locate page toolbar
    await page.waitForSelector('nav.navbar');

    //get all books link
    const allBooksLink = await page.$('a[href="/catalog"]');

    //Check if element is visible
    const isElementVisible = await allBooksLink.isVisible();

    //Verify the element is visible
    expect(isElementVisible).toBe(true); 

});

test('Verify Login link is visible', async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const loginLink = await page.$('a[href="/login"]');
    const isElementVisible = await loginLink.isVisible();

    expect(isElementVisible).toBe(true); 
});

test('Verify Register link is visible', async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const registerLink = await page.$('a[href="/register"]');
    const isElementVisible = await registerLink.isVisible();

    expect(isElementVisible).toBe(true); 
});

test('Verify Register link is content "Register"', async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const registerLink = await page.$('a[href="/register"]');
    const contentText = await registerLink.textContent();

    expect(contentText).toEqual("Register"); 
});