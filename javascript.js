// Variable that will be used
let currentNumber = "0";
let previousNumber = null;
let symbol = null;

const add =  function(x,y) {
    let total = Number(x) + Number(y)
    return total.toString();
}

const multiply = function(x,y) {
    let total = Number(x) * Number(y);
    return total.toString();
}

const substract = function(x,y) {
    let total = parseFloat(x) - parseFloat(y);
    console.log(total);
    return total.toString();
}

const divide = function(x,y) {
    let total = Number(x) / Number(y);
    return total.toString();
}


let total = document.querySelector("#total");

/**Updates the calculator display */
const update = function() {
    total.textContent = currentNumber;
    console.log("total div: " + total.textContent);
}

update();

//** Run depending on the symbol that was pressed */
const operate = function() {
    console.log("previous number is: " + previousNumber);
    console.log("current number is :" + currentNumber);
    switch (symbol) {
        case "+":
            currentNumber = add(previousNumber, currentNumber);
            break;

        case "x":
            currentNumber = multiply(previousNumber, currentNumber);
            break;
        
        case "-":
            currentNumber = substract(previousNumber, currentNumber);
            break;

        case "\u00F7":
            currentNumber = divide(previousNumber, currentNumber);
            console.log("Division running...");
            break;
    
    
        default:
            console.log("UH OH! Operate function error!");
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
                break;

            case "percentage":
                calculatePercent();
                break;

    
            default:
                console.log("UH OH! Button press error!");
                break;
        }
        
    })
})

function calculatePercent() {
    currentNumber = currentNumber / 100;
    update();
}

/**Updates the symbol if a symbol button is pressed and moves the current value
 * to be stored in the previous value
 */
function updateSymbol(buttonTarget) {
    if (symbol == null) {
        previousNumber = currentNumber;
        currentNumber = "0";
        symbol = buttonTarget.textContent;
    } else if(symbol != null && currentNumber == "0") {
        // When a symbol is already pressed but no number has been entered update the symbol
        symbol = buttonTarget.textContent;
        console.log("Updating symbol when current number is 0");
    } else {
        operate();
        previousNumber = currentNumber;
        currentNumber = "0";
        symbol = buttonTarget.textContent;
        console.log("New updated symbol" + symbol);
    }
}

/** If the number is cero make the current number equals the button text if not then, append the button 
 * text content.
*/
function appendNumber(buttonTarget) {
    if (currentNumber == "0" || currentNumber == "") {
        currentNumber = buttonTarget.textContent;
    } else {
        currentNumber = currentNumber + buttonTarget.textContent;
    }
    update();
}
/** Does the operation and reset the values of the previous number and symbol */
function equals() {
    if (previousNumber !== null && symbol !== null) {
        operate();
        symbol = null;
        previousNumber = null;
    }
}

/** Resets everything in the programs and updates the display */
function clearAll() {
    currentNumber = "0";
    previousNumber = null;
    symbol = null;
    update();
}

