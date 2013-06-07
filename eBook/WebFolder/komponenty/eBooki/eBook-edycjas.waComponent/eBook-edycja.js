
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bLewy = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
				$$('componentSrodka').loadComponent({path: "/komponenty/eBook.waComponent"});
	};// @lock

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
			//sources.eBook.save();
			//$$('componentSrodka').
			sources.eBook.save();
			//sources.eBook.sync;
			$$('componentSrodka').loadComponent({path: "/komponenty/eBook.waComponent"});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
