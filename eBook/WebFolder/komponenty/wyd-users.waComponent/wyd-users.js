
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	//debugger;
	// @region namespaceDeclaration// @startlock
	var gridLoginow = {};	// @dataGrid
	var textFieldPrzyLiscie_Login = {};	// @textField
	var bLewy = {};	// @button
	var bZmienSwojeHaslo = {};	// @button
	var container5 = {};	// @container
	var container2 = {};	// @container
	var bZapiszSiebie = {};	// @button
	var bAnulujSiebie = {};	// @button
	var bPrzyLiscieNowy = {};	// @button
	var bUsun_zGrida = {};	// @button
	var bSavePrzyLiscie = {};	// @button
	var button1 = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	gridLoginow.onRowClick = function gridLoginow_onRowClick (event)// @startlock
	{// @endlock
		//debugger;
		var selectedEntity = $$("componentSrodka_gridLoginow").dataSource.getCurrentElement();
		if(selectedEntity.eMail_login != curUser.name){
				$$("componentSrodka_dialogLoginu").show();
			user.name = selectedEntity.eMail_login;
			user.fullName = selectedEntity.Imie_nazwisko;
			user.password = "";
			user.id = selectedEntity.ID;
			sources.user.sync();
		}else{
			$$("componentSrodka_dialogLoginu").hide();
			user.name = "";
			user.fullName = "";
			user.password = "";
			user.id = "";
			sources.user.sync();
		}
	};// @lock

	textFieldPrzyLiscie_Login.change = function textFieldPrzyLiscie_Login_change (event)// @startlock
	{// @endlock
		if (!users.emailSpr(this.getValue())) {alert("musisz wprowadzić prawidłowy adres eMail");}
	};// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
	};// @lock

	bZmienSwojeHaslo.click = function bZmienSwojeHaslo_click (event)// @startlock
	{// @endlock
		$$("componentSrodka_textH1").show();
		$$("componentSrodka_textH2").show();
	};// @lock

	container5.click = function container5_click (event)// @startlock
	{// @endlock
		updateGrid();
	};// @lock

	container2.click = function container2_click (event)// @startlock
	{// @endlock
		ustawZalogowanego()
	};// @lock

	container2.stopResize = function container2_stopResize (event)// @startlock
	{// @endlock

	};// @lock

	bZapiszSiebie.click = function bZapiszSiebie_click (event)// @startlock
	{// @endlock
		debugger;
		if (sources.curUser.id === undefined) {// może do poprawki
			var result = users.addUser(sources.curUser.name, sources.curUser.password, sources.curUser.password1, sources.curUser.password2, sources.curUser.fullName);
			if (result != null) {
				usersList.push({ID: result, fullName: sources.curUser.fullName, name: sources.curUser.name});
				sources.usersList.sync();
				//resetForm();
			} else {
				alert("Wystąpił błąd podczas dodawania użytkownika : " + sources.curUser.name + "\n wygląda na to, że użytkownik istnieje już w katalogu, skontaktuj się z administratorem (admin@ebook-everywhere.pl) w celu uzyskania dodatkowych informacji.");
			}
		} else {
			result = users.updateUser(sources.curUser.id, null, sources.curUser.password,sources.curUser.password1,sources.curUser.password2, null, sources.curUser.nick);
			if (result) {
				// tu było coś do aktualizacjilisty chyba
//				usersList.some(function(item){
//					if (item.ID == sources.curUser.id) {
//						item.name = sources.curUser.name;
//						item.fullName = sources.curUser.fullName;
//						sources.usersList.sync();
//						return false;
//					}
//				});
				alert("Dane zostały zaktualizowane");
				//resetForm();
				return true;
			} else {
				alert("Wystąpił błąd podczas aktualizacji danych użytkownika : " + sources.user.name + "\n wygląda na to, że użytkownik nie istnieje w katalogu, skontaktuj się z administratorem (admin@ebook-everywhere.pl) w celu uzyskania dodatkowych informacji.");
			}
		}
	};// @lock

	bAnulujSiebie.click = function bAnulujSiebie_click (event)// @startlock
	{// @endlock
		resetForm();
	};// @lock

	bPrzyLiscieNowy.click = function bPrzyLiscieNowy_click (event)// @startlock
	{// @endlock
		resetForm();
	};// @lock

	bUsun_zGrida.click = function bUsun_zGrida_click (event)// @startlock
	{// @endlock
		debugger;
			var result = users.deleteUser(sources.user.name, $$("componentSrodka_gridLoginow").updateGrid);
			if (result) {
				updateGrid();
			} else {
				alert("Wystąpił błąd podczas usuwania użytkownika : " + sources.user.name + ", skontaktuj się z administratorem (admin@ebook-everywhere.pl) w celu wyjaśnienia tego zdarzenia.");
			}
	};// @lock

	bSavePrzyLiscie.click = function bSavePrzyLiscie_click (event)// @startlock
	{// @endlock
		//debugger;
		var testyOK = true;

	//debugger;
		// spradzenia danych
			if (!users.emailSpr($$('componentSrodka_textFieldPrzyLiscie_Login').getValue())) {alert("musisz wprowadzić prawidłowy adres eMail");testyOK = false;}	
		/// spr
		 
		if(testyOK){	
			if (sources.user.id === undefined) {
			var result = users.addUser(sources.user.name, sources.user.password, sources.user.password1, sources.user.password2, sources.user.fullName);
			if (result != null) {
				
				//usersList.push({ID: result, fullName: sources.user.fullName, name: sources.user.name});
				//sources.usersList.sync();
				updateGrid();
			} else {
				alert("Wystąpił błąd podczas dodawania użytkownika : " + sources.user.name + "\n wygląda na to, że użytkownik istnieje już w katalogu, skontaktuj się z administratorem (admin@ebook-everywhere.pl) w celu uzyskania dodatkowych informacji.");
			}
			} else {
			result = users.updateUser(sources.user.id, sources.user.name, sources.user.password, sources.user.password1, sources.user.password2, sources.user.fullName);
			if (result) {
				alert("Dane użytkownika "+sources.user.name+ " zostały zapisane.");
				updateGrid();
			} else {
				alert("Wystąpił błąd podczas aktualizacji danych użytkownika : " + sources.user.name + "\n wygląda na to, że użytkownik nie istnieje w katalogu, skontaktuj się z administratorem (admin@ebook-everywhere.pl) w celu uzyskania dodatkowych informacji.");
			resetForm();
			}
		} //if sources
		}else{
			alert("Niestety wprowadzone dane są niepoprawne i nie zostały zapisane.");
		}
	};// @lock




	button1.click = function button1_click (event)// @startlock
	{// @endlock
		resetForm();
	};// @lock

	//************************************  RZECZY ODPALANE NA POCZĄTKU   ********************************
	//{
		//debugger;
		usersList = users.getUsers();
		sources.usersList.sync();
		curWyd.nazwa = users.zalogowanyNazwaWyd();
		sources.curWyd.sync();
		
		ustawZalogowanego();
		
