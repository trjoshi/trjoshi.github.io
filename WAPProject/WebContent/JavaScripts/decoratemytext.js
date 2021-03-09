window.onload = function() {
	// var myVar;
	var okButton = document.getElementById("ok");
	okButton.onclick = delay;
	var inputCheck = document.getElementById("input");
	inputCheck.onclick = inputClick;
};

function okayClick() {
	// 1st task
	// document.getElementById("inputText").style.fontSize = "24pt";

	// 2nd task

	txt = document.getElementById("inputText");
	style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	currentSize = parseFloat(style);
	txt.style.fontSize = (currentSize + 2) + 'px';

}

function inputClick() {
	document.getElementById("inputText").style = "color: red;text-decoration:underline; font-weight:bold; ";
	document.getElementById("body").style = "background-image:url('images/background.gif');";
	document.getElementById("body").style.backgroundRepeat = "repeat";

}

function delay() {

	setInterval(okayClick, 500);
}
