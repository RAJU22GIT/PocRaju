sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("demo.ladera.demopoc.controller.App", {
    onInit: function () {
  this.getOwnerComponent().getRouter()
    .attachRouteMatched(this.onRouteMatched, this);
     this.getOwnerComponent().getRouter()
    .attachRouteMatched(this.onRouteMatched1, this);
},

onRouteMatched: function (oEvent) {
  var sRouteName1 = oEvent.getParameter("name");
  var oToggleBtn1 = this.byId("page");

  if (sRouteName1 == "RouteLoginPage") {   // your route name for HomePage
    oToggleBtn1.setShowHeader(false);
  } else {
    oToggleBtn1.setShowHeader(true);
  }
},

onRouteMatched1: function (oEvent) {
  var sRouteName = oEvent.getParameter("name");
  var oToggleBtn = this.byId("sideNavToggleBtn");

  if (sRouteName === "Routehomeview") {   // your route name for HomePage
    oToggleBtn.setVisible(true);
  } else {
    oToggleBtn.setVisible(false);
  }
},

onToggleSideNav: function () {
  var oHomePage = this.getOwnerComponent().getRouter().getView("demo.ladera.demopoc.view.HomePage");
  var oSideNav = oHomePage.byId("sideNav");
  oSideNav.setExpanded(!oSideNav.getExpanded());
}

  });
});