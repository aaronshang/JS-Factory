/*
    文件流，读写文本，异步方式。
    异步读取时，传入的回调函数有两个参数。
    若读取二进制文件，data返回一个Buffer对象。
 */

'use strict'

//read text

const fs = require('fs');
console.log('>>> Begin >>>');

fs.readFile('./file/read_text_async.js', 'utf-8',function(err, data){
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log('>>> End >>>');