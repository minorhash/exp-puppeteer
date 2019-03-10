const puppeteer = require("puppeteer"); //・・・１
puppeteer.launch().then(async browser => {　//・・・２
const page = await browser.newPage(); //・・・3
await page.goto('https://www.google.com'); //・・・4
await page.screenshot({path: '1.png'});

    // some actions...

    browser.close();
});

