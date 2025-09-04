sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("demo.ladera.demopoc.controller.CartDetailsPage", {

    onInit: function () {
      // nothing special, cartModel is already global
    },

    // delete item from cart
    // onDeleteFromCart: function (oEvent) {
    //   var oCartModel = this.getOwnerComponent().getModel("cartModel");
    //   var aItems = oCartModel.getProperty("/items");

    //   var oItem = oEvent.getParameter("listItem");
    //   var iIndex = this.byId("cartList").indexOfItem(oItem);

    //   aItems.splice(iIndex, 1);

    //   oCartModel.setProperty("/items", aItems);
    //   oCartModel.setProperty("/count", aItems.length);
    // }

  });
});
