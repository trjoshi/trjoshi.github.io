var account = {}; // store the array of object in key value pair

var newAccount = (function() {
	var keys = [];   // for adding key accountName in array
	var values = []; // for adding value accountBalance in array
  var accountName; 
  var accountBalance;

	function createAccount() {
		accountName = document.getElementById("accountName").value;
		accountBalance = document.getElementById("depositAmount").value;
		keys.push(accountName);
		values.push(accountBalance);
		
		// added the accountName, accountBalance to the account objects
		
		for(var i = 0; i < keys.length; i++){ 			
			account[keys[i]] = values[i]; 
	    } 		
		showOnTextArea();
	}
	 createAccount();
	 
	 function showOnTextArea() {
	 		        var string="";
	 	for (var key of Object.keys(account)) {		
	 		string +="Account Name: "
	 		+ key + ", Balance: " + account[key] +'\n';			
	     }
	 	document.getElementById("displaySection").innerHTML =string; 
	 }

});
