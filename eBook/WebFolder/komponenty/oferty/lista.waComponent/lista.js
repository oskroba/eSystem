
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	var container22 = {};	// @container
	var bZapisz = {};	// @button
	var container19 = {};	// @container
	var bLewy = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
	//debugger;
		sources.arrKsiegarnieOferty.sync();
		if($$("componentSrodka").sources.ofertaCollection.Gotowa in {'false':true, 'null':true}){
		if($$("componentSrodka").sources.ofertaCollection.DlaWszystkich in {'false':true, 'null':true}) {
			var pary = new Array;
			for (var i=0; i<arrKsiegarnieOferty.length; i++) {
				if (arrKsiegarnieOferty[i].Tak) {
					//pary[i].IdOferty = $$("componentSrodka").sources.ofertaCollection.ID;
					pary.push(arrKsiegarnieOferty[i].ID);	
				}
			};
			wynik = oferty.zapiszSelekcjeOfert(pary, $$("componentSrodka").sources.ofertaCollection.ID);
			if(wynik){
				$$("componentSrodka").sources.ofertaCollection.Gotowa = true;
				$$("componentSrodka").sources.ofertaCollection.save();
				alert("Oferta została zapisana.");
			}
			
		}else{	
			alert("Oferta rozpoczynająca się w dniu "+$$("componentSrodka").sources.ofertaCollection.Data_start+" została sporządzona 'Dla wszystkich księgarń' i nie możesz tego zmienić. Możesz ją usunąć i stworzyć nową.")
		}
		}else{
			alert("Oferta rozpoczynająca się w dniu "+$$("componentSrodka").sources.ofertaCollection.Data_start+" jest już gotowa i nie możesz jej zmieniać. Możesz ją usunąć i stworzyć nową.")
		}
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
	
		for (var i=0; i<arrKsiegarnieOferty.length; i++) {
			arrKsiegarnieOferty[i].Tak = false;
		};
sources.arrKsiegarnieOferty.sync();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock

		for (var i=0; i<arrKsiegarnieOferty.length; i++) {
			arrKsiegarnieOferty[i].Tak = true;
		};
sources.arrKsiegarnieOferty.sync();
	};// @lock

	container22.click = function container22_click (event)// @startlock
	{// @endlock
		//debugger;
		if($$("componentSrodka").sources.ofertaCollection.Gotowa in {'true':true, 'null':true}){
			arrKsiegarnieOferty = oferty.getSelOfert($$("componentSrodka").sources.ofertaCollection.ID);
		}else{	
			arrKsiegarnieOferty = oferty.getSelOfertPusta();
	}		
			
//			for (var i=0; i<arrKsiegarnieOferty.length; i++) {
//				arrKsiegarnieOferty[i].Tak = false;
//			};
			for (var i=0; i<arrKsiegarnieOferty.length; i++) {
				arrKsiegarnieOferty[i].IdOferty = $$("componentSrodka").sources.ofertaCollection.ID;
			};
			sources.arrKsiegarnieOferty.sync();
		
//		sources.arrKsiegarnieOferty.sync();
//		
//		//arrKsiegarnieOferty $$('componentSrodka').sources.ksiegarnia.toArray("nazwa");
//		//$$('componentSrodka').sources.eBook.allEntities();
//		//$$('componentSrodka').sources.ksiegarnia.allEntities();
//		$comp.sources.ksiegarnia.query('Nazwa = :1','M*');// $$(getHtmlId('szukaj')).getValue() + '*');
//		$comp.sources.ksiegarnia.toArray ("nazwa",// firstName, courses.matter", 
//		{
//    			//top = 10, // we want the first ten
//   				orderBy: "nazwa", // sorted by first name and by courses in a sub-array
//				onSuccess: function(event)  // asynchronous call
//    			{ 
//        			arrOferty = event.result; // we retrieve the array of objects
//        			//myArray[1].courses[2].matter;  // access the 3rd course of the 2nd student
//        			 // other processing
//    			}
//		});
//		
		
		
		
	};// @lock

	bZapisz.click = function bZapisz_click (event)// @startlock
	{// @endlock
		
		$$('componentSrodka').sources.ofertaCollection.save({onSuccess:function(event) //  save the current entity
        {
            $$('componentSrodka').sources.ofertaCollection.addEntity($$('componentSrodka').sources.ofertaCollection.getCurrentElement()); 
                // put the current entity in the datasource's entity collection
            }});
		
		
		
		
		$$('componentSrodka_akordeon').expand(1);
	};// @lock

	container19.click = function container19_click (event)// @startlock
	{// @endlock
			
			//ds.startTransaction();
			$$('componentSrodka').sources.ofertaCollection.newEntity();
			$$('componentSrodka').sources.ofertaCollection.DlaWszystkich = false;
			//$$('componentSrodka').sources.ofertaCollection.Data_start = new Date();
			//$$('componentSrodka_checkbox2').sync();
			$$('componentSrodka').sources.ofertaCollection.Gotowa = false;
//			$$('componentSrodka').sources.ofertaCollection.sync();
//			sources.ofertaCollection.newEntity();
//			sources.ofertaCollection.DlaWszystkich = true;
//			sources.ofertaCollection.Gotowa = false;
//			sources.ofertaCollection.save();
			
	};// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
			//rollBack();
			$$('componentSrodka').loadComponent({path: "/komponenty/eBook.waComponent"});
	};// @lock

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
			//commit();
			$$('componentSrodka').sources.eBook.save()
			$$('componentSrodka').loadComponent({path: "/komponenty/eBook.waComponent"});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_container22", "click", container22.click, "WAF");
	WAF.addListener(this.id + "_bZapisz", "click", bZapisz.click, "WAF");
	WAF.addListener(this.id + "_container19", "click", container19.click, "WAF");
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock
	//************************************  RZECZY ODPALANE NA POCZƒÑTKU   ********************************	
	//debugger;
	arrKsiegarnieOferty = oferty.getKsiegarnie();
	sources.arrKsiegarnieOferty.sync();


}// @startlock
return constructor;
})();// @endlock
