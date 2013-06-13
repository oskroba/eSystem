
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

			$comp.sources.ankiety.newEntity();

	// @region namespaceDeclaration// @startlock
	var comboKategoria = {};	// @combobox
	var button3 = {};	// @button
	var button6 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	comboKategoria.change = function comboKategoria_change (event)// @startlock
	{// @endlock
		debugger;
		$comp.sources.ankiety.Kategoria = $$(getHtmlId('comboKategoria')).getValue();
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$comp.sources.ankiety.newEntity();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		//debugger;
		$comp.sources.ankiety.save();
		//wyczysc();
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_comboKategoria", "change", comboKategoria.change, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	// @endregion// @endlock

	};// @lock
function wyczysc(){
	$$(getHtmlId('tfTemat')) = "";
	$$("componentSrodka_tfMail") = "";
	
	}

}// @startlock
return constructor;
})();// @endlock
