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

function keyEvent(id) {

    switch (id) {
        case "zero":
            console.log("ZERO WAS CLICKED");
            break;

        case "one":
            console.log("ONE WAS CLICKED");
            break;

        case "two":
            console.log("TWO WAS CLICKED");
            break;
            
        case "three":
            console.log("THREE WAS CLICKED");
            break;

        case "four":
            console.log("FOUR WAS CLICKED");
            break;

        case "five":
            console.log("FIVE WAS CLICKED");
            break;

        case "six":
            console.log("SIX WAS CLICKED");
            break;

        case "seven":
            console.log("SEVEN WAS CLICKED");
            break;

        case "eigth":
            console.log("EIGHT WAS CLICKED");
            break;

        case "nine":
            console.log("NINE WAS CLICKED");
            break;

        case "add":
            console.log("ADD WAS CLICKED");
            break;
        
        case "minus":
            console.log("MINUS WAS CLICKED");
            break;

        case "divide":
            console.log("DIVIDE WAS CLICKED");
            break;

        case "multiply":
            console.log("MULTIPLY WAS CLICKED");
            break;

        
        case "clear":
            console.log("CLEAR WAS CLICKED");
            break;
        case "equals":
            console.log("EQUALS WAS CLICKED");
            break;

        default:
            console.log("UH OH!")
            break;
    }
}

let buttons = document.querySelectorAll(".key");
// Adding event listeners to buttons
Array.from(buttons).forEach(button => {
    button.addEventListener('click', function(e) {
        keyEvent(this.id);
    })
})




