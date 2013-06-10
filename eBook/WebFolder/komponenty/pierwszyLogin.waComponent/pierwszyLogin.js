
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'pierwszyLogin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bLogout = {};	// @button
	var bLogin = {};	// @button
	var bReset = {};	// @button
	var richText1 = {};	// @richText
	var loginowy_widget = {};	// @login
	// @endregion// @endlock

	// eventHandlers// @lock

	
	var curSess = WAF.directory.currentUser();
		//debugger;
	if(curSess === null){
			$$(getHtmlId('bLogout')).hide();
		}else{
			$$(getHtmlId('bLogin')).hide();	
			$$(getHtmlId('tfLogin')).hide();
			$$(getHtmlId('tfPass')).hide();
		
	}	
	
	
	
	
	

	bLogout.click = function bLogout_click (event)// @startlock
	{// @endlock

		
		if(	WAF.directory.logout()){
			window.open("/index","_self");
		}
		
		
	};// @lock

	bLogin.click = function bLogin_click (event)// @startlock
	{// @endlock
		//debugger;
		var loginName = $$(getHtmlId('tfLogin')).getValue();
		var thePassword = $$(getHtmlId('tfPass')).getValue();
		
		if(WAF.directory.loginByPassword(loginName, thePassword)){
			window.open("/wydawnictwo/","_self");
		}else{
			alert("Login niepoprawny");
			document.getElementById("componentSrodka_tfPass").value="";
			document.getElementById("componentSrodka_tfLogin").value="";
		}
		
		
	};// @lock

	bReset.click = function bReset_click (event)// @startlock
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
	WAF.addListener(this.id + "_bLogout", "click", bLogout.click, "WAF");
	WAF.addListener(this.id + "_bLogin", "click", bLogin.click, "WAF");
	WAF.addListener(this.id + "_bReset", "click", bReset.click, "WAF");
	WAF.addListener(this.id + "_richText1", "click", richText1.click, "WAF");
	WAF.addListener(this.id + "_loginowy_widget", "login", loginowy_widget.login, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
