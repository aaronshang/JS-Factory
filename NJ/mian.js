//main.js
'use strict'

var helloExports = require('./hello')
var hello = new helloExports.Hello();
hello.sayHello();
helloExports.Greet('Mike');