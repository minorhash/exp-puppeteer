
//const key="next2"
const key=require ("./key")
const puppeteer = require('puppeteer');

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
  const page = await browser.newPage();
    const url='http://localhost:3000/page-'+key
await page.setViewport({ width: 1280, height: 800 })
  await page.goto(url);
  await page.screenshot({path: 'img/'+key+'.png',fullPage:true});

  await browser.close();
};

main();
