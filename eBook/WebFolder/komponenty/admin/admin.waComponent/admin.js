
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'admin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bLewy = {};	// @button
	var bPrawy = {};	// @button
	var bBindEbook = {};	// @button
	var bBindLogins = {};	// @button
	var button6 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
		
	};// @lock

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
	};// @lock

	bBindEbook.click = function bBindEbook_click (event)// @startlock
	{// @endlock
		//debugger;
		sources.eBook.wydawnictwo.set(sources.wydawnictwo);
		sources.eBook.save();
	
	};// @lock

	bBindLogins.click = function bBindLogins_click (event)// @startlock
	{// @endlock
		//debugger;
		sources.login_Wydawnictwa.wydawnictwo.set(sources.wydawnictwo);
		sources.login_Wydawnictwa.save();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
			
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	WAF.addListener(this.id + "_bBindEbook", "click", bBindEbook.click, "WAF");
	WAF.addListener(this.id + "_bBindLogins", "click", bBindLogins.click, "WAF");
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	// @endregion// @endlock

	};// @lock
debugger;

}// @startlock
return constructor;
})();// @endlock
