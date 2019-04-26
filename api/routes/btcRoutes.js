module.exports = function(app) {
	const btc = require("../controllers/btcController");
	app.route("/lastBlock").get(btc.btc_last_block);
	app.route("/lastTransactions").get(btc.btc_last_transactions);
	app.route("/unspend/:address").get(btc.btc_unspends_output);
};
