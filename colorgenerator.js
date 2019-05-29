var css = document.querySelector('h4');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);

function changeColor(){
    body.style.background =
    "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}
