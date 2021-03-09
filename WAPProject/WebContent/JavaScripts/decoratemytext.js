window.onload = function() {
	var okButton = document.getElementById("ok");
	okButton.onclick = okayClick;
	var inputCheck = document.getElementById("input");
	inputCheck.onclick = delay;
};

function okayClick() {
	// 1st task
	// document.getElementById("inputText").style.fontSize = "24pt";

	// 2nd task

	document.getElementById("inputText").style.fontSize = (Number(document
			.getElementById("inputText").style.fontSize) + 5)
			+ "pt";

}

function inputClick() {
	document.getElementById("inputText").style = "color: red;text-decoration:underline; font-weight:bold";

}
var myVar;

function delay() {
	
	  myVar = setInterval(okayClick, 500);
	}