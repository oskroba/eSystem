
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var richText1 = {};	// @richText
	var loginowy_widget = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	richText1.click = function richText1_click (event)// @startlock
	{// @endlock
		var odpowiedz = confirm("Czy na pewno chcesz usunąć stare i otrzymać eMailem nowe hasło?. \n Tej czynności nie można będzie odwołać.");
		if(odpowiedz){
			var eMailHasla = prompt("Wpisz swój adres pocztowy (eMail), wyślemy Ci nowe hasło.", "");
			//debugger;
			alert(users.noweHaslo(eMailHasla));
			}
		
		//debugger;
	};// @lock

	loginowy_widget.login = function loginowy_widget_login (event)// @startlock
	{// @endlock
		// Add your code here
		window.open("/wydawnictwo/","_self");
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("richText1", "click", richText1.click, "WAF");
	WAF.addListener("loginowy_widget", "login", loginowy_widget.login, "WAF");
// @endregion
};// @endlock
