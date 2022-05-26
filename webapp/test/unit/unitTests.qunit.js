/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"inch_indicador_gestion/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
