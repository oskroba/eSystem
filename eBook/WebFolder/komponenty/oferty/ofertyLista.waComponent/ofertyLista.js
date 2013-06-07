
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var container26 = {};	// @container
	var button2 = {};	// @button
	var buttonNowaOferta = {};	// @button
	var bLewy = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	container26.click = function container26_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').sources.oferta.addNewElement();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').sources.oferta.eBook.set($$('componentSrodka').sources.eBook);
			$$('componentSrodka').sources.oferta.save();
	};// @lock

	buttonNowaOferta.click = function buttonNowaOferta_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').sources.oferta.addNewElement();
	};// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/eBook.waComponent"});
	};// @lock

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').sources.oferta.eBook.set($$('componentSrodka').sources.eBook);
		$$('componentSrodka').sources.oferta.save();
		$$('componentSrodka').loadComponent({path: "/komponenty/eBook.waComponent"});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_container26", "click", container26.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_buttonNowaOferta", "click", buttonNowaOferta.click, "WAF");
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
