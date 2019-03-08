
const key="nod"
//const key=require ("./key")
const puppeteer = require('puppeteer');

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
    //let url='http://localhost:3000/page-'+key
    const url="https://node.minbit.net"

await page.setViewport({ width: 1280, height: 800 })
await page.goto(url);

await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});

// let elm= await page.$('input[name=usr]');
// await elm.type("min")
    //
    //await page.type('input[name=IN_KEN_NAME1]', "とうきょうムービー");

// const cur= await page.$('input[name=RESULT_CURRENT_PAGE]');
// await cur.click();

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key+'.jpg',fullPage:true});

// var name= await page.$eval('input[name="IN KEN NAME1"]', el => el.value);
// console.log(name)
//let elm= await page.focus('input[name="IN_KEN_NAME1"]');
//    //await elm.type("とうきょうムービー")

await browser.close();

};

main();

