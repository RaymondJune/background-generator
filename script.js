var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColors() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
}

function generateRandomColor() {
	var color = "#";
	var letters = "0123456789abcdef"
	for(var i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}

// css.textContent = "linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")" + ";";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomColors);