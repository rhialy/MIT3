
var button = document.getElementById("button");

button.onclick = function () {
		
	var el = document.getElementById("mainbody");

	if (el.style.display !== 'none') {
		el.style.display = 'none';
	} else {
		el.style.display = 'block';
	}	
};
