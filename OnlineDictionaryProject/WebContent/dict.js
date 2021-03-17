window.onload = function() {
	var searchButton = document.getElementById("searchButton");
	searchButton.onclick = funSearch;
};

function funSearch() {

	var searchText = document.getElementById("searchText").value;

	if (searchText == "") {
		alert("Please enter a word for search!!");
	} else {
		funSearchButton(searchText);
	}

	// alert(searchText);
}

function funSearchButton(searchText) {

	var jsonData = new Object();
	jsonData.text = searchText;

	// alert(JSON.stringify(jsonData));

	$.ajax({

		url : "/OnlineDictionaryProject/dictServlet",
		type : "POST",
		dataType : 'json',
		data : {
			jsonPostRequest : JSON.stringify(jsonData)

		},
		success : function(response) {
			// alert("Success " + response.message);

			if (Object.keys(response).length === 0) {

				$(".result-set").text('');
				alert("No definitions found for this word.");

			} else {
				display(response);
			}
		},
		error : function(xhr, status, error) {
			var errorMessage = xhr.status + ': ' + xhr.statusText;
			alert('Error - ' + errorMessage);
		},

	});

}

function display(response) {

	$(".result-set").text('');

	$.each(response, function(i, name) {
		$(".result-set").append(name + " </br></br>");
	});

}