var World, vrDisplay;
//World file to handle basics
(function(){
	"use strict";

	World = function(){		
		this.scene = document.querySelector("a-scene");
		this.assets = document.createElement("a-assets");
		this.scene.appendChild(this.assets);

		this.assets.addEventListener("loaded", this.onAssetLoaded.bind(this));
      	
      	window.requestAnimationFrame(this.animate.bind(this));
	};

	World.prototype.getObject = function(name){
		return document.querySelector("#" + name).getObject3D("mesh");
	};

	World.prototype.onAssetLoaded = function(){
		console.log("All assets loaded");
	};

	// Request animation frame loop function
	World.prototype.animate = function(timestamp) {
		this.getObject("theBox").rotateY(Math.PI/180);

		if (vrDisplay) {
			// VR headset display
			vrDisplay.requestAnimationFrame(this.animate.bind(this));
		} else {
			// Non-VR fallback for "magic window" mode
          	window.requestAnimationFrame(this.animate.bind(this));
		}
	};
})();
module.exports = World;