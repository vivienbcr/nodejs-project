const blockchainApiProvider = require("../../providers/blockchainApiProvider");
Pool = require("../models/poolModels");

//enregistre la liste des pools depuis Blockchain.info et leurs blocs minés dans mongoDB
exports.init_pool_list = function(req, res) {
	const promise = blockchainApiProvider.getPools();
	promise.then(
		response => {
			Object.keys(response).forEach(function(key, i) {
				let new_pool = new Pool({
					name: key,
					minedBlock: response[key]
				});
				new_pool.save(function(err, pool) {
					if (err) res.send(err);
				});
			});
			res.status(201).json(response);
		},
		error => {
			res.status(500).json(error);
		}
	);
};
