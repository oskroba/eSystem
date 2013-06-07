
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var imageButton1 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
	var imageButtonUsers = {};	// @buttonImage
	var imageButtonWydaw = {};	// @buttonImage
	var richText2 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/eBooki/eBooki.waComponent"});// Add your code here
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/pustyStd.waComponent"});
	};// @lock

	imageButtonUsers.click = function imageButtonUsers_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/wyd-users.waComponent"});// Add your code here
	};// @lock

	imageButtonWydaw.click = function imageButtonWydaw_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/wydawnictwo.waComponent"});// Add your code here
	};// @lock

	richText2.click = function richText2_click (event)// @startlock
	{// @endlock

		$$('componentSrodka').loadComponent({path: "/komponenty/admin/admin.waComponent"});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener(this.id + "_imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener(this.id + "_imageButtonUsers", "click", imageButtonUsers.click, "WAF");
	WAF.addListener(this.id + "_imageButtonWydaw", "click", imageButtonWydaw.click, "WAF");
	WAF.addListener(this.id + "_richText2", "click", richText2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
