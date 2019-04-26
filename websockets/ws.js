var WebSocketServer = require('websocket').server;
var http = require('http');
const blockchainApiProvider = require('./../providers/blockchainApiProvider');

var server = http.createServer(function(request, response) {
	console.log(new Date() + ' Received request for ' + request.url);
	response.writeHead(404);
	response.end();
});

server.listen(1984, function() {
	console.log(new Date() + ' Server is listening on port 1984');
});

wsServer = new WebSocketServer({
	httpServer: server,
	autoAcceptConnections: false
});

wsServer.on('request', function(request) {
	var connection = request.accept('test', request.origin);
	console.log(new Date() + ' Connection accepted.');
	connection.on('message', function(message) {
		console.log(message);
		if (message.type === 'utf8') {
			console.log('Received Message: ' + message.utf8Data);
			// get balance
			const promise = blockchainApiProvider.unspendsOutput(message.utf8Data);
			promise.then(
				(response) => {
					let balance = 0;
					for (let i = 0; i < response.unspent_outputs.length; i++) {
						balance += response.unspent_outputs[i].value;
					}
					balance = balance / 100000000;
					connection.sendUTF(balance);
				},
				(error) => {
					let errMsg = 'error';
					connection.sendUTF(errMsg);
				}
			);
			//connection.sendUTF(message.utf8Data);
		} else if (message.type === 'binary') {
			console.log(
				'Received Binary Message of ' + message.binaryData.length + ' bytes'
			);
			connection.sendBytes(message.binaryData);
		}
	});
	connection.on('close', function(reasonCode, description) {
		console.log(
			new Date() + ' Peer ' + connection.remoteAddress + ' disconnected.'
		);
	});
});
