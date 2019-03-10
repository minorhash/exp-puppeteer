const puppeteer = require('puppeteer');
const key=require ("../son/key.json")

console.log(key.key)

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
const url="https://nhentai.net"
//const url="https://pururin.io"

await page.setViewport({ width: 1280, height: 900})

await page.goto(url, {waitUntil: 'networkidle2',timeout: 0});
console.log(page.url())
console.log("goto")

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key.key+'.jpg',fullPage:true});

await browser.close();

};

main();

