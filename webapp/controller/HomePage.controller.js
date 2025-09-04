sap.ui.define([
  "sap/ui/core/mvc/Controller",
  'sap/ui/core/Fragment'
], (BaseController) => {
  "use strict";

  return BaseController.extend("demo.ladera.demopoc.controller.HomePage", {
      onInit() {

      },

      // onExpand(){
      //   var sideNav = this.byId("sideNav");
      //   var bExpanded = sideNav.getExpanded();

      //     sideNav.setExpanded(!bExpanded);
      // },

    onCreate: function() {
    var Route = sap.ui.core.UIComponent.getRouterFor(this);
    Route.navTo("RouteCreateview");
},


    onCatalog: function() {
      var oRouting = sap.ui.core.UIComponent.getRouterFor(this);
      oRouting.navTo("RouteCatalogview");
    }





  });
});