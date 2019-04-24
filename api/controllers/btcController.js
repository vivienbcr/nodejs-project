const blockchainApiProvider = require('../../providers/blockchainApiProvider');

exports.btc_last_block = function(req, res) {
	const promise = blockchainApiProvider.getLastBlock();
	promise.then(
		(response) => {
			res.status(200).json(response);
		},
		(error) => {
			res.status(500).json(error);
		}
	);
};
exports.btc_mempool_status = function(req, res) {
	const promise = blockchainApiProvider.getMemPoolStatus();
	promise.then(
		(response) => {
			console.log(response.txs.length);
			res.status(200).json(response);
		},
		(error) => {
			res.status(500).json(error);
		}
	);
};
