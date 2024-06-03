const {test, expect} = require("@playwright/test");


test('Verify All Books link is visible', async ({page}) => {
    //Open the application
    await page.goto("http://localhost:3000");

    //Locate page toolbar
    await page.waitForSelector('nav.navbar');

    //get all books link
    const allBooksLink = await page.$('a[href="/catalog"]');

    //Check if element is visible
    const isElementVisible = await allBooksLink.isVisible();

    //Verify the element is visible
    expect(isElementVisible).toBe(true); 

});