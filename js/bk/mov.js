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

//const hrefs = await page.$$eval('a', a => a.href);

//await pages[0].waitFor("a")
// const eval=await pages[0].evaluate(()=>{
// const tds=Array.from(document.querySelectorAll("table tr td"))
// return tds.map(td => td.innerHTML);
// })

const page2='"main.jsp?trxID=A00401-3&amp;IN_WORKS_CD=&amp;IN_ISWC=&amp;IN_WORKS_TITLE_OPTION1=0&amp;IN_WORKS_TITLE_NAME1=&amp;IN_WORKS_TITLE_TYPE1=0&amp;IN_WORKS_TITLE_CONDITION=0&amp;IN_WORKS_TITLE_OPTION2=0&amp;IN_WORKS_TITLE_NAME2=&amp;IN_WORKS_TITLE_TYPE2=0&amp;IN_KEN_NAME_OPTION1=0&amp;IN_KEN_NAME1=%93%8C%8B%9E%83%80%81%5B%83%72%81%5B%8A%E9%89%E6%95%94&amp;IN_KEN_NAME_JOB1=0&amp;IN_KEN_NAME_CONDITION=0&amp;IN_KEN_NAME_OPTION2=0&amp;IN_KEN_NAME2=&amp;IN_KEN_NAME_JOB2=0&amp;IN_ARTIST_NAME_OPTION1=0&amp;IN_ARTIST_NAME1=&amp;IN_ARTIST_NAME_CONDITION=0&amp;IN_ARTIST_NAME_OPTION2=0&amp;IN_ARTIST_NAME2=&amp;IN_DEFAULT_SEARCH_WORKS_NAIGAI=0&amp;IN_DEFAULT_WORKS_KOUHO_MAX=20&amp;IN_DEFAULT_WORKS_KOUHO_SEQ=1&amp;RESULT_CURRENT_PAGE=2" name="AUTO_JUMP"'

const page3='"main.jsp?trxID=A00401-3&amp;IN_WORKS_CD=&amp;IN_ISWC=&amp;IN_WORKS_TITLE_OPTION1=0&amp;IN_WORKS_TITLE_NAME1=&amp;IN_WORKS_TITLE_TYPE1=0&amp;IN_WORKS_TITLE_CONDITION=0&amp;IN_WORKS_TITLE_OPTION2=0&amp;IN_WORKS_TITLE_NAME2=&amp;IN_WORKS_TITLE_TYPE2=0&amp;IN_KEN_NAME_OPTION1=0&amp;IN_KEN_NAME1=%93%8C%8B%9E%83%80%81%5B%83%72%81%5B%8A%E9%89%E6%95%94&amp;IN_KEN_NAME_JOB1=0&amp;IN_KEN_NAME_CONDITION=0&amp;IN_KEN_NAME_OPTION2=0&amp;IN_KEN_NAME2=&amp;IN_KEN_NAME_JOB2=0&amp;IN_ARTIST_NAME_OPTION1=0&amp;IN_ARTIST_NAME1=&amp;IN_ARTIST_NAME_CONDITION=0&amp;IN_ARTIST_NAME_OPTION2=0&amp;IN_ARTIST_NAME2=&amp;IN_DEFAULT_SEARCH_WORKS_NAIGAI=0&amp;IN_DEFAULT_WORKS_KOUHO_MAX=20&amp;IN_DEFAULT_WORKS_KOUHO_SEQ=1&amp;RESULT_CURRENT_PAGE=3" name="AUTO_JUMP"'


await page[0].click('a[href='+page2']');

// const dat = await pages[0].$$eval('table tr td', tds => tds.map((td) => {
// return td.innerHTML;
// }));

// console.log(dat)

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+"tyo"+'.jpg',fullPage:true});

await browser.close();

};

main();

