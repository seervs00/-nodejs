const fs=require('fs');
const https=require('https');
const crypto=require("crypto");
//above require method will run in 
//synchronous fashion in commonJs

// readFileSync is blocking the main thread
// fs.readFileSync('./file.txt','utf-8',(err,data)=>{
//     console.log("File data fetched synchronously: ", data);
// })

//just below console will execute after file read
console.log("Hello! Async");
var a=1078698;
var b=20986;

//password based key derivative function v8 deligates this task
//to libuv also con asynchronous in nature
// synchronous function
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512",);
console.log("first key is generated");

// asynchronous function
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log(" second Key is generated: ");
    // console.log("Key in hex format: ", key.toString('hex'));
    // console.log("Key in base64 format: ", key.toString('base64'));
})


https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched data successfully!");
});

setTimeout(()=>{
    console.log("settimeout called after 5 sec")
},5000);

fs.readFile('./file.txt','utf-8',(err,data)=>{
    console.log("File data is: ",data);
})

function mulFn(x,y){
    const result=x*y;
    return result;
}

var c=mulFn(a,b);
console.log("multiplication result is: ",c);