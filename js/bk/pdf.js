
const key="rev"
//const key=require ("./key")
const puppeteer = require('puppeteer');


async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
let url='http://localhost:3000/page-'+key

await page.setViewport({ width: 1280, height: 800 })
await page.goto(url);
await page.pdf({path: 'img/'+key+'.pdf',printBackground:true,fullPage:true});
await browser.close();

};

main();

