/*
    Array类型，可以包括任意类型，通过索引来访问元素
    Map\Set也支持
*/

'use strict'

var arr = [1, 3, "Hello", true];
arr.push('hello');

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}


var m = new Map([["Mike",90], ["Tracy", 30]]);
console.log(m.get("Mike"));