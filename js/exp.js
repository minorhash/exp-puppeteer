const puppeteer = require("puppeteer");

puppeteer.launch({args: ['--no-sandbox']} ).then(async browser => {

    //puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.goto("https://www.expedia.co.jp",{waitUntil:"networkidle2"});
    await page.focus("input#hotel-destination-hp-hotel-search_name");
    await page.type('ソウル');
    await page.click('button[type="submit"]');
    await page.waitForNavigation({waitUntil:"networkidle2"});

    const hotelNames = await page.evaluate(() => {
        const node = document.querySelectorAll("h3.visuallyhidden");
        const array = [];
        for(item of node){
            array.push(item.innerText);
        }
        return array;
    });

    console.log(hotelNames);
    browser.close();
});
