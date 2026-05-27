sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/viz/ui5/controls/Popover"
], function (
    Controller,
    JSONModel,
    Filter,
    FilterOperator,
    Popover
) {
    "use strict";

    return Controller.extend("com.analyticalreport.controller.chartview", {

        onInit: function () {

            var oData = {

                SalesData: [

                    {
                        Month: "January",
                        Sales: 5000,
                        Profit: 1200
                    },

                    {
                        Month: "February",
                        Sales: 7000,
                        Profit: 1500
                    },

                    {
                        Month: "March",
                        Sales: 9000,
                        Profit: 2200
                    },

                    {
                        Month: "April",
                        Sales: 6000,
                        Profit: 1800
                    }

                ],

                DepartmentData: [

                    {
                        Department: "SAP",
                        Count: 15
                    },

                    {
                        Department: "ABAP",
                        Count: 10
                    },

                    {
                        Department: "UI5",
                        Count: 20
                    }

                ]

            };

            var oModel = new JSONModel(oData);

            this.getView().setModel(oModel);

            this._configureCharts();

        },

        // CHART CONFIGURATION

        _configureCharts: function () {

            var oColumnChart = this.byId("idColumnChart");

            oColumnChart.setVizProperties({

                title: {
                    visible: true,
                    text: "Monthly Sales"
                },

                legend: {
                    visible: true
                },

                plotArea: {
                    dataLabel: {
                        visible: true
                    }
                }

            });

            var oDonutChart = this.byId("idDonutChart");

            oDonutChart.setVizProperties({

                title: {
                    visible: true,
                    text: "Department Analysis"
                },

                legend: {
                    visible: true
                }

            });

            // POPOVER

            var oPopover1 = new Popover();

            oPopover1.connect(
                oColumnChart.getVizUid()
            );

            var oPopover2 = new Popover();

            oPopover2.connect(
                oDonutChart.getVizUid()
            );

        },

        // SEARCH

        onSearch: function (oEvent) {

            var sValue =
                oEvent.getParameter("newValue");

            var oTable =
                this.byId("idTable");

            var oBinding =
                oTable.getBinding("items");

            var aFilters = [];

            if (sValue) {

                aFilters.push(
                    new Filter(
                        "Month",
                        FilterOperator.Contains,
                        sValue
                    )
                );

            }

            oBinding.filter(aFilters);

        }

    });

});