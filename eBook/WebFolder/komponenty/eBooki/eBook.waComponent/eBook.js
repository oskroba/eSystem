
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		//debugger;
		infoNavi = "strona głowna > zarządzanie ebookami > " + sources.eBook.Info;
		sources.infoNavi.sync();

	// @region namespaceDeclaration// @startlock
	var richText11 = {};	// @richText
	var richText10 = {};	// @richText
	var bLewy = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	richText11.click = function richText11_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/eBooki/oferty/lista.waComponent"});
	};// @lock

	richText10.click = function richText10_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/eBooki/eBook-edycja.waComponent"});
	};// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').loadComponent({path: "/komponenty/eBooki/eBooki.waComponent"});
	};// @lock

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/eBooki/eBooki.waComponent"});
	};// @lock

//	arrKsiegarnieOferty = oferty.getKsiegarnie();
			sources.arrKsiegarnieOferty.sync();
			sources.eBook.serverRefresh();

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText11", "click", richText11.click, "WAF");
	WAF.addListener(this.id + "_richText10", "click", richText10.click, "WAF");
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
