"use strict";

window.onload = function() {
	var startButton = document.getElementById("start");
	startButton.onclick = funStartButton;
	var stopButton = document.getElementById("stop");
	stopButton.onclick = funStopButton;
	var turboCheck = document.getElementById("turbo");
	turboCheck.onclick = funTurboCheck;
	// stop button disabled
	document.getElementById("stop").disabled = true;

};

var interval;
var repitition = 250;

function funTurboCheck() {

	if (document.querySelector('.isChecked').checked) {

		repitition = 50;

	} else {

		repitition = 250;

	}
	// cleared the interval each time
	clearInterval(interval);
	// repitition = 50;
	funStartButton();
}

function funStartButton() {

	// start,animation button disabled , stop enabled
	document.getElementById("stop").disabled = false;
	document.getElementById("start").disabled = true;
	document.getElementById("animation").disabled = true;

	// for turbo speed check
	/*
	 * if (document.querySelector('.isChecked').checked) { repitition = 50 }
	 * else { repitition = 250 }
	 */

	// for animation
	var selectElement = document.getElementById("animation");
	var index = 0;
	var data = ANIMATIONS[selectElement.value];
	var arrayData = data.split("=====\n");

	// for size

	var selectElement = document.getElementById("size");
	document.getElementById("txtAnimation").style.fontSize = selectElement.value;

	// for repitition

	interval = setInterval(function() {
		document.getElementById("txtAnimation").value = arrayData[index];
		index += 1;
		if (index >= arrayData.length) {
			index = 0;
		}
	}, repitition);

}

function funStopButton() {
	// start,animation enabled
	document.getElementById("start").disabled = false;
	document.getElementById("animation").disabled = false;
	clearInterval(interval);
}
