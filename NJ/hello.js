
//ģ���ʹ��
function Hello() {
	console.log('hello world');
	
	this.sayHello = function(){
		 console.log('say hello');
		};
};

module.exports  = Hello;