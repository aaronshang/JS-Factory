
//ͬ�����ļ�
var fs = require('fs');
//var data = fs.readFileSync('main.js');
//console.log(data.toString());
//console.log('over.');

//�첽���ļ�
fs.readFile('main.js', function (err, data){
	if (err) {
		return console.error(err);
	}	
//	console.log(data.toString());
});


//����eventsģ��
var events = require('events');
var eventEmitter = new events.EventEmitter();

//�����¼��������
var connectHandler = function connected () {
	console.log("connect success.");
	eventEmitter.emit('data_received');
}

var sendDataHandler = function senddata () {
	console.log('send data');
}

//���¼��������
eventEmitter.on('connection', connectHandler);

//ʹ������������data_received�¼�
eventEmitter.on('data_received', function(){
	console.log('data receive success.')

	eventEmitter.emit('senddata')
	});
	
eventEmitter.addListener('senddata', sendDataHandler);

//����connection�¼�
eventEmitter.emit('connection');

