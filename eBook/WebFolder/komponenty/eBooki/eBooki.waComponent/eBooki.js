
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var tfSzukaj = {};	// @textField
	var button2 = {};	// @button
	var image1 = {};	// @image
	var button6 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	tfSzukaj.keyup = function tfSzukaj_keyup (event)// @startlock
	{// @endlock
		//$comp.sources.eBook.query('Autor = Sodomski');
		//debugger;
		//$comp.sources.eBook.query('Tytul = :1', $$(getHtmlId('szukaj')).getValue() + '*');
		var queryValue = $$(getHtmlId('tfSzukaj')).getValue() + '*';
		sources.eBook.query('Tytul = :1 OR Autor = :1',queryValue);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		//debugger;
		//$$('componentSrodka').sources.eBook.select($$('componentSrodka').sources.eBook.getCurrentElement());
	
		$$('componentSrodka').loadComponent({path: "/komponenty/eBooki/eBook.waComponent"});// Add your code here
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_tfSzukaj", "keyup", tfSzukaj.keyup, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_image1", "click", image1.click, "WAF");
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
