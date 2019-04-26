const request = require('request');
const baseUrl = 'https://blockchain.info';

exports.getBlockInfo = function(hash) {
	return new Promise((resolve, reject) => {
		request(baseUrl + '/rawblock/' + hash, function(error, response, body) {
			try {
				body = JSON.parse(body);
				var blockInfo = {
					size: body.size,
					prev_block: body.prev_block,
					next_block: body.next_block
				};
				resolve(blockInfo);
			} catch (error) {
				console.log('Blockchain API Provider error : ' + error);
				reject(false);
			}
		});
	});
};

exports.getLastBlock = function() {
	return new Promise((resolve, reject) => {
		request(baseUrl + '/latestblock', function(error, response, body) {
			try {
				body = JSON.parse(body);
				console.log(body);
				resolve(body);
			} catch (error) {
				reject(false);
			}
		});
	});
};

exports.lastTransactions = function() {
	return new Promise((resolve, reject) => {
		request(baseUrl + '/unconfirmed-transactions?format=json', function(
			error,
			response,
			body
		) {
			try {
				body = JSON.parse(body);
				resolve(body);
			} catch (error) {
				reject(false);
			}
		});
	});
};

exports.unspendsOutput = function(address) {
	return new Promise((resolve, reject) => {
		request(baseUrl + '/unspent?active=' + address, function(
			error,
			response,
			body
		) {
			try {
				body = JSON.parse(body);
				resolve(body);
			} catch (error) {
				reject(false);
			}
		});
	});
};
