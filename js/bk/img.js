const puppeteer = require('puppeteer');
const key="img"
//const browser = await puppeteer.launch({args: ['--no-sandbox']} );
puppeteer.launch({args: ['--no-sandbox']}).then(
    async browser => {
  const page = await browser.newPage();

        //let url="https://node.minbit.net/type-bro"
        //let url="http://www2.jasrac.or.jp/eJwid"
let url="http://www2.jasrac.or.jp/eJwid"

// console.log("goto")
// await page.evaluate(() => {
//   fetch("/main.jsp?trxID=F00100", {
//     method: "POST",
//   });
// });

        await page.setRequestInterception(true);
page.on('request', request => {
  const overrides = {};
  if (request.url === url) {
    overrides.method = 'POST';
    overrides.postData = "/main.jsp?trxID=F00100";
  }
  request.continue(overrides);
});

await page.goto(url);
console.log("goto")
await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});
console.log("waited for nav")

// await page.waitFor(1500)
// console.log("wait for ")
// await page.waitForSelector('img')
// console.log("sel")

await page.screenshot({type:"jpeg",quality:100,path: 'img/'+key+'.jpg',fullPage:true});

  await browser.close();
});
