/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'Users' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(Users.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/

function zalogowanyUserHashZapisany(){
	//debugger;
	var wezCurrenta = currentUser();
	var szukanyUser = ds.Login_Wydawnictwa.find('DirectoryID = :1',wezCurrenta.ID);
	if(szukanyUser != null){return szukanyUser.HA1key;}
	
	//return currentUser();
}


exports.wyslijMailaSerw = function wyslijMailaSerw(tytul,tresc){
	//var rec = ['tosia@dag.pl' , 'oskroba@gmail.com'];
	var macMail = new SystemWorker('sendEmail -f "autoadmin@ebook-everywhere.pl" -xu "autoadmin" -xp "700ift" -t "tosia@dag.pl" -u "'+tytul+'" -m "'+tresc+'"');

}
//////   **************************************         ZMIANA HASLA
 var noweHaslo = function(eMail){
 	//debugger;
 	var szukanyUserDir = directory.user(eMail);
 	//debugger;
	if(szukanyUserDir !== null){/// dorobic cos zeby nie mozna by?o KOMU? zresetowa? has?a
	
	
//		var szukanyUser = ds.Login_Wydawnictwa.find('eMail_login = :1',eMail);
//		if (szukanyUser !== null) {
		if (ds.Login_Wydawnictwa.sprMailLogin(eMail)){
			password = Math.random();
			password = Math.round(password * 100000000)
			var passwordTekst = password.toString();
			
			szukanyUserDir.setPassword(passwordTekst);
			directory.save();
			
			//aktualizacja bazy login�w
		 	ds.Login_Wydawnictwa.HA1update(eMail, passwordTekst);

//					} else {  						//je?li brak takiego to dopisujemy

//			        	var juzer = new ds.Login_Wydawnictwa();    
//			  			juzer.eMail_login = name;
//		 	 	      	juzer.Imie_nazwisko = fullName;
//		  	 	     	juzer.DirectoryID = zmienianyDirUser.ID;// to zmienna z Directory
//		     		   	juzer.HA1key = directory.computeHA1(zmienianyDirUser.ID, password);
//		       		 	juzer.save();
			var tresc = szukanyUserDir.fullName+"\n \n"+password+"\n";
			wyslijMailEE(eMail,"Informacja od Ebook-Everywhere",tresc,"TrescMaila-naglowek","TrescMaila-stopka");
	        return "Email w drodze!";	
	        }else{
	        return "Brak takiego adresu w bazie danych!";	
		}//if szukanyUser
	
	}else{
	return "Brak takiego adresu w katalogu!";	
	}//if szukanyUserDir
		
}
exports.noweHaslo = function(par1){
	//debugger;
	return noweHaslo(par1);};


function wyslijMail(tresc){
	wyslijMailEE("tosia@dag.pl","Informacja od Ebook-Everywhere",tresc,"TrescMaila-naglowek","TrescMaila-stopka");
}
	
function wyslijMailEE(adresat,tytul,tresc,header,footer){
	tresc = loadText(ds.getDataFolder().path+"Assets/"+header) + tresc;
	tresc = tresc +loadText(ds.getDataFolder().path+"Assets/"+footer);	
	var macMail = new SystemWorker('sendEmail -f "autoadmin@ebook-everywhere.pl" -xu "autoadmin" -xp "700ift" -t "'+adresat+'" -u "'+tytul+'" -m "'+tresc+'"');

}


 var zalogowanyDir = function(){
	var wezCurrentaDir = currentUser();
	//debugger;
	if(wezCurrentaDir.name !== "darek"){
		wyslijMail("\n"+wezCurrentaDir.fullName+"\n \n");
	}
	if(wezCurrentaDir.ID !== "00000000000000000000000000000000"){return true;}
		
}
exports.zalogowanyDir = function(){return zalogowanyDir()};

exports.emailSpr = function emailSpr (email) { 
	//debugger;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function zalogowanyDirID (){
	var wezCurrentaDir = currentUser();
	return wezCurrentaDir.ID;	
}

function sprawdzJakoscHasla(haslo){
	if(haslo.length > 3);{return true;}
	return true;////------------ skasowa?!!!!!!!!!!
	
}

function zalogowanyWydawnictwo (){
	var szukanyUser = ds.Login_Wydawnictwa.find('DirectoryID = :$userID');
	return szukanyUser.wydawnictwo.ID;	
}

exports.zalogowanyNazwaWyd = function(){
	var szukanyUser = ds.Login_Wydawnictwa.find('DirectoryID = :$userID');
	return szukanyUser.wydawnictwo.Nazwa;	
};


exports.getUsers = function getUsers() {
	if(zalogowanyDir()){
		//debugger;
		var selekcja = ds.Login_Wydawnictwa.query("wydawnictwo.ID = :1",zalogowanyWydawnictwo ());
		//var selekcja = ds.Login_Wydawnictwa.all();
		var arrSel = selekcja.toArray("ID,eMail_login,Imie_nazwisko");
//		var arrSel = directory.internalStore.User.all().toArray("ID,name,fullName");

		return arrSel; 
	}
};

exports.zalogowanyUser = function zalogowanyUser(){
	//debugger;
	var wezCurrentaDir = currentUser();
	var szukanyUser = ds.Login_Wydawnictwa.find('DirectoryID = :1',wezCurrentaDir.ID);

	
	return szukanyUser;
	//return currentUser();
	}

exports.addUser = function addUser(login, password,  password1, password2,  imieNazwisko) {
	
	var rezultat = null;
    try {
    	//debugger;
    	if (zalogowanyUserHashZapisany() === directory.computeHA1(zalogowanyDirID(), password)) {    //sprawdzamy czy zmieniający podał SWOJE hasło
			if(sprawdzJakoscHasla(password1) && password1 === password2) { 
				var zalogIdWydaw = zalogowanyWydawnictwo ();
				var rezultat = ds.Login_Wydawnictwa.addUser(zalogIdWydaw, login, password1, imieNazwisko); 
       		}
   		}
    }
    catch (e) {
        console.error(e);
        return rezultat;
    }

    return rezultat;
};





exports.updateUser = function updateUser(id, login, password, password1, password2, imieNazwisko, nick) {

    var zmienianyDirUser = directory.user(id); //coś w rodzaju szukaj?
	//var zmieniajacyUser = currentUser();
	try {
		var testyOK = true;
		//TESTY
		if (!zalogowanyDir) {testyOK = false } //jesli jest zalogowany ///zmienianyDirUser
		var test1 = zalogowanyUserHashZapisany();
		var test2 = directory.computeHA1(zalogowanyDirID(), password);
		if (test1 != test2) {testyOK = false }   //sprawdzamy czy zmieniajacy podal SWOJE haslo
		if(password1 != password2) {testyOK = false } // czy hasła są zgodne
		//if(password1 = null || !sprawdzJakoscHasla(password1)) {testyOK = false}
		//KONIEC TESTOW
		//debugger;
		if (testyOK){		        
			var szukanyUser = ds.Login_Wydawnictwa.find('ID = :1',id);//czy jest taki	      
          	if (szukanyUser !== null) {
				var rezultat = ds.Login_Wydawnictwa.modifyUser(zalogowanyWydawnictwo (), id, login, password1, imieNazwisko, nick);			
			} else {  						//jeśli brak takiego to dopisujemy
	      		var juzer = new ds.Login_Wydawnictwa();    
	     		juzer.eMail_login = login;
		   		juzer.Imie_nazwisko = imieNazwisko;
	       		juzer.DirectoryID = zmienianyDirUser.ID;// to zmienna z Directory
	   	  		juzer.HA1key = directory.computeHA1(zmienianyDirUser.ID, password1);
   		 		juzer.save();
 			}//(szukanyUser !== null) 						
	       return true; //udało się zaktualizować usera
		}//if (testyOK)
	    
	} catch (e) { // end try
        console.error(e);
        return false;
    }
    
    //return true;
};





exports.deleteUser = function deleteUser(name) {
    try {
    	
    	var szukanyUser = ds.Login_Wydawnictwa.find('DirectoryID = :1',directory.user(name).ID);
    	szukanyUser.remove();
        directory.user(name).remove();
        directory.save();
    }
    catch (e) {
        console.error(e);
        return false;
    }

    return true;
};
