//SCOPE Testers
//TEST Global testers
//78/6-5/6*3/5-6/4*2/5
//11.9
// let a = (((((((((12)+7)-5)*3))))));
// alert(a);
// alert("heaven".replace("hea",""))
// alert("fadf".includes("df"));
// alert(_getLastCharacterFromString("ghhsjgsd"));
// alert(eval("7-(-7)"));
// setInterval(() => {//
// }, 3000);
// let divElemCalc = document.getElementById('div-calculator');
// //TEST
// // alert(divElemCalc);
// divElemCalc.addEventListener('mousedown',
// function (e){
//     //TODO checking 
//     // TEST
//     console.log(e.offsetX);
//     // alert(e.offsetX);
//     // alert(e.pageX);
// });


//TODO round up number to prevent overflowing in screen

//SCOPE Variable declarations
let number = "0";
let pemdasToBeOperated = '0';
let nonPemdasToBeOperated = '0';
let answer;
let memory = undefined;
let lastDigitPressed = undefined;
let lastOperatorPressed = undefined;
let lastButtonPressed;
let lastOperatorOrNumberButtonPressed = undefined;
let mainDisplayIsAnswer = false;
let isNightMode = false;


// SCOPE give user information about calculator
alert("Tip:\n1. You can use night mode.\n2. You can resize the calculator.\n3. You can pick the color of the calculator(in realtime)");


// SCOPE Realtime Color changer
let inputElemColorPicker = document.getElementById('input-calculatorColorPicker');
let divElemCalculator = document.getElementById("div-calculator");
let divElemColorPicker = document.getElementById("div-calculatorColorPicker");

// DONE Put default color of calculator
inputElemColorPicker.value = '#444444';

setInterval(() => {
    // TEST
    // alert("dfsdfs");
    divElemCalculator.style.backgroundColor = inputElemColorPicker.value;
    divElemColorPicker.style.backgroundColor = inputElemColorPicker.value;
}, 100);



// SCOPE Night mode changer
let divSun = document.getElementById("div-sun");
let divMoon = document.getElementById("div-moon");


divSun.addEventListener('click',
function (){
    changeNightMode();
}
);

divMoon.addEventListener('click',
function (){
    changeNightMode();
}
);


// SCOPE pressing the div color picker on screen
divElemColorPicker.addEventListener("click", function (){
    // TEST
    // alert(divElemColorPicker.id);
    // let x = document.getElementById('div-display');
    // alert(x.style.overflowX);

    // DONE will activate the input element click also
    let inputElemColorPicker = document.getElementById('input-calculatorColorPicker');
    inputElemColorPicker.click();
    
    // TEST
    // alert(inputElemColorPicker.value);
});
// // ADD color darker or whitener
// // ADD when pressed buttons will darker the curent bg
    




//SCOPE Number buttons functionality
let buttonElementsCollection = document.getElementsByClassName("numbers");
let buttonElements = Array.from(buttonElementsCollection);
//DONE traverse all buttons of type numbers
buttonElements.forEach(elementd => {
    elementd.addEventListener("click", function (){
        //TEST
        //alert(elementd.innerHTML);
        //DONE Get the digit only from the button ID
        lastDigitPressed = elementd.id.substring(1);
        //TEST
        // alert(lastDigitPressed);
        // alert(number);
        //DONE what to do after pressing numbers
        addLastDigitPressedToNumber();
    })
});


//SCOPE delete button functionality
let buttElemDelete = document.getElementById("bdelete");
buttElemDelete.addEventListener("click", function (){
    //TEST
    // alert(buttElemDelete);
    //DONE cannot delete if its quick result
    if (mainDisplayIsAnswer) {
        return;
    }
    //DONE Delete last digit from number if its more than 2 digits
    if(number.length > 1){
        number = number.slice(0, -1);
    }
    else{
        number = 0;
        // lastDigitPressed = undefined;
    }
    updateNumberDisplay();
})


//SCOPE clear button functionality
let buttElemClear = document.getElementById("bclear");
buttElemClear.addEventListener("click", function (){
    resetOptionMainDisplayOrSubOrOtherVariablesOrMemory(true,true,true);
})


