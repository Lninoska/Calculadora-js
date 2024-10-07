
// Obtiene el valor de cualquier botón
function getValue(buttonValue) {
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value = screen + buttonValue;
}

// Ingresa el valor del botón cero.
function getZero() {
    var key = "0";
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value = screen + key;
}

//Agrega un decimal.
function addDecimal() {
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen + "."
    console.log(screen)
}

//Borra o limpia toda la pantalla.
function clearScreen() {
    document.getElementById("screen").value = "";
}

//Resuelve las operaciones aritméticas
function solve() {
    var screen = document.getElementById("screen").value;
    console.log("solve " + screen)
    console.log("solve " + eval(screen))
    var screen = document.getElementById("screen").value = eval(screen);

}