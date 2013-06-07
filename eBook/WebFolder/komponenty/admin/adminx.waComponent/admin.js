
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'admin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bBindEbook = {};	// @button
	var bBindLogins = {};	// @button
	var button6 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	bBindEbook.click = function bBindEbook_click (event)// @startlock
	{// @endlock
		sources.eBook.wydawnictwo.set(sources.wydawnictwo);
		sources.eBook.save();
	
	};// @lock

	bBindLogins.click = function bBindLogins_click (event)// @startlock
	{// @endlock
			
		sources.login_Wydawnictwa.wydawnictwo.set(sources.wydawnictwo);
		sources.login_Wydawnictwa.save();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
				$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_bBindEbook", "click", bBindEbook.click, "WAF");
	WAF.addListener(this.id + "_bBindLogins", "click", bBindLogins.click, "WAF");
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
