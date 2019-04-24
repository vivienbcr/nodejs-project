module.exports = function(app) {
	const btc = require('../controllers/btcController');
	app.route('/lastBlock').get(btc.btc_last_block);
	app.route('/mempoolStatus').get(btc.btc_mempool_status);
};