//SCOPE operators button functionalites
let buttElemOperatorsCollection = document.getElementsByClassName("operator");
let buttElemOperators = Array.from(buttElemOperatorsCollection);
buttElemOperators.forEach(element => {
    element.addEventListener("click", function (){
        //TEST data-operator attrib
        // alert(element.getAttribute("data-operator"));
        //SCOPE what to do when operator button is pressed
        lastOperatorPressed = element.getAttribute("data-operator");
        processOperatorClicked();
    })
});


//DONE
//SCOPE dot button functionality
let buttElemDot = document.getElementById("bpoint");
buttElemDot.addEventListener("click", function (){
    addDotToNumberIfPossible();
});


//SCOPE plus minus button functionality
let buttElemPlusMinus = document.getElementById("bPlusMinus");
buttElemPlusMinus.addEventListener("click", function (){
    negateNumber();
});


//SCOPE memory store button functionality
let buttElemMemoryStore = document.getElementById("bms");
buttElemMemoryStore.addEventListener("click", function (){
    memoryStore();
});


//SCOPE memory recall button functionality
let buttElemMemoryRecall = document.getElementById("bmr");
buttElemMemoryRecall.addEventListener("click", function (){
    memoryRecall();
});


//SCOPE add keyboard support by
 document.addEventListener("keydown",function (e){
    //TEST
    // alert(e.key);
    // alert(typeof(e.key));
    // alert(Number(e.key));
    // const cb = document.getElementById('b1');
    // cb.click();
    // key = e.key;

    let key = '';
    key = e.key;
    
     switch (key) {
         case 'Backspace':
             clickTheElementId_('bdelete');
             break;
         case '+':
             clickTheElementId_('badd');
             break;
         case '-':
             clickTheElementId_('bminus');
             break;
         case '/':
             clickTheElementId_('bdivide');
             break;
         case '*':
             clickTheElementId_('bmultiply');
             break;
         case '=':
             clickTheElementId_('bequals');
             break;
         case '.':
             clickTheElementId_('bpoint');
             break;
         case 'Escape':
             clickTheElementId_('bclear');
             break;

         default:
             break;
     }

    //NOTE This code should be last in this section
    //DONE like numbers being pressed
    if (Number(key) != NaN) {
        clickTheElementId_('b' + key.toString());
    }
    

});


//NOTE This function should be last added event
//DONE
//SCOPE lastButtonpressed functionality to all button
let buttElemsAllButtonsCollection = document.getElementsByTagName("button");
let buttElemsAllButtons = Array.from(buttElemsAllButtonsCollection);
buttElemsAllButtons.forEach( element => {
    element.addEventListener("click",
    function (){
        //TEST
        // alert(lastButtonPressed.id);
        
        lastButtonPressed = element;
        if (element.className == "operator") {
            lastOperatorOrNumberButtonPressed = element;
        }
        else if(element.className == "numbers"){
            lastOperatorOrNumberButtonPressed = element;
        }

        //TEST
        // alert(lastOperatorOrNumberButtonPressed.id);
    });
});


//FUNCTIONS DECLARATIONS

//SCOPE change night mode by
function changeNightMode(){
    if(isNightMode){
        // DONE and change document bg background and the visibility of the moon and sun accordingly
            divSun.style.visibility = 'hidden';
            // REMOVE
            // divMoon.style.visibility = 'visible';
            document.body.style.backgroundColor = '#000000';
        }
        else{
            // REMOVE
            // divMoon.style.visibility = 'hidden';
            divSun.style.visibility = 'visible';
            document.body.style.backgroundColor = '#ffffff';
        }
        isNightMode = !isNightMode;
}

//SCOPE memoryRecall by
function memoryRecall(){
    //DONE checking if memory is not undefined
    if(memory != undefined){
        //DONE before putting its value to the main display (updater)
        number = memory;
        updateNumberDisplay();
        //DONE and updating the variable stating main display is an answer
        mainDisplayIsAnswer = false;
    }
}


//SCOPE memoryStore by
function memoryStore(){
    //DONE replacing the memory var by the number in main display
    memory = number;
    //TEST
    // alert(memory);
}


