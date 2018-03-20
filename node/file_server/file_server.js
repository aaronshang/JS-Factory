/**
 * 创建一个文件服务器
 * 
 * 解析request.url中的路径，在本地找到对应的文件，发送出去
 * 
 */

 'use strict'

 var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

//从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');
root = path.join(root, 'file_server');
console.log('Static root dir:' + root);

//创建服务器
var server = http.createServer(function(request, response){

    //获取URL的path，类似"/css/bootstrap.css
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    //获取对应的本地文件路径, "/srv/css/bootstrap.css"
    var filepath = path.join(root, pathname);
    console.log(filepath);
    //获取文件状态
    fs.stat(filepath, function(err, stats){
        if (!err && stats.isFile) {
            
            //文件存在
            console.log('200'+request.url);
            response.writeHead(200);
            //将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        } else {
            response.writeHead(404);
            response.end('Not Not Found');
        }
    });

});

server.listen(8080);