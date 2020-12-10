// alert(eval(789))

// Actual codes
let number = "0";
let toBeOperated = '0';
let answer;
let lastDigitPressed = undefined;
let lastOperatorPressed = undefined;
let lastButtonPressed;
let lastOperatorOrNumberButtonPressed;

// Color changer
// let inputElemColorPicker = document.getElementById("calculatorColorPicker");
// inputElemColorPicker.addEventListener("close", function (){
//     //  alert("hi");

// });

// Add number buttons functionality
// * add digit to last item of number typed
// * replace all numbers if numbers was an answer
let buttonElementsCollection = document.getElementsByClassName("numbers");
let buttonElements = Array.from(buttonElementsCollection);
buttonElements.forEach(elementd => {
    elementd.addEventListener("click", function (){
        //T 
        //alert(elementd.innerHTML);
        // Get the digit only from the button ID
        lastDigitPressed = elementd.id.substring(1);
        //T
        // alert(lastDigitPressed);
        // alert(number);
        addLastDigitPressedToNumber();
    })
});

// Add delete button functionality
// * delete everylast digit from number
// * delete whole number if number was an answer before
let buttElemDelete = document.getElementById("bdelete");
buttElemDelete.addEventListener("click", function (){
    // alert(buttElemDelete);
    // Delete last digit from number
    if(number.length > 1){
        number = number.slice(0, -1);
    }
    else{
        number = 0;
        // lastDigitPressed = undefined;
    }
    updateNumberDisplay();
})

// Add clear button functionality
let buttElemClear = document.getElementById("bclear");
buttElemClear.addEventListener("click", function (){
    // Reset everything
    number = 0;
    toBeOperated = "0";
    lastDigitPressed = undefined;
    lastOperatorPressed = undefined;
    //! 
    // Add reset for memory store and update subdisplay
    updateNumberDisplay();
    updateSubDisplay();
})



// Add operators button functionalites
//TODO: add numbers to toBeoperated or replace last operator if previous button is still operator
//TODO: evaluate current toBeOperated
let buttElemOperatorsCollection = document.getElementsByClassName("operator");
let buttElemOperators = Array.from(buttElemOperatorsCollection);
buttElemOperators.forEach(element => {
    element.addEventListener("click", function (){
        //T
        // alert(element.getAttribute("data-operator"));
        // Put number on sub-display
        lastOperatorPressed = element.getAttribute("data-operator");
        processOperatorClicked();
    })
});


// Add equal button functionality
// 
let buttElemEqual = document.getElementById("bequals");
buttElemEqual.addEventListener("click", function (){
    evaluateToBeOperated();
});


// Warning: This function should be last event adition
// TODO Add lastButtonpressed functionality to all button
let buttElemsAllButtonsCollection = document.getElementsByTagName("button");
let buttElemsAllButtons = Array.from(buttElemsAllButtonsCollection);
buttElemsAllButtons.forEach( element => {
    element.addEventListener("click",
    function (){
        //T
        lastButtonPressed = element;
        // alert(lastButtonPressed.id);
        if (element.className == "operator") {
            lastOperatorOrNumberButtonPressed = element;
        }
        else if(element.className == "numbers"){
            lastOperatorOrNumberButtonPressed = element;
        }
        // alert(lastOperatorOrNumberButtonPressed.id);
    });
});




















// Functions

function evaluateToBeOperated(){
    // if(lastButtonPressed.className == "operator"){
        toBeOperated = toBeOperated.slice(0, -1);
    // }
    // else if
    alert(toBeOperated);
    answer = eval(toBeOperated);
    alert(answer);
}

function updateSubDisplay(){
    let pElemSubDisplay = document.getElementById("p-subDisplay");
    pElemSubDisplay.textContent = toBeOperatedActualDisplay(toBeOperated);
}

//!
function toBeOperatedActualDisplay(toBeOperatedString){
    
    return toBeOperatedString;
}

//!
function processOperatorClicked(){
    
    
    if(lastOperatorOrNumberButtonPressed.className == "operator"){
        if(lastDigitPressed != undefined){
            //alt toBeOperated
            // toBeOperated = toBeOperated.slice(0, -2);
            toBeOperated = toBeOperated.slice(0, -1);
            //alt toBeOperated
            // toBeOperated += " " + lastOperatorPressed;
            toBeOperated += lastOperatorPressed;
        }
    }
    else if(lastOperatorOrNumberButtonPressed.className == "numbers"){
        
        if (toBeOperated == "0") {
            toBeOperated = "";
        }

        if(lastOperatorOrNumberButtonPressed.id == "b0" && number == '0'){
            //alt toBeOperated
            // toBeOperated += " " + number + " " + lastOperatorPressed;
            toBeOperated += number + lastOperatorPressed;
        }

        else{
            //alt toBeOperated
            // toBeOperated += " " + number + " " + lastOperatorPressed;
            toBeOperated += number + lastOperatorPressed;
        }
    }

    updateSubDisplay();
    number = '0';
    updateNumberDisplay();
 }

function addLastDigitPressedToNumber(){
    //! 
    // check the number of digits if valid
    if (number.length >= 20) {
        // alert("max digits reached");
        return;
    }

    if (number != "0") {
        number += lastDigitPressed;
    }
    else{
        number = lastDigitPressed;
    }
    
    updateNumberDisplay();
}

function updateNumberDisplay(){
    let pElemDisplay = document.getElementById("p-mainDisplay");
    pElemDisplay.textContent = number;
}

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(x, y, operator){
    if(operator == '+')
        return add(x, y);
        
    if(operator == '-')
        return subtract(x, y);

    if(operator == '*')
        return multiply(x, y);

    if(operator == '/')
        return divide(x, y);
    else 
        return undefined;
}
