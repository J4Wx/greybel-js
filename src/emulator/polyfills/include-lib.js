const typer = require('../../cps-evaluator/typer');

module.exports = function(shell) {
	const api = {};

	api.include_lib = function(str) {
		console.error('include_lib not yet supported.');
		return null;
	};

	return api;
};