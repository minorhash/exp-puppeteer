const img="mov"
const key=require ("../son/key")
const puppeteer = require('puppeteer');

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
    const url="http://www2.jasrac.or.jp/eJwid"

await page.setViewport({ width: 1280, height: 900})
await page.goto(url);
// console.log(page.url())
// console.log("goto")

const inp= await page.$('input[name=input]');
await inp.click();
// console.log("clicked!")

await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});
// console.log("waited for nav")
await page.waitFor(1500);
// console.log(page.url())

const frame=page.frames();
// console.log(frame.length)


const hint="東京ムービー企画部"
await frame[1].waitForSelector("input[name=IN_KEN_NAME1]")
await frame[1].focus("input[name=IN_KEN_NAME1]")
await frame[1].type("input[name=IN_KEN_NAME1]",hint)
await frame[1].click('input[name=CMD_SEARCH]');

//console.log("cli")

const url2="http://www2.jasrac.or.jp/eJwid/main.jsp?trxID=A00401-2"
const url3="http://www2.jasrac.or.jp/eJwid/main.jsp?trxID=A00401-3"
const pages=await browser.pages()
await pages[0].goto(url3);

const fra2=pages[0].frames();

 const fra3 = await page.frames().find(f => f.name() === 'frame3');

// const val=await fra3.evaluate(()=>{
// const arr=Array.from(document.querySelectorAll("td"))
// return arr.map(el => el.innerText);
// })

// console.dir(val, {'maxArrayLength': null} );
// const son1=JSON.stringify(val)
// const fs = require('fs');

// fs.writeFile('./son/1.json', son1, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

for (var i=2;i<5;i++){
const hand= await fra3.$x("//a[contains(text(), "+i+")]");

if (hand.length > 0) {
await hand[0].click();
} else {
throw new Error("Link not found");
}

await fra3.waitFor(2500);
const val=await fra3.evaluate(()=>{
const arr=Array.from(document.querySelectorAll("td"))
return arr.map(el => el.innerText);
})

console.dir(val, {'maxArrayLength': null} );
const son1=JSON.stringify(val)
const fs = require('fs');
fs.writeFile('./son/'+i+'.json', son1, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+img+'.jpg',fullPage:true});

await browser.close();

};

main();

