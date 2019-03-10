const puppeteer = require('puppeteer');
const key=require ("../son/key.json")

console.log(key.key)

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
const url="https://nhentai.net"

await page.setViewport({ width: 1280, height: 900})
await page.goto(url);
console.log(page.url())
console.log("goto")

const aHandle = await page.evaluateHandle(() => {
const element = document.getElementsByTagName('title');
    console.log(element);
    return element;
});
//console.log(aHandle)

const result = await page.evaluate(e => e[0].innerHTML, aHandle);
console.log(result);

// const gal= await page.$(".gallery")
// const tx= await page.evaluate(gal=> gal.textContent, gal);
// console.log(tx)

// await page.waitForSelector("input[name=q]")
// await page.focus("input[name=q]")
// await page.type("input[name=q]",key.key)

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key.key+'.jpg',fullPage:true});

await browser.close();

};

main();

