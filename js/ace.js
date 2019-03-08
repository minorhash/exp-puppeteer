const key="ace"
const key2="inp"
//const key=require ("./key")
const puppeteer = require('puppeteer');

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
    //const url="https://www.ascap.com/repertory"
    //const url="http://www2.jasrac.or.jp/eJwid"
    const url="http://www2.jasrac.or.jp/eJwid/main.jsp?trxID=A00401-2"

await page.setViewport({ width: 1280, height: 800 })
await page.goto(url);
console.log(page.url())

const scr= await page.evaluate(() => {
    const dls= [];
    const nls= document.querySelectorAll("input[id=search-input]");
return nls

});
console.log(scr[0])
const arr=Object.entries(scr[0])
console.log(arr[0][1].events.click[0])


// let itemSelector="some selecter > ul > li:nth-child(1) > a";
//   let listSelector="some selecter > ul > li > a";
// var data = await page.evaluate((selector) => {
//     return document.querySelector(selector).textContent;
//   }, itemSelector);
// console.log(data)

// const inputElement = await page.$('input[name=input]');
// await inputElement.click();
// console.log("cli")

// await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});
// console.log("waited for nav")
await page.waitFor(1500);
await page.$$("input")
console.log("input")


await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key+'.jpg',fullPage:true});

await browser.close();

};

main();

