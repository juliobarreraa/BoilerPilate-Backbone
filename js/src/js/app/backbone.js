define(["cs!productsRouter"], function (productsRouter) {
	console.log("It works!!");

	new productsRouter.ProductsRouter();

	Backbone.history.start();
});