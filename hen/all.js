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

// const gal= await page.$(".gallery")
// const tx= await page.evaluate(gal=> gal.textContent, gal);
// console.log(tx)

await page.waitForSelector("input[name=q]")
await page.focus("input[name=q]")
await page.type("input[name=q]",key.key)
await page.click("button[type=submit]")
console.log("cli")

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+"hen"+'.jpg',fullPage:true});

const ref = await page.evaluate(() => {
const anchors = document.querySelectorAll('a');
return [].map.call(anchors, a => a.href);
});


console.log(ref.length)

// await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key.key+'.jpg',fullPage:true});
// console.log(page.url())

await browser.close();

};

main();

