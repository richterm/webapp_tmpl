requirejs.config({
	baseUrl: "scripts",
	paths: {
		"backbone.marionette": "../components/backbone.marionette/lib/core/backbone.marionette",
		"backbone.wreqr": "../components/backbone.marionette/public/javascripts/backbone.wreqr",
		"backbone.babysitter": "../components/backbone.marionette/public/javascripts/backbone.babysitter",
		"backbone.augment": "../components/backbone.marionette/public/javascripts/backbone.augment",
		"underscore": "../components/underscore/underscore",
      "backbone": "../components/backbone/backbone",
      "jquery": "../components/jquery/jquery",
      "require": "../components/requirejs/require",
      "tpl": "../components/requirejs-tpl/tpl"
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

define(["backbone.marionette", "routers/App", "controllers/App", "layouts/App"], function(Marionette, AppRouter, AppController, AppLayout){

	var App = window.App = new Marionette.Application({});

	App.addInitializer(function(options) {
		App.appRouter = new AppRouter({
			controller: new AppController()
		});

		App.appLayout = new AppLayout({
			el: "#app"
		});

	});

	App.on("initialize:after", function(options) {
		Backbone.history.start();
	});

	App.start();

});