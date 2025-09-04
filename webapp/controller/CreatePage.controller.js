sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("demo.ladera.demo poc.controller.CreatePage", {
      onInit() {
 var Model = new sap.ui.model.json.JSONModel({
        items: []
    });
    this.getView().setModel(Model, "itemsModel");

      },

      onAddItem: function () {
    var Model = this.getView().getModel("itemsModel");
    var aItems = Model.getProperty("/items");

    // Push a blank row (default values)
    aItems.push({
        material: "",
        quantity: 0,
        stockStatus: "",
        eta: "",
        msrp: ""
    });

    Model.setProperty("/items", aItems); // Update the model
},

// onEnableUnitPriceChange: function (oEvent) {
//     var bState = oEvent.getParameter("state"); 
//     var oVBox4 = this.byId("vbox4Extra");

//     if (bState) {
//         oVBox4.setVisible(true);   
//     } else {
//         oVBox4.setVisible(false); 
//     }
// },

onRadioSelect: function(oEvent) {
    var selectedIndex = oEvent.getSource().getSelectedIndex();
    var uploadBox = this.byId("uploadBox");

    if (selectedIndex === 1) { 
        uploadBox.setVisible(true);
    } else {
        uploadBox.setVisible(false);
    }
}



  });
  

});