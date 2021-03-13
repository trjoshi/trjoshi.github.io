$(document).ready(function() {

	$("#start").click(function() {
		$(".boundary").removeClass("youlose");
		$("#status").text("Click the S to begin.");

		// event for mouse enter in the div section

		$(".boundary").mouseenter(function() {
			$(".boundary").addClass("youlose");
			// alert("Sorry, you lost :[");
			$("#status").text("Sorry, you lost :[");
		});

		// event for mouse leave in the div section

		$("#maze").mouseleave(function() {
			$(".boundary").addClass("youlose");
			// alert("Sorry, you lost :[");
			$("#status").text("Sorry, you lost :[");
		});

		// event for mouse end

		$("#end").click(function() {
			// alert("You win! :]");
			$("#status").text("You win! :]");

			$(".boundary").mouseenter(function() {
				$(".boundary").removeClass("youlose");
				// alert("Sorry, you lost :[");
				$("#status").text("You win! :]");
			});
			$("#maze").mouseleave(function() {
				$(".boundary").removeClass("youlose");
				// alert("Sorry, you lost :[");
				$("#status").text("You win! :]");
			});

		});
	});

});