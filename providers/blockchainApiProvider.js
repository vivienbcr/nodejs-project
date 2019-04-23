const request = require('request');
const baseUrl = 'https://blockchain.info';

exports.getBlockInfo = function(hash) {
	return new Promise((resolve, reject) => {
		request(baseUrl + '/rawblock/' + hash, function(error, response, body) {
			try {
				console.log('toto');
				body = JSON.parse(body);
				var blockInfo = {
					size: body.size,
					prev_block: body.prev_block,
					next_block: body.next_block
				};
				resolve(blockInfo);
			} catch (error) {
				console.log(error);
				reject(false);
			}
		});
	});
};
