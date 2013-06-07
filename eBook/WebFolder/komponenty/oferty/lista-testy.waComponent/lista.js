
(function Component (id) {// @lock

// Add the code that needs to be shared between components here
//	arrKsiegarnieOferty = oferty.getKsiegarnie();
//	//sources.arrKsiegarnieOferty.sync();
//	sources.arrKsiegarnieOferty.sync();
	

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var matrix1 = {};	// @matrix
	var bLewy = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.arrKsiegarnieOferty.sync();// Add your code here
	};// @lock

	matrix1.onChildrenDraw = function matrix1_onChildrenDraw (event)// @startlock
	{// @endlock
		alert("drawing");
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
	
		//************************************  RZECZY ODPALANE NA POCZƒÑTKU   ********************************	
	debugger;	
	//$$('componentSrodka').arrKsiegarnieOferty = oferty.getKsiegarnie();
	arrKsiegarnieOferty = oferty.getKsiegarnie();
	sources.arrKsiegarnieOferty.sync();
	//$$('componentSrodka').sources.arrKsiegarnieOferty.sync();
	//$$('componentSrodka_matrixKsiegarn').hide();
	//$$('componentSrodka_matrixKsiegarn').show();
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_matrix1", "onChildrenDraw", matrix1.onChildrenDraw, "WAF");
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock
	


}// @startlock
return constructor;
})();// @endlock
