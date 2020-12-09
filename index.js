// alert("Hello");

// Actual codes
let number = "0";
let lastDigitPressed = "0";
let toBeOperated = '0';
let lastOperatorPressed = "";
let lastButtonPressedID;


// Add num buttons functionality
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
let buttElemDelete = document.getElementById("bdelete");
buttElemDelete.addEventListener("click", function (){
    // alert(buttElemDelete);
    // Delete last digit from number
    if(number.length > 1){
        number = number.slice(0, -1);
    }
    else{
        number = 0;
    }
    updateNumberDisplay();
})

// Add clear button functionality
let buttElemClear = document.getElementById("bclear");
buttElemClear.addEventListener("click", function (){
    // Reset everything
    number = 0;
    toBeOperated = "0";
    //! 
    // Add reset for memory store and update subdisplay
    updateNumberDisplay();
})



// Add operators button functionalites
let buttElemOperatorsCollection = document.getElementsByClassName("operator");
let buttElemOperators = Array.from(buttElemOperatorsCollection);
buttElemOperators.forEach(element => {
    element.addEventListener("click", function (){
        //T
        // alert(element.getAttribute("data-operator"));
        // Put number on sub-display
        lastOperatorPressed = element.getAttribute("data-operator");
        updateSubDisplay();
    })
});

// Warning: This function should be last event adition
// Add lastButtonpressed functionality to all button
let buttElemsAllButtonsCollection = document.getElementsByTagName("button");
let buttElemsAllButtons = Array.from(buttElemsAllButtonsCollection);
buttElemsAllButtons.forEach( element => {
    element.addEventListener("click",
    function (){
        //T
        lastButtonPressedID = element.id;
        alert(lastButtonPressedID);
    });
});




















// Functions

function updateSubDisplay(){
    if(lastButtonPressedID == "b0" && number == '0'){
        // toBeOperated += number + ;
    }
    alert(lastButtonPressedID);
 }

function addLastDigitPressedToNumber(){
    //! 
    // check the number of digits if valid
    if (number.length >= 14) {
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

