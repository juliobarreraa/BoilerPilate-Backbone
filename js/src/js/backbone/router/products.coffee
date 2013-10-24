define (require, module, exports) ->
	Backbone = require "backbone"

	class ProductsRouter extends Backbone.Router
		routes:
			"": "actionInit"
			"products/all": "actionShowAll"
		actionInit: ->
			console.log "Entro al controlador principal"
			tmpl = _.template jQuery("#tmpl-show-init").html()
			jQuery("#content-wrap").html tmpl()

		actionShowAll: ->
			console.log "Entro al controlador de productos"
			tmpl = _.template jQuery("#tmpl-show-return").html()
			jQuery("#content-wrap").html tmpl()

	module.exports =
		ProductsRouter: ProductsRouter