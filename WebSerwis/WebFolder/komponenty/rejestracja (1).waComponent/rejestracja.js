
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock
//debugger;
			$comp.sources.rejestracje.newEntity();
			//$comp.sources.rejestracje.sync;
	// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button6 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$comp.sources.rejestracje.newEntity();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		//debugger;
		var testy = true;
		if (emailSpr($comp.sources.rejestracje.eMail) == false){alert("Niepoprawny e-mail!"); testy = false}
		if (($comp.sources.rejestracje.Imie) == false){alert("Wypełnij pole Imię!"); testy = false}
		if (($comp.sources.rejestracje.Nazwisko) == false){alert("Wypełnij pole Nazwisko!"); testy = false}
		if (($comp.sources.rejestracje.NazwaFirmy) == false){alert("Wypełnij pole Nazwa Firmy!"); testy = false}
		if (($comp.sources.rejestracje.Miejscowosc) == false){alert("Wypełnij pole Miejscowość!"); testy = false}
		if (($comp.sources.rejestracje.KodPocztowy) == false){alert("Wypełnij pole Kod Pocztowy!"); testy = false}
		if (($comp.sources.rejestracje.Ulica) == false){alert("Wypełnij pole Ulica!"); testy = false}
		if(testy){
			$comp.sources.rejestracje.save();
			alert("Dziękujemy!");
//			location.href = "/"
			window.history.back();
		}
		//wyczysc();
		
	};// @lock

	// @region eventManager// @startlock
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
