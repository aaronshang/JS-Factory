//一个js文件，是一个模块
'use strict'

function Hello() {
	console.log('hello world');
	
	this.sayHello = function(){
		 console.log('say hello');
		};
};


function Greet(name){
	var s = 'hello:'+arguments[0];
	console.log(s);
}

module.exports.Hello  = Hello;
module.exports.Greet = Greet;