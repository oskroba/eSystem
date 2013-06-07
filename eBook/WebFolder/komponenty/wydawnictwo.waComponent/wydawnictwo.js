
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button6 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
