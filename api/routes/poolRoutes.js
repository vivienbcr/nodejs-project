module.exports = function(app) {
	const pool = require("../controllers/poolController");
	app.route("/init-pools").get(pool.init_pool_list);
};
