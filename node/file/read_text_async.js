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