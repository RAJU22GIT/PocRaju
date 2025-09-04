sap.ui.define([
    "sap/ui/core/UIComponent",
    "demo/ladera/demopoc/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("demo.ladera.demopoc.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

             // Global cart model (accessible everywhere)
                  var oCartModel = new sap.ui.model.json.JSONModel({
                  items: [],
                  count: 0
                            });
                  this.setModel(oCartModel, "cartModel");
                     }

    });
});