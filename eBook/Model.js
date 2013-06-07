
guidedModel =// @startlock
{
	EBook :
	{
		Info :
		{
			onGet:function()
			{// @endlock
				return this.Autor + ': ' + this.Tytul ;
			}// @startlock
		}
	},
	Oferta :
	{
		Info :
		{
			onGet:function()
			{// @endlock
				require("formatting");
				return formatDate(this.Data_start) + ' do ' + formatDate(this.Data_stop) + " w cenie: "+this.Cena+ ",- PLN" ; 
			}// @startlock
		},
		DlaWszystkich :
		{
			events :
			{
				onInit:function(attributeName)
				{// @endlock
					DlaWszystkich = true;
				}// @startlock
			}
		}
	},
	Login_Wydawnictwa :
	{
		events :
		{
			onInit:function()
			{// @endlock
				this.DataUtworzenia = new Date();
			},// @startlock
			onSave:function()
			{// @endlock
				this.DataZmian = new Date();
			}// @startlock
		},
		methods :
		{// @endlock
			HA1update:function(eMail,password)
			{// @lock
				var znaleziony = this.find("eMail_login = :1", eMail);   // Add your code here
				if (znaleziony != null) {
					var klucz = directory.computeHA1(znaleziony.DirectoryID, password);
					znaleziony.HA1key = klucz;
					znaleziony.save();
					return true;
				}
			},// @lock
			sprMailLogin:function(eMail)
			{// @lock
				var znaleziony = this.find("eMail_login = :1", eMail);
				if (znaleziony != null) {
					return true;
				}
			},// @lock
			addUser:function(zalogIdWydawnictwa, login, password1, imieNazwisko)
			{// @lock
				//debugger;
				var zmienianyLoginWyd = new ds.Login_Wydawnictwa();
				//zmienianyLoginWyd.eMail_login = login;
				zmienianyLoginWyd.wydawnictwo = ds.Wydawnictwo.find("ID = :1", zalogIdWydawnictwa);
				zmienianyLoginWyd.save();
				directory.addUser(login,password1,imieNazwisko);
				directory.user(login).putInto('Uzytkownicy');
				directory.save();					
				dirID = directory.user(login).ID;							 			
				zmienianyLoginWyd.DirectoryID = dirID;
				zmienianyLoginWyd.Imie_nazwisko = imieNazwisko;
				zmienianyLoginWyd.eMail_login = login;
				zmienianyLoginWyd.HA1key = directory.computeHA1(dirID, password1);	
				zmienianyLoginWyd.save();
				return zmienianyLoginWyd.ID;
				
				// Add your code here

			},// @lock
			modifyUser:function(zalogIdWydawnictwa, idLoginu, login, password1, imieNazwisko,nick)
			{// @lock
				////START
				//debugger;
				var zmienianyLoginWyd = this.find('ID =:1',idLoginu);
				if (zmienianyLoginWyd == null) {
					console.log('Nie matakiego usera w Loginach');
					// nie chcemy dodawać jeśli go nie ma, niech kontroluje to caller
					//var zmienianyLoginWyd = new ds.Login_Wydawnictwa();
					//zmienianyLoginWyd.wydawnictwo = ds.Wydawnictwo.find("ID = :1", zalogIdWydawnictwa);
					//zmienianyLoginWyd.save();
				}else{
				var kasujDodaj = false;
				var zmianyDirectory = true;
				if (login != null){kasujDodaj = true}   // jesli podany login (do zmiany)
				if (imieNazwisko != null){kasujDodaj = true}  //jesli imie inazwisko (do zmiany)				
				if (!kasujDodaj && password1==null){zmianyDirectory = false;} // nie robimy zmian w Directory
				
				
				if (!kasujDodaj && password1 !=null){
					zmianyDirectory = false;
					var zmieniany = directory.user(zmienianyLoginWyd.DirectoryID);
					if (zmieniany != null){//nie ma w Directory
						zmieniany.setPassword(password1);
						dirID = zmieniany.ID;
						directory.save();	//tylko zmiana hasla
						zmienianyLoginWyd.HA1key = directory.computeHA1(dirID, password1);
					}
				} // nie robimy zmian w Directory	
					
				
				
				////ZMIANY W DIRECTORY	
				if(zmianyDirectory){	
				var zmieniany = directory.user(zmienianyLoginWyd.DirectoryID);
				if (zmieniany == null){var zmieniany = directory.user(login);}//moze jest login
					if (zmieniany != null){//jest w Directory
						if (kasujDodaj) {
//							//zmieniany.fullName(DirID) = "AAAA";
							zmieniany.remove();
							directory.save();					
							directory.addUser(login,password1,imieNazwisko);
							directory.user(login).putInto('Uzytkownicy');
							directory.save();
						} else {
							zmieniany.setPassword(password1);
							directory.save();	//tylko zmiana hasla
						}
					}else{//nie ma takiego w Directory
							directory.addUser(login,password1,imieNazwisko);
							directory.save();						
					}		
					dirID = directory.user(login).ID;							 			
					zmienianyLoginWyd.DirectoryID = dirID;
					zmienianyLoginWyd.Imie_nazwisko = imieNazwisko;
					zmienianyLoginWyd.eMail_login = login;			
					zmienianyLoginWyd.HA1key = directory.computeHA1(dirID, password1);			
				}//(zmianyDirectory)
				
				//mamy więc i login i Directory usera, updejtujemy login

				//inne zmiany
				if (nick != null){zmienianyLoginWyd.nick = nick}
				zmienianyLoginWyd.save();
				return zmienianyLoginWyd.ID;	
				////STOP
				}//nie ma w loginach wiec tworzymy (?)	
			}// @startlock
		}
	}
};// @endlock

function curUserWydID(){
	var zalogowanyUser = ds.Login_Wydawnictwa.find("DirectoryID = :1", currentUser().ID);
	return zalogowanyUser.WydawnictwoID;
}
function curUserWyd(){
	var zalogowanyUserWyd = ds.Login_Wydawnictwa.find("DirectoryID = :1", currentUser().ID);
	return zalogowanyUserWyd.wydawnictwo
;
}
