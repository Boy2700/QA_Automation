const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://91web.github.io/Login-Page/');
        await driver.findElement(By.id('username')).sendKeys('boy@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('12345');
        await driver.findElement(By.id('loginButton')).click();

        // Example assertion
        let url = await driver.getCurrentUrl();
        if (url.includes('/dashboard')) {
            console.log('Login successful');
        } else {
            let errorMessage = await driver.findElement(By.id('errorMessage')).getText();
            console.log('Login failed:', errorMessage);
        }
    } finally {
        await driver.quit();
    }
})();