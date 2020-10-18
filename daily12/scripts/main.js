// scripts/main.js
document.getElementById("myButton").onmouseup = changeLabelText;


function changeLabelText() {
	var label1 = document.getElementById("myLabel");
	label1.innerHTML = "Paradigms class";
}
