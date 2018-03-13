/**
 * Node.js开发的目的就是为了使用JavaScript编写Web服务程序。
 * 自带http模块，利用其提供的request和response对象。
 * request对象，封装了http请求
 * response对象，封装了http响应
 * 第一个HTTP服务器程序！
 */


'use strict'

var http = require('http');

//创建http server
var server = http.createServer(function(request, response){
    console.log(request.method+':'+request.url);
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Hello World!</h1>');
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080');