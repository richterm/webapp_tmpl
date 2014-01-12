requirejs.config({
	baseUrl: "scripts",
	paths: {
		"backbone.marionette": "../bower_components/backbone.marionette/lib/core/backbone.marionette",
		"backbone.wreqr": "../bower_components/backbone.marionette/public/javascripts/backbone.wreqr",
		"backbone.babysitter": "../bower_components/backbone.marionette/public/javascripts/backbone.babysitter",
		"backbone.augment": "../bower_components/backbone.marionette/public/javascripts/backbone.augment",
		"backbone.chromestorage": "../bower_components/Backbone.ChromeStorage/backbone.chromestorage",
		"underscore": "../bower_components/underscore/underscore",
      "backbone": "../bower_components/backbone/backbone",
      "jquery": "../bower_components/jquery/jquery",
      "require": "../bower_components/requirejs/require",
      "tpl": "../bower_components/requirejs-tpl/tpl"
	},
	shim: {
		"underscore": {
			deps: [],
			exports: "_"
		},
		"backbone.marionette": {
			deps: [
				"backbone",
				"backbone.wreqr",
				"backbone.babysitter",
				"backbone.augment"
			],
			exports: "Marionette"
		},
		"backbone.babysitter": {
			deps: [
				"backbone"
			]
		},
		"backbone.augment": {
			deps: [
				"backbone"
			]
		},
		"backbone.wreqr": {
			deps: [
				"backbone"
			]
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

define(["App", "backbone"], function(App, Backbone){

	App.on("initialize:after", function(options) {
		Backbone.history.start();
	});

	App.start();

});