//		
		function Wyczysc(){
			debugger;
			
			//document.getElementById("componentSrodka_f1").reset();
			var arrPola = document.getElementById("componentSrodka_contSrodekDialogu").childNodes;
			for (var i=0;i<inputy.length;i++)
				inputy[i].clear();
		}
		
	//};

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
			//sources.eBook.save();
			//users.wyslijMailaSerw("Oto tytułąą","ąąąą");
//			$$('componentSrodka').sources.eBook.save()
		$$('componentSrodka').loadComponent({path: "/komponenty/wyd-nawigacja.waComponent"});
	};// @lock
	
	
	
	
	
	function resetForm() {
		user.name = "";
		user.fullName = "";
		user.password = "";
		user.password1 = "";
		user.password2 = "";
		user.id = undefined;
		sources.user.sync();
	}
	
	function updateGrid() {
		resetForm();
		usersList = users.getUsers(); // Retrieve all the users from the server
		sources.usersList.sync();
	}
	
	function ustawZalogowanego() {
		//debugger;
		var zalogowany = users.zalogowanyUser();
		if(zalogowany != null){
			curUser.name = zalogowany.eMail_login;
			curUser.fullName = zalogowany.Imie_nazwisko;
			curUser.password = "";
			curUser.id = zalogowany.ID;
			curUser.nick = zalogowany.nick;
			sources.curUser.sync();
		}else{ 
			alert("Nie ma Cię w katakogu. Zgłoś błąd administratorowi!");
		}
	}

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_gridLoginow", "onRowClick", gridLoginow.onRowClick, "WAF");
	WAF.addListener(this.id + "_textFieldPrzyLiscie_Login", "change", textFieldPrzyLiscie_Login.change, "WAF");
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bZmienSwojeHaslo", "click", bZmienSwojeHaslo.click, "WAF");
	WAF.addListener(this.id + "_container5", "click", container5.click, "WAF");
	WAF.addListener(this.id + "_container2", "click", container2.click, "WAF");
	WAF.addListener(this.id + "_container2", "stopResize", container2.stopResize, "WAF");
	WAF.addListener(this.id + "_bZapiszSiebie", "click", bZapiszSiebie.click, "WAF");
	WAF.addListener(this.id + "_bAnulujSiebie", "click", bAnulujSiebie.click, "WAF");
	WAF.addListener(this.id + "_bPrzyLiscieNowy", "click", bPrzyLiscieNowy.click, "WAF");
	WAF.addListener(this.id + "_bUsun_zGrida", "click", bUsun_zGrida.click, "WAF");
	WAF.addListener(this.id + "_bSavePrzyLiscie", "click", bSavePrzyLiscie.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
