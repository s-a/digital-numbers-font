(function(){

	var i = -201;
	window.onload = function() {
		var display = document.getElementById("testDrive2");
		window.setInterval(function() {
			display.innerHTML = (i++).toString();
		}, 200);
	};


})();