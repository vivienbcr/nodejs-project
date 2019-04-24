module.exports = function(app) {
	const block = require('../controllers/blockController');
	const jwtMiddleware = require('../../middleware/jwtMiddleware');
	const btc = require('../controllers/btcController');

	app
		.route('/blocks')
		.all(jwtMiddleware.verify_token)
		.get(block.list_all_blocks)
		.post(block.create_a_block);

	app
		.route('/block/:blockId')
		.get(block.read_a_block)
		.put(block.update_a_block)
		.delete(block.delete_a_block);

	app.route('/btcstatus').get(btc.btc_last_block);
};
