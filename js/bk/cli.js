const key="rev"
//const key=require ("./key")
const puppeteer = require('puppeteer');


async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
    //let url='http://localhost:3000/page-'+key
const url="http://www2.jasrac.or.jp/eJwid/main.jsp?trxID=A00401-2"

await page.setViewport({ width: 1280, height: 800 })
await page.goto(url);
await page.click()
await browser.close();

};

main();

