
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var container22 = {};	// @container
	var bZapisz = {};	// @button
	var container19 = {};	// @container
	var bLewy = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	container22.click = function container22_click (event)// @startlock
	{// @endlock
		//arrKsiegarnieOferty $$('componentSrodka').sources.ksiegarnia.toArray("nazwa");
		//$$('componentSrodka').sources.eBook.allEntities();
		//$$('componentSrodka').sources.ksiegarnia.allEntities();
		$comp.sources.ksiegarnia.query('Nazwa = :1','M*');// $$(getHtmlId('szukaj')).getValue() + '*');
		$comp.sources.ksiegarnia.toArray ("nazwa",// firstName, courses.matter", 
		{
    			//top = 10, // we want the first ten
   				orderBy: "nazwa", // sorted by first name and by courses in a sub-array
				onSuccess: function(event)  // asynchronous call
    			{ 
        			arrKsiegarnieOferty = event.result; // we retrieve the array of objects
        			//myArray[1].courses[2].matter;  // access the 3rd course of the 2nd student
        			 // other processing
    			}
		});
		
		
		
		
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
	WAF.addListener(this.id + "_container22", "click", container22.click, "WAF");
	WAF.addListener(this.id + "_bZapisz", "click", bZapisz.click, "WAF");
	WAF.addListener(this.id + "_container19", "click", container19.click, "WAF");
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
