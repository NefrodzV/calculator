// Variable that will be used
let x = 0;
let y = 0;
let symbol = 0;
let total = 0;

const add = function() {

}

const substract = function() {

}

const multiply = function() {

}

const divide = function() {

}

const operate = function(int) {
    return int;
}

const DISPLAY = document.getElementById("total");
const updateDisplay = function() {
    DISPLAY.textContent = total;
}
updateDisplay();

let buttons = document.querySelectorAll(".key");
// Adding event listeners to buttons
Array.from(buttons).forEach(button => {
    button.addEventListener('click', function(e){
        console.log(this.id);
        console.log(this.textContent);
    })
})


