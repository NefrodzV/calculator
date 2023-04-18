// Variable that will be used
let currentNumber = "0";
let previousNumber = null;
let symbol = null;

let operate = function() {
    console.log("Run operation with " + symbol);
}

let total = document.querySelector("#total");

const update = function() {
    total.textContent = currentNumber;
}

update();
const keyEvent  = function(key) {
   
}
let buttons = document.querySelectorAll(".key");
// Adding event listeners to buttons
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.name);
        let buttonTarget = event.target;
        let buttonName = buttonTarget.name;
        switch (buttonName) {
            case "number":
                if(currentNumber == "0" || currentNumber == "") {
                    currentNumber = buttonTarget.textContent;
                } else {
                    currentNumber = currentNumber + buttonTarget.textContent;
                }
                break;

            case "symbol":
                if(symbol == null) {
                    symbol = buttonTarget.textContent;
                } else {
                    operate();
                    symbol = buttonTarget.textContent;
                    console.log("New updated symbol" + symbol);
                }

                break;

            case "clear":
                currentNumber = "0";
                previousNumber = null;
                symbol = null; 
                break;
        
            default:
                break;
        }
        update();
    })
})




