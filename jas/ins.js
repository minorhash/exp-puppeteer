var db=require("songdb")
var arr=[]

for(var i=1;i<5;i++){
    arr[i]=require("../son/"+i+".json")
var len=[]
console.log("=====")
console.log(arr[i].length)

for(var j=0;j<arr[i].length/6;j++){
var num=j*6
console.log(num)
    db.insSong(arr[i][num],arr[i][num+1],arr[i][num+2],arr[i][num+3],arr[i][num+4],
        arr[i][num+5])
}
}
