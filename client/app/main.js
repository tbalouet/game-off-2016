//Main file served by the application
(function(){
	"use strict";
    require("../vendor/aframe-extras.min.js");
    var World = require("./world.js");

    GLOBAL.world = new World();
})();