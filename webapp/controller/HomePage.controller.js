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
    var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
    oRoute.navTo("RouteCreateview");
},

  // onSignOut: function() {
  // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  // oRouter.navTo("RouteLoginPage");
      
  //   },

    onCatalog: function() {
      var oRouting = sap.ui.core.UIComponent.getRouterFor(this);
      oRouting.navTo("RouteCatalogview");
    }





  });
});