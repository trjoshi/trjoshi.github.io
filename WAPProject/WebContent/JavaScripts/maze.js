$(document).ready(function() {

	$("#start").click(function() {
		$(".boundary").removeClass("youlose");
		$("#status").text("Game Started");

		// event for mouse enter in the div section

		$(".boundary").mouseenter(function() {
			$(".boundary").addClass("youlose");
			// alert("Sorry, you lost :[");
			$("#status").text("Sorry, you lost :[ Please press S to restart the game.");
			return false;
		});

		// event for mouse leave in the div section

		$("#maze").mouseleave(function() {
			$(".boundary").addClass("youlose");
			// alert("Sorry, you lost :[");
			$("#status").text("Sorry, you lost :[ Please press S to restart the game.");
			return false;
		});

		// event for mouse end

		$("#end").click(function() {
			if ($("#status").text() == "Game Started") {
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
			}
		});

	});

});