
model =
{
	Wydawnictwo :
	{
		login_WydawnictwaCollection :
		{
			events :
			{
				onSet:function(attributeName)
				{
					// Add your code here
				}
			}
		}
	},
	Login_Wydawnictwa :
	{
		methods :
		{
			modifyUser:function()
			{
				// Add your code here
			}
		},
		events :
		{
			onSave:function()
			{
				//debugger;
				this.DataZmian = new Date();
//				var sesja = currentSession();
//				if (sesja.belongsTo("Admin") == false) {
//					var cur = curUserWydID();
//					this.WydawnictwoID = curUserWydID();
//				} else {
//					if(this.WydawnictwoID == null){
//						this.WydawnictwoID = curUserWydID();
//					}
//				}

				
			}
		}
	}
};

function curUserWydID(){
	var zalogowanyUser = ds.Login_Wydawnictwa.find("DirectoryID = :1", currentUser().ID);
	return zalogowanyUser.WydawnictwoID;
}



//				var wydawnID = curUserWydID();
//				var kolekcjaUsera = ds.Login_Wydawnictwa.query("WydawnictwoID = :1", wydawnID);
//				return kolekcjaUsera; 



//				var cur = curUserWydID();
//				this.WydawnictwoID = curUserWydID();


//modifyUser:function(idUsera,login,haslo,imieNazwisko)
//				var kasujDodaj = false;
//				if (login != null){kasujDodaj = true}   // jesli podany login (do zmiany)
//				if (imieNazwisko != null){kasujDodaj = true}  //jesli imie inazwisko (do zmiany)
//				var zmienianyLoginWyd = this.find('ID :1',idUsera);
//				if (zmienianyLoginWyd != null) {
//					var zmieniany = directory.user(zmienianyLoginWyd.DirectoryID);
//					if (zmieniany != null){
//						if (kasujDodaj) {
//							//zmieniany.fullName(DirID) = "AAAA";
//							zmieniany.remove();
//							directory.save();					
//							directory.addUser(login,haslo,imieNazwisko);
//							directory.save();
//							zmieniany = directory.user(login).ID;
//						} else {
//							zmieniany.setPassword(haslo);
//							directory.save();	//tylko zmiana hasla
//						}
//						zmienianyLoginWyd.DirectoryID = zmieniany.ID;
//						zmienianyLoginWyd.Imie_nazwisko = imieNazwisko;
//						zmienianyLoginWyd.eMail_login = login;
//						zmienianyLoginWyd.HA1key = directory.computeHA1(zmieniany.ID, haslo);
//						zmienianyLoginWyd.save();						
//					} 					
//				}