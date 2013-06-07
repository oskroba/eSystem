
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var image1 = {};	// @image
	var szukaj = {};	// @textField
	var button6 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		//debugger;
		//$$('componentSrodka').sources.eBook.select($$('componentSrodka').sources.eBook.getCurrentElement());
	
		$$('componentSrodka').loadComponent({path: "/komponenty/eBook.waComponent"});// Add your code here
	};// @lock

	szukaj.keyup = function szukaj_keyup (event)// @startlock
	{// @endlock
		//$comp.sources.eBook.query('Autor = Sodomski');
		$comp.sources.eBook.query('Tytuł = :1', $$(getHtmlId('szukaj')).getValue() + '*');
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_image1", "click", image1.click, "WAF");
	WAF.addListener(this.id + "_szukaj", "keyup", szukaj.keyup, "WAF");
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
