const blockchainApiProvider = require("../../providers/blockchainApiProvider");

exports.btc_last_block = function(req, res) {
	const promise = blockchainApiProvider.getLastBlock();
	promise.then(
		response => {
			res.status(200).json(response);
		},
		error => {
			res.status(500).json(error);
		}
	);
};
exports.btc_last_transactions = function(req, res) {
	const promise = blockchainApiProvider.lastTransactions();
	promise.then(
		response => {
			console.log(response.txs.length);
			res.status(200).json(response);
		},
		error => {
			res.status(500).json(error);
		}
	);
};
// return balance for given wallet
exports.btc_unspends_output = function(req, res) {
	const promise = blockchainApiProvider.unspendsOutput(req.params.address);
	promise.then(
		response => {
			//console.log(response.unspent_outputs.length);
			let balance = 0;
			for (let i = 0; i < response.unspent_outputs.length; i++) {
				balance += response.unspent_outputs[i].value;
			}
			balance = balance / 100000000;
			res.status(200).json(balance);
		},
		error => {
			res.status(404).json(error);
		}
	);
};
