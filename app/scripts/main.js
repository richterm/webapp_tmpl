requirejs.config({
	baseUrl: "scripts",
	paths: {
		"underscore": "../components/underscore/underscore",
      "backbone": "../components/backbone/backbone",
      "jquery": "../components/jquery/jquery",
      "require": "../components/requirejs/require",
      "tpl": "../components/requirejs-tpl/tpl",
      "router": "routers/Router"
	},
	shim: {
		"underscore": {
			deps: [],
			exports: "_"
		},
		"backbone": {
			deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		}
	}
});

define(["backbone", "router"], function(Backbone, Router){

	var router = new Router();
	Backbone.history.start();

});