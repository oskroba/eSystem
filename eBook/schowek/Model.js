
guidedModel =// @startlock
{
	Login_Wydawnictwa :
	{
		methods :
		{// @endlock
			modifyUser:function(idLoginu, login, password1, imieNazwisko)
			{// @lock
				////START
				debugger;
				var kasujDodaj = false;
				if (login != null){kasujDodaj = true}   // jesli podany login (do zmiany)
				if (imieNazwisko != null){kasujDodaj = true}  //jesli imie inazwisko (do zmiany)
				var zmienianyLoginWyd = this.find('ID =:1',idLoginu);
				if (zmienianyLoginWyd != null) {
					var zmieniany = directory.user(zmienianyLoginWyd.DirectoryID);
					if (zmieniany == null){var zmieniany = directory.user(login);}//moze jest login
					if (zmieniany != null){//jest w Directory
						if (kasujDodaj) {
//							//zmieniany.fullName(DirID) = "AAAA";
							zmieniany.remove();
							directory.save();					
							directory.addUser(login,password1,imieNazwisko);
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
						debugger;
						zmienianyLoginWyd.save();
						dirID = directory.user(login).ID;	
				}
				
				////STOP
			}// @startlock
		}
	}
};// @endlock
