const puppeteer = require('puppeteer');
const key=require ("../son/key.json")

console.log(key.key)
const arr=require("./arr.json")

console.log(arr[0])
const dir =arr[0].slice(22)
console.log(dir)

async function main() {
const browser = await puppeteer.launch({args: ['--no-sandbox']} );
const page = await browser.newPage();
const url=arr[0]

await page.setViewport({ width: 1280, height: 900})

await page.goto(url, {waitUntil: 'networkidle2',timeout: 0});
console.log(page.url())
console.log("goto")

//// const gal= await page.$(".gallery")
//// const tx= await page.evaluate(gal=> gal.textContent, gal);
//// console.log(tx)
//const inp="input[name=q]"
//await page.waitForSelector(inp)
//await page.focus(inp)
//await page.type(inp,key.key)
//await page.click("button[type=submit]")
//console.log("cli")

    //await page.screenshot({type:"jpeg",quality:10,path: 'img/'+dir+'.jpg',fullPage:true});
//console.log("scr")

//await page.waitForSelector("a[href]")
//const ref = await page.evaluate(() => {
//const anchors = document.querySelectorAll('a');
//return [].map.call(anchors, a => a.href);
//});


////console.log(ref.valueOf())
//const sea=/search/
//let arr=[]

//for (var i=0;i<ref.length;i++){
//if(ref[i].search(sea)==-1){
//arr.push(ref[i])
//}
//}
////console.log(arr)
//const arr2=arr.slice(17)
//console.log("arr2")
//console.log(arr2)

//await page.screenshot({type:"jpeg",quality:10,path: 'img/'+key.key+'.jpg',fullPage:true});

//await browser.close();

};

main();
