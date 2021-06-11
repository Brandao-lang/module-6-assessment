import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Add an X to top left', async () => {

    let button = await (await driver).findElement(By.id('cell-0'));
    await button.click();
    await driver.sleep(1000)
});

test('Add an X to top right', async () => {

    let button = await (await driver).findElement(By.id('cell-2'));
    await button.click();
    await driver.sleep(1000)
});

test('Add an X to bottom middle', async () => {

    let button = await (await driver).findElement(By.id('cell-7'));
    await button.click();
    await driver.sleep(1000)
});

