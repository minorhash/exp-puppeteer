const puppeteer = require('puppeteer');
const key=require ("../son/key.json")

console.log(key.key)

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
const url="https://pururin.io"

await page.setViewport({ width: 1280, height: 900})
await page.goto(url);
console.log(page.url())
console.log("goto")

const sid="#searchInput"
await page.waitForSelector(sid)
await page.focus(sid)
await page.type(sid,key.key)
const but="button[type=submit]"
//await page.waitForSelector(but)
await page.click(but)

await page.screenshot({type:"jpeg",quality:100,path: 'img/pur/'+key.key+'.jpg',fullPage:true});

await browser.close();

};

main();

