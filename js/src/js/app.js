backbone = backbone || {};
url = typeof backbone.baseUrlDeveloper === "undefined" ? "" : backbone.baseUrlDeveloper;

require.config({
	// Configuramos la url base partiendo de las
	// librerias del proyecto
	"baseUrl": (typeof url == "undefined" ? "js/lib" : url + "js/lib"),
	paths: {
		app: "../app",
		jquery: "jquery.min",
		cs: "cs",
		backbone: "backbone.min",
		backboneapp: "../app/backbone",
		underscore: "underscore.min",
		helper: "helper",
		bootstrap: "bootstrap.min"
	},
	"shim": {
		jquery: {
			exports: "jQuery"
		},
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		backboneapp: ["jquery"]
	}
});


requirejs(["backboneapp"]);