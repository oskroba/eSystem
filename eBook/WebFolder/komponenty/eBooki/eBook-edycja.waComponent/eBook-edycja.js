
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		//debugger;
		infoNavi = "strona głowna > zarządzanie ebookami > " + sources.eBook.Info;
		sources.infoNavi.sync();

	// @region namespaceDeclaration// @startlock
	var fileUpload3 = {};	// @fileUpload
	var bLewy = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	fileUpload3.filesUploaded = function fileUpload3_filesUploaded (event)// @startlock
	{// @endlock
		//debugger;
		var pliki = this.getFiles();
		infoPlik = "Odebrano plik: "+pliki[0].name + " (" + Math.round(pliki[0].size/1024).toString()+" kb). <br> Typ plilku: "+ pliki[0].type;
		sources.infoPlik.sync();
	};// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').loadComponent({path: "/komponenty/eBooki/eBook.waComponent"});
	};// @lock

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
			sources.eBook.save();
			//sources.eBook.sync;
			$$('componentSrodka').loadComponent({path: "/komponenty/eBooki/eBook.waComponent"});
	};// @lock

//	arrKsiegarnieOferty = oferty.getKsiegarnie();
			sources.arrKsiegarnieOferty.sync();
			sources.eBook.serverRefresh();

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_fileUpload3", "filesUploaded", fileUpload3.filesUploaded, "WAF");
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
