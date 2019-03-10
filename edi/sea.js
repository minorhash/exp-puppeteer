const puppeteer = require('puppeteer');
const key=require ("../son/key.json")

console.log(key.key)
const url="https://www.ediblewildfood.com/"
//const url="https://google.com/"

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();

await page.setViewport({ width: 1280, height: 900})
await page.goto(url, {waitUntil: 'networkidle2',timeout: 3000000});
console.log("goto")
console.log(page.url())
console.log("url")

// const inp="input[name=s1]"

// await page.waitForSelector(inp)
// await page.focus(inp)
//await page.type(inp)

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+"goo"+'.jpg',fullPage:true});

await browser.close();

};

main();

