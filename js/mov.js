const key="mov"
const key2="inp"
//const key=require ("./key")
const puppeteer = require('puppeteer');

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
    const url="http://www2.jasrac.or.jp/eJwid"

await page.setViewport({ width: 1280, height: 900})
await page.goto(url);
console.log(page.url())
console.log("goto")

const inp= await page.$('input[name=input]');
await inp.click();
console.log("clicked!")

await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});
console.log("waited for nav")
await page.waitFor(1500);
console.log(page.url())

const frame=page.frames();
console.log(frame.length)

for(var i=0;i<frame.length;i++){
if(frame[i].name()==="frame2"){
console.log(frame[i].name())
}
}
console.log(frame[1].name())

const hint="東京ムービー企画部"
await frame[1].waitForSelector("input[name=IN_KEN_NAME1]")
await frame[1].focus("input[name=IN_KEN_NAME1]")
await frame[1].type("input[name=IN_KEN_NAME1]",hint)

await frame[1].click('input[name=CMD_SEARCH]');

console.log("cli")

const url2="http://www2.jasrac.or.jp/eJwid/main.jsp?trxID=A00401-2"
const url3="http://www2.jasrac.or.jp/eJwid/main.jsp?trxID=A00401-3"
const pages=await browser.pages()
console.log(pages.length)
console.log(pages[0].url())
await pages[0].goto(url3);
console.log(pages[0].url())
//console.log(pages[1].url())

const fra2=pages[0].frames();
console.log(fra2.length)

const fra3 = await page.frames().find(f => f.name() === 'frame3');
console.log(fra3.url())
const body=await fra3.$("body")

//const hrefs = await page.$$eval('a', a => a.href);

await fra3.waitFor("a")
 const eval=await fra3.evaluate(()=>{
 const tds=Array.from(document.querySelectorAll("table tr td"))
 return tds.map(td => td.innerHTML);
 })
console.log(eval)

//await fra3.click("a[href="+url3+"]");

// const dat = await fra3.$$eval('table tr td', tds => tds.map((td) => {
// return td.innerHTML;
// }));
// console.log(dat)


await page.screenshot({type:"jpeg",quality:100,path: 'img/'+"tyo"+'.jpg',fullPage:true});

await browser.close();

};

main();

