const puppeteer = require('puppeteer');

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'img/1.png'});

  await browser.close();
};

main();
