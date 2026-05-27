/*global QUnit*/

sap.ui.define([
	"com/analyticalreport/controller/chartview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("chartview Controller");

	QUnit.test("I should test the chartview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
