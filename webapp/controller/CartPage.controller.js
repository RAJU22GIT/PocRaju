sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (Controller, JSONModel,  MessageToast) {
  "use strict";

  return Controller.extend("demo.ladera.demopoc.controller.CartPage", {

    onInit: function () {
      this._setProductData("half");

      // cart model for holding items
      // var oCartModel = new JSONModel({ items: [] });
      // this.getView().setModel(oCartModel, "cartModel");

    },

                      /* ---------- Side navigation ---------- */
    onSideItemSelect: function (oEvent) {
      var Item = oEvent.getParameter("item");
      if (!Item)  { 
        return;
       }
      var sKey = Item.getKey();

      if (sKey === "__toggle") {
        var Side = this.byId("sideNav1");
        Side.setExpanded(!Side.getExpanded());
        return;
      }
      this._setProductData(sKey);
    },

                      /* ---------- set product data ---------- */
    _setProductData: function (sType) {
      var oData;
      if (sType === "printed") {
        oData = {
          name: "Printed T-Shirt",
          model: "PR-3001",
          size: "L",
          price: 799,
          quantity: 1,
          subtotal: 799,
          images: [
            { src: "img/printed6 (1).avif" },
            { src: "img/printed2.webp" }
          ]
        };
      } else if (sType === "five") {
        oData = {
          name: "5 Sleeve T-Shirt",
          model: "FS-500",
          size: "M",
          price: 699,
          quantity: 1,
          subtotal: 699,
          images: [
            { src: "img/five1.jpg" },
            { src: "img/five2.jpg" }
          ]
        };
      } else if (sType === "woman") {
        oData = {
          name: "Woman T-Shirt",
          model: "WM-200",
          size: "S",
          price: 599,
          quantity: 1,
          subtotal: 599,
          images: [
            { src: "img/woman 5 (1).jpg" },
            { src: "img/woman1.jpg" }
          ]
        };
      } else if (sType === "hoodie") {
        oData = {
          name: "Hoodie T-Shirt",
          model: "HD-800",
          size: "L",
          price: 1299,
          quantity: 1,
          subtotal: 1299,
          images: [
            { src: "img/hoodie 1.png" },
            { src: "img/hoodie 3.jpg" }
          ]
        };
      } else if (sType === "themed") {
        oData = {
          name: "Themed T-Shirt",
          model: "TH-900",
          size: "M",
          price: 899,
          quantity: 1,
          subtotal: 899,
          images: [
            { src: "img/themed1.jpg" },
            { src: "img/themed2.jpg" }
          ]
        };
      } else {
        oData = {
          name: "Half Hand T-Shirt",
          model: "HH-2025",
          size: "M",
          price: 499,
          quantity: 1,
          subtotal: 499,
          images: [
            { src: "img/three.png" },
            { src: "img/two.png" },
            { src: "img/tshirt4.jpg" }
          ]
        };
      }

      var Model = this.getView().getModel("productModel");
      if (!Model) {
        Model = new JSONModel(oData);
        this.getView().setModel(Model, "productModel");
      } else {
        Model.setData(oData);
      }
    },

                         /* ---------- quantity ---------- */
    onIncreaseQty: function () {
      var oModel = this.getView().getModel("productModel");
      var qty = oModel.getProperty("/quantity") + 1;
      oModel.setProperty("/quantity", qty);
      oModel.setProperty("/subtotal", qty * oModel.getProperty("/price"));
    },

    onDecreaseQty: function () {
      var oModel = this.getView().getModel("productModel");
      var qty = oModel.getProperty("/quantity");
      if (qty > 1) {
        qty--;
        oModel.setProperty("/quantity", qty);
        oModel.setProperty("/subtotal", qty * oModel.getProperty("/price"));
      }
    },

                       /* ---------- cart logic ---------- */

     onAddToCart: function () {
  var oProduct = this.getView().getModel("productModel").getData();

  // Use global cart model
  var oCartModel = this.getOwnerComponent().getModel("cartModel");
  var aItems = oCartModel.getProperty("/items");

  var bFound = false;
  for (var i = 0; i < aItems.length; i++) {
    if (aItems[i].name === oProduct.name) {
      aItems[i].quantity += oProduct.quantity;
      aItems[i].subtotal = aItems[i].quantity * oProduct.price;
      bFound = true;
      break;
    }
  }

  if (!bFound) {
    aItems.push({
      name: oProduct.name,
      model: oProduct.model,
      quantity: oProduct.quantity,
      price: oProduct.price,
      subtotal: oProduct.subtotal,
      image: oProduct.images[0].src
    });
  }

  // Update global cart
  oCartModel.setProperty("/items", aItems);
  sap.m.MessageToast.show("Product added to cart!");
},

onCartPress: function () {
  this.getOwnerComponent().getRouter().navTo("RouteCartPageDetailsview");
}


    // onAddToCart: function () {
    //   var oProduct = this.getView().getModel("productModel").getData();
    //   var oCartModel = this.getView().getModel("cartModel");
    //   var aItems = oCartModel.getProperty("/items");

    //   // push simple cart object
    //   aItems.push({
    //     name: oProduct.name,
    //     quantity: oProduct.quantity,
    //     subtotal: oProduct.subtotal,
    //     image: oProduct.images[0].src
    //   });
    //   oCartModel.setProperty("/items", aItems);

    //   MessageToast.show("Product added to cart!");
    // },


//     onAddToCart: function () {

//   // 1. Get the current selected product
//   var oProduct = this.getView().getModel("productModel").getData();

//   // 2. Get the cart model
//   var oCartModel = this.getView().getModel("cartModel");
//   var aItems = oCartModel.getProperty("/items");

//   // 3. Check if product already exists in the cart
//   var bFound = false;
//   for (var i = 0; i < aItems.length; i++) {
//     if (aItems[i].name === oProduct.name) {
//       // If product already in cart → just update qty & subtotal
//       aItems[i].quantity += oProduct.quantity;
//       aItems[i].subtotal = aItems[i].quantity * (oProduct.price || 0);
//       bFound = true;
//       break;
//     }
//   }

//   // 4. If not found, push new product into cart
//   if (!bFound) {
//     aItems.push({
//       name: oProduct.name,
//       quantity: oProduct.quantity,
//       subtotal: oProduct.subtotal,
//       image: oProduct.images[0].src
//     });
//   }

//   // 5. Update cart model so UI refreshes
//   oCartModel.setProperty("/items", aItems);

//    MessageToast.show("Product added to cart!");
//  },


//     onCartPress: function () {
//       this.byId("cartPanel").setVisible(true);
//     },

//     onCloseCart: function () {
//       this.byId("cartPanel").setVisible(false);
//     },


  });
});
