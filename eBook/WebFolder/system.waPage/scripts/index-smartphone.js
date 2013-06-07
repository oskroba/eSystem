
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.touchend = function button1_touchend (event)// @startlock
	{// @endlock
		window.open("eBooki/index.html","_self");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "touchend", button1.touchend, "WAF");
// @endregion
};// @endlock
