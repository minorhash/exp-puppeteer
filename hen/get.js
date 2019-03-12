var wget=require("node-wget")
var arr=require("./arr.json")
var dir =arr[0].slice(22)

console.log(dir)

const makeDir = require('make-dir');

(async () => {
    const path = await makeDir('img/'+dir);
    console.log(path);
})();

for (var i=0;i<20;i++){
    wget({url:arr[0]+"/g/"+i+".jpg",dest:"img/"+dir})

}
