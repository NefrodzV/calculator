// Variable that will be used
let currentNumber = "0";
let previousNumber = null;
let symbol = null;

const add =  function(x,y) {
    let total = Number(x) + Number(y)
    return total.toString();
}


let total = document.querySelector("#total");

const update = function() {
    total.textContent = currentNumber;
}

update();

const operate = function() {
    console.log("previous number is: " + previousNumber);
    console.log("current number is :" + currentNumber);
    switch (symbol) {
        case "+":
            currentNumber = add(previousNumber, currentNumber);
            break;
    
        default:
            break;
    }
    console.log("Run operation with " + symbol);
    update();
}
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
                appendNumber(buttonTarget);
                break;

            case "symbol":
                updateSymbol(buttonTarget);
                break;

            case "clear":
                clearAll();
                break;

            case "equals":
                equals();
        
            default:
                break;
        }
        
    })
})

function updateSymbol(buttonTarget) {
    if (symbol == null) {
        previousNumber = currentNumber;
        currentNumber = "0";
        symbol = buttonTarget.textContent;
    } else {
        operate();
        previousNumber = currentNumber;
        currentNumber = "0";
        symbol = buttonTarget.textContent;
        console.log("New updated symbol" + symbol);
    }
}

function appendNumber(buttonTarget) {
    if (currentNumber == "0" || currentNumber == "") {
        currentNumber = buttonTarget.textContent;
    } else {
        currentNumber = currentNumber + buttonTarget.textContent;
    }
    update();
}

function equals() {
    if (previousNumber !== null && symbol !== null) {
        operate();
        symbol = null;
        previousNumber = null;
    }
}

function clearAll() {
    currentNumber = "0";
    previousNumber = null;
    symbol = null;
    update();
}

