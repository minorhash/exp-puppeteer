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

const url3="http://www2.jasrac.or.jp/eJwid/main.jsp?trxID=A00401-3"
const pages=await browser.pages()
console.log(pages.length)
console.log(pages[0].url())
await pages[0].goto(url3);
console.log(pages[0].url())

//await pages[0].waitForSelector("a")
//
//const hrefs = await page.$$eval('a', a => a.href);
const hrefs=await pages[0].evaluate(()=>{
    const anchors=document.querySelectorAll("a")
return [].map.call(anchors, a => a.href);
})
console.log(hrefs)

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key+'.jpg',fullPage:true});

await browser.close();

};

main();

