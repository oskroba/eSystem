
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'pierwszyLogin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bPrawy = {};	// @button
	var bLewy = {};	// @button
	var richText1 = {};	// @richText
	var loginowy_widget = {};	// @login
	// @endregion// @endlock

	// eventHandlers// @lock

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
		debugger;
		var loginName = $$(getHtmlId('tfLogin')).getValue();
		var thePassword = $$(getHtmlId('tfPass')).getValue();
		
		if(WAF.directory.loginByPassword(loginName, thePassword)){
			window.open("/wydawnictwo/","_self");
		}
		
		
	};// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
		var odpowiedz = confirm("Czy na pewno chcesz usunąć stare i otrzymać eMailem nowe hasło?. \n Tej czynności nie można będzie odwołać.");
		if(odpowiedz){
			var eMailHasla = prompt("Wpisz swój adres pocztowy (eMail), wyślemy Ci nowe hasło.", "");
			//debugger;
			alert(users.noweHaslo(eMailHasla));
			}
	};// @lock

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
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_richText1", "click", richText1.click, "WAF");
	WAF.addListener(this.id + "_loginowy_widget", "login", loginowy_widget.login, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
