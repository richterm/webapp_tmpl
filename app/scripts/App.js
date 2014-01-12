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

	return App;

});