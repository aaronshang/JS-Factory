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

console.log('Static root dir:' + root);