
//同步读文件
var fs = require('fs');
//var data = fs.readFileSync('main.js');
//console.log(data.toString());
//console.log('over.');

//异步读文件
fs.readFile('main.js', function (err, data){
	if (err) {
		return console.error(err);
	}	
//	console.log(data.toString());
});


//引入events模块
var events = require('events');
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected () {
	console.log("connect success.");
	eventEmitter.emit('data_received');
}

var sendDataHandler = function senddata () {
	console.log('send data');
}

//绑定事件处理程序
eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received', function(){
	console.log('data receive success.')

	eventEmitter.emit('senddata')
	});
	
eventEmitter.addListener('senddata', sendDataHandler);

//触发connection事件
eventEmitter.emit('connection');

