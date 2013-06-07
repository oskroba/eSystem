
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var documentEvent = {};	// @document
	var button6 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button4 = {};	// @button
	var bSave = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		resetForm();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		usersList = users.getUsers();
		sources.usersList.sync();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
			var result = users.deleteUser(sources.user.name, updateGrid);
			if (result) {
				updateGrid();
			} else {
				alert("An error occured when suppressing the user : " + sources.user.name + ", please check the solution logs for more informations");
			}
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var selectedEntity = $$("dataGrid1").dataSource.getCurrentElement();
		user.name = selectedEntity.name;
		user.fullName = selectedEntity.fullName;
		user.password = "";
		user.id = selectedEntity.ID;
		sources.user.sync();
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		resetForm();
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		if (sources.user.id === undefined) {
			var result = users.addUser(sources.user.name, sources.user.password, sources.user.fullName);
			if (result != null) {
				usersList.push({ID: result, fullName: sources.user.fullName, name: sources.user.name});
				sources.usersList.sync();
				resetForm();
			} else {
				alert("An error occured when adding the user : " + sources.user.name + "\n it seems the user already exist in the directory, please check the solution logs for more informations");
			}
		} else {
			result = users.updateUser(sources.user.id, sources.user.name, sources.user.password, sources.user.fullName);
			if (result) {
				usersList.some(function(item){
					if (item.ID == sources.user.id) {
						item.name = sources.user.name;
						item.fullName = sources.user.fullName;
						
						resetForm();
						sources.usersList.sync();
						return false;
					}
					return true;
				});
			} else {
				alert("An error occured when updating the user : " + sources.user.name + "\n it seems the user doesn't exist in the directory, please check the solution logs for more informations");
			}
		}
	};// @lock
	
	
	function resetForm() {
		user.name = "";
		user.fullName = "";
		user.password = "";
		user.id = undefined;
		sources.user.sync();
	}
	
	function updateGrid() {
		resetForm();
		usersList = users.getUsers(); // Retrieve all the users from the server
		sources.usersList.sync();
	}

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("bSave", "click", bSave.click, "WAF");
// @endregion
};// @endlock
