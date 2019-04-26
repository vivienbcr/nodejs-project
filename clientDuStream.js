var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
	console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
	console.log('WebSocket Client Connected');
	connection.on('error', function(error) {
		console.log('Connection Error: ' + error.toString());
	});
	connection.on('close', function() {
		console.log('test Connection Closed');
	});
	connection.on('message', function(message) {
		if (message.type === 'utf8') {
			console.log("Received: '" + message.utf8Data + "'");
		}
	});
	function sendAddress() {
		if (connection.connected) {
			/*var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
						setTimeout(sendNumber, 1000);*/
			let addressList = [
				'1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
				'188888888ikzoy8jmR2byT4WoQsycLxeUH',
				'12MtwshXcYiLt86yGLEsEibjY4TWB8BLKC',
				'3H98NVp6qjtKMN2xN4WiWmCHhDyoBd6TwE'
			];
			for (let i = 0; i < addressList.length; i++) {
				connection.sendUTF(addressList[i]);
			}
		}
	}
	sendAddress();
});

client.connect('ws://localhost:1984/', 'test');
