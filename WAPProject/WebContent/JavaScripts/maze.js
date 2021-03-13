$(document).ready(function() {

	$("#start").click(function() {
		$(".boundary").removeClass("youlose");
		$("#status").text("Click the S to begin.");

	});

	$("#maze").mouseleave(function() {
		$(".boundary").addClass("youlose");
		// alert("Sorry, you lost :[");
		$("#status").text("Sorry, you lost :[");
	});

	$(".boundary").mouseenter(function() {
		$(".boundary").addClass("youlose");
		// alert("Sorry, you lost :[");
		$("#status").text("Sorry, you lost :[");
	});

	$("#end").click(function() {
		// alert("You win! :]");
		$("#status").text("You win! :]");

	});

});