//SCOPE clickTheElementId by
function clickTheElementId_(eId){
    //DONE getting the id of element
    let elem = document.getElementById(eId);
    //DONE and call click on it
    elem.click();
}


//SCOPE negateNumber by
function negateNumber(){
    //TEST
    // alert(number);

    //DONE then check if number is not equal to zero
    if(number != '0'){
        //TEST
        // alert("not zero entered");
        //DONE before removing the dash symbol if contains already
        if(number.includes("-")){
            //TEST
            // alert("contains dash so");
            number = number.replace("-","");
        }
        //DONE or adding dash symbol if it does not contain
        else{
            //TEST
            // alert("not contains dash so");
            number = '-' + number;
        }
        //DONE and finally updating the display after changing the number
        mainDisplayIsAnswer = false;
        updateNumberDisplay();
    }
}


//SCOPE addDotToNumberIfPossible by
function addDotToNumberIfPossible(){
    //DONE checking if number is not a result of prev operation
    if (!mainDisplayIsAnswer) {
        //DONE and if number does not contain dot already
        if(!number.includes(".")){
            //DONE before adding the dot
            number += ".";
            updateNumberDisplay();
        }
    }
    //DONE in case contains dot already then don't put
    //DONE and in case a result of previous operation then reset number to zero and add dot after
    else{
        //DONE make last digit pressed is 0
        lastDigitPressed = '0';
        addLastDigitPressedToNumber();
        //DONE call dot button is pressed
        addDotToNumberIfPossible();
    }
}


//SCOPE resetOptionMainDisplayOrSubOrOtherVariablesOrMemory
function resetOptionMainDisplayOrSubOrOtherVariablesOrMemory(includeMainDisplay,includeSubDisplay,includeOtherVariables){
    //DONE Reset
    if(includeMainDisplay){
        number = 0;
        updateNumberDisplay();
        mainDisplayIsAnswer = false;
    }
    if (includeSubDisplay) {
        pemdasToBeOperated = "0";
        updateSubDisplay();
        nonPemdasToBeOperated = '0';
    }
    if (includeOtherVariables) {
        lastDigitPressed = undefined;
        lastOperatorPressed = undefined; 
        mainDisplayIsAnswer = false;
    }

}


//SCOPE Reset exclude memory if equal symbol exist
function _resetSubdislayIfThereIsEqualSymbolIsThere(){
    //DONE by checking the last character if it is equal symbol
    let lastCharacter = _getLastCharacterFromString(pemdasToBeOperated);
    if(lastCharacter == "="){
        //DONE and resetting everything excluding main and memory if it is
        resetOptionMainDisplayOrSubOrOtherVariablesOrMemory(false,true,false);
        return true;
    }
    return false;
}


//DONE
//SCOPE return last character from string
function _getLastCharacterFromString(text){
    let lastCharacter = text.replace(text.slice(0,-1), '');
    return lastCharacter;
}

//DONE
//SCOPE remove operator symbols at last if there is any by
function _removeAnyOperatorSymbolFromLast(toBeOperatedTemp){
    //DONE checking the last character if an operator symbol
    let lastCharacter = _getLastCharacterFromString(toBeOperatedTemp);
    //TEST check last character
    // alert("lastCharacter: " + lastCharacter);

    if(lastCharacter == '=' || lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '/' || lastCharacter == '*'){
        //DONE and removing the symbol if it is 
        toBeOperatedTemp = toBeOperatedTemp.slice(0,-1);
    }

    return toBeOperatedTemp;
}

//DONE
//SCOPE Answer displayer
function displayAnswer(){
    //DONE display answer and update isAnswer variable
    number = answer;
    updateNumberDisplay();
    mainDisplayIsAnswer = true;
}


//DONE
//SCOPE Evaluate the answer
function evaluateTheAnswer(){

    let toBeOperatedTemp = nonPemdasToBeOperated;

    //TEST Display to be operated
    // alert("before validated: " + nonPemdasToBeOperated);

    //SCOPE toBeOperated js statement validator

    toBeOperatedTemp = _removeAnyOperatorSymbolFromLast(toBeOperatedTemp);

    //TEST Display to be operated after validation
    // alert("validated: " + toBeOperatedTemp);

    //SCOPE evaluating answer
    //ADD Option for PEMDAS and Non-PEMDAS way of evaluation
    //DONE Non PEMDAS way evaluation
    answer = eval(toBeOperatedTemp).toString();

    //TEST Display answer
    // alert("answer: "+ answer);

    //DONE Update main display for quick result
    displayAnswer();
}

