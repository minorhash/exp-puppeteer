const key="jwid"
const key2="inp"
//const key=require ("./key")
const puppeteer = require('puppeteer');

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
    const url="http://www2.jasrac.or.jp/eJwid"
    // const url="http://www2.jasrac.or.jp/eJwid/main.jsp?trxID=A00401-3"

await page.setViewport({ width: 1280, height: 800 })
await page.goto(url);
console.log(page.url())

const inputElement = await page.$('input[name=input]');
await inputElement.click();
console.log("cli")

await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});
console.log("waited for nav")
// await page.waitFor(1500);
await page.waitForSelector('img')
console.log("img")
    //await page.focus('input')


await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key+'.jpg',fullPage:true});

await browser.close();

};

main();

