// console.log("2"+"3");
// console.log(eval("2+3"));

const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = " ";
}
function calculate() {
    if (display.value === " ") {
        alert("please enter a value");
        return;
    }
    let result = eval(display.value);
    display.value = result;
}