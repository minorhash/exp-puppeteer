const puppeteer = require('puppeteer');
const screenshot = 'twitter.png';
require('dotenv').load();

// process.env.TWITTER_USER="minorhash"
// process.env.TWITTER_PWD="hash2010"

(async () => {
const browser = await puppeteer.launch({args: ['--no-sandbox',"headless:false"]} );
  //const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://twitter.com/')
  await page.waitForSelector('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input')
  await page.type('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input', 'tim_nolet')

  await page.type('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-password > .text-input', 'spWF9G5%')
  await page.click('.StaticLoggedOutHomePage-content > .StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .EdgeButton')
  await navigationPromise

  await page.waitForSelector('#timeline')
  await page.screenshot({ path: "img/twi.png"})
  await browser.close()
})()