//DONE
//SCOPE Update sub display
function updateSubDisplay(){
    let pElemSubDisplay = document.getElementById("p-subDisplay");
    pElemSubDisplay.textContent = _toBeOperatedActualDisplay(pemdasToBeOperated);
}

//UNFIN
//SCOPE Changer for display such as multiply symbol * to x symbol
//TODO maybe search for regular expressions to complete this
function _toBeOperatedActualDisplay(toBeOperatedString){
    
    return toBeOperatedString;
}

//SCOPE Todo when operator buttons are pressed
function processOperatorClicked(){
    //ADD what if cascading equal button press

    //DONE evaluate number itself before operating in it
    number = eval(number).toString();

    //DONE reset subdisplay if there is equal symbol
    let isEqualSymbolFound = _resetSubdislayIfThereIsEqualSymbolIsThere();

    if(true){//WARN Should it be here?
        //SCOPE When previous pressed button is a number
        if(lastOperatorOrNumberButtonPressed.className == "numbers" || isEqualSymbolFound || !mainDisplayIsAnswer){//WARN !mainDisplayIsAnswer should be here?
            //TEST prev is number
            // alert("prev number entered");
    
            if (pemdasToBeOperated == "0"){
                pemdasToBeOperated = "";
    
                //DONE Update nonPemdas too
                nonPemdasToBeOperated = "";
            }
            
            //DONE Add number 0 to be operated with the operator chosen if previous pressed number is 0
            if(lastOperatorOrNumberButtonPressed.id == "b0" && number == '0'){
                pemdasToBeOperated += number + lastOperatorPressed;
    
                //DONE update nonPemdas too
                nonPemdasToBeOperated = "(" + nonPemdasToBeOperated + '(' +number+')' + ")" + lastOperatorPressed;
            }
    
            //DONE Add typed number to be operated with the operator chosen
            else{
                pemdasToBeOperated += number + lastOperatorPressed;
    
                //DONE update nonPemdas too
                nonPemdasToBeOperated = "(" + nonPemdasToBeOperated + '(' +number+')' + ")" + lastOperatorPressed;
            }
        }

        else if(lastOperatorOrNumberButtonPressed.className == "operator"){
            //TEST prev is operator
            // alert("prev operator entered");

            //DONE Change only the operator if previous button pressed is operator
            if(lastDigitPressed != undefined){
                //UNFIN what if with spaces? still slice 0,-1?

                //DONE check last char and remove if its operator
                pemdasToBeOperated = _removeAnyOperatorSymbolFromLast(pemdasToBeOperated);
                pemdasToBeOperated += lastOperatorPressed;

                //DONE update non pemdas too
                //DONE remove previous operator and pair of parentheses
                nonPemdasToBeOperated = nonPemdasToBeOperated.slice(1, -2);
                nonPemdasToBeOperated = "("+ nonPemdasToBeOperated +")"+ lastOperatorPressed;
            }
        }
        
        //TEST
        // alert(nonPemdasToBeOperated);
        updateSubDisplay();
        evaluateTheAnswer();
    }
}

 //DONE
 //SCOPE Update display as numbers are typed
function addLastDigitPressedToNumber(){
    
    _resetSubdislayIfThereIsEqualSymbolIsThere();
    
    //DONE reset mainDisplay if its quick result
    if(mainDisplayIsAnswer){
        number = '0';
        updateNumberDisplay();
        mainDisplayIsAnswer = false;
    }
    
    // DONE check the number of digits if valid abort operation if not
    if (number.length >= 20) {
        //TEST
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

//DONE
//SCOPE Update main display
function updateNumberDisplay(){
    let pElemDisplay = document.getElementById("p-mainDisplay");
    pElemDisplay.textContent = number;
}
