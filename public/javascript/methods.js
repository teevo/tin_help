$(document).ready(function() {
    $("#calculate").click(function() {
		var parameters = {
			num1: $("#firstNum").val(),
			num2: $("#secondNum").val()
		};

		// $.get('/calculating', parameters, function(response) {
		// 	$("#answer").val(response.ans);
		// });

		$.post('/methods', parameters, function(response) {
			$("#answer").val(response.ans);
		});
	});
});