
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock
//debugger;
			$comp.sources.ankiety.newEntity();
			//$comp.sources.rejestracje.sync;
	// @region namespaceDeclaration// @startlock
	var comboKategoria = {};	// @combobox
	var button3 = {};	// @button
	var button6 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	comboKategoria.change = function comboKategoria_change (event)// @startlock
	{// @endlock
		//debugger;
		$comp.sources.ankiety.Kategoria = $$(getHtmlId('comboKategoria')).getValue();
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$comp.sources.ankiety.newEntity();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		//debugger;
		var testy = true;
		if (emailSpr($comp.sources.ankiety.eMail) == false){alert("Niepoprawny e-mail!"); testy = false}
		if (($comp.sources.ankiety.ImieNazwisko) == false){alert("Wypełnij pole Imię i nazwisko!"); testy = false}
		if (($comp.sources.ankiety.NazwaFirmy) == false){alert("Wypełnij pole Nazwa Firmy!"); testy = false}
		if (($comp.sources.ankiety.Temat) == false){alert("Wypełnij pole Temat!"); testy = false}
		if(testy){
			$comp.sources.ankiety.save();
			alert("Dziękujemy!");
//			location.href = "/"
			window.history.back();
		}
		//wyczysc();
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_comboKategoria", "change", comboKategoria.change, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	// @endregion// @endlock

	};// @lock
function wyczysc(){
	//$$(getHtmlId('tfFirma')) = "";
	//$$("componentSrodka_tfImie") = "";
	document.reload();
	
	
	}
	
function emailSpr (email) { 
	//debugger;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

}// @startlock
return constructor;
})();// @endlock
