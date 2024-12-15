// const calculateSum = require("./sum.js")//sum moduel run in app module;
// const obj = require("./sum.js");
// const {x,calculateSum} = require("./sum.js")
const {p} = require("./print.js")
console.log(p)
const {x,calculateSum,calculatemutiply} = require("./calculate/index.js")
var a = 3;
var b = 6;
console.log("calculate the sum of a,b");
calculateSum(a,b);
calculatemutiply(a,b);
console.log(x);
// ij.log(globalThis);