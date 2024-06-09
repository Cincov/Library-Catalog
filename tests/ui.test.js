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

test('Verify valid user can login', async ({page}) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
   
    //Navigate to login page
    const loginLink = await page.$('a[href="/login"]');
    await loginLink.click();

    //Fill the user data
    await page.fill('#email', "peter@abv.bg");
    await page.fill('#password', "123456");

    //Click on login button
    const loginBtn = await page.$('#login-form > fieldset > input');
    await loginBtn.click();

    //Verify the logout buttin is present
    const logoutnBtn =  await page.$('#logoutBtn');
    const contentText = await logoutnBtn.textContent();

    expect(contentText).toEqual("Logout");
});