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

const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

// const inp=await page.$$("input")
// console.log(inp.length)
    //console.log(inp)

// await page.waitForSelector("input[name=q]")
// await page.focus("input[name=q]")
// await page.type("input[name=q]",key.key)

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key.key+'.jpg',fullPage:true});

await browser.close();

};

main();

