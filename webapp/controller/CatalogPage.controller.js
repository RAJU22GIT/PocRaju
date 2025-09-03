sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], (BaseController) => {
  "use strict";

  return BaseController.extend("demo.ladera.demopoc.controller.CatalogPage", {
      onInit() {
      },
      
      pressOnTileOne(){

    var orout = sap.ui.core.UIComponent.getRouterFor(this);
    orout.navTo("RouteCartview");

  }
  });
});