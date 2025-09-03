sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("demo.ladera.demopoc.controller.LoginPage", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel("model/loginData.json");
            this.getView().setModel(oModel);
        },

        onLogin: function () {
            var sEnteredUser = this.byId("username").getValue().trim();
            var sEnteredPass = this.byId("password").getValue().trim();

            var getData = this.getView().getModel().oData.login;
            for (var i = 0; i < getData.length; i++) {
                var sStoredUser = getData[i].username;
                var sStoredPass = getData[i].password;

                if (sEnteredUser === sStoredUser && sEnteredPass === sStoredPass) {
                    MessageToast.show("Login Successful!");
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("Routehomeview");
                    break;
                }

                else {
                    MessageBox.error("Invalid username or password");
                    break;
                }

            }
        }

    });
});