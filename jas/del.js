var db=require("songdb")
var arr=require("../htm/arr.js")


for(var i=10;i<50;i++){
var num=i*6
console.log(num)
db.insSong(arr[num],arr[num+1],arr[num+2],arr[num+3],arr[num+4],arr[num+5])

}

