define(
	[
		"../tests/components/chai/chai",
		"../tests/test"
	],	function(chai){

		window.assert = chai.assert;
		window.should = chai.should;
		window.expect = chai.expect;
});