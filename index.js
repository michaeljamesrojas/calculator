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


//UNFIN
//SCOPE Calculator Color changer
//ADD color darker or whitener
//ADD when pressed buttons will darker the curent bg
// let inputElemColorPicker = document.getElementById("calculatorColorPicker");
// inputElemColorPicker.addEventListener("close", function (){
//     //  alert("hi");

// });
    




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

//UNFIN Unknown until other features are elaborated
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

//FOCUS1
//SCOPE memory recall button functionality
let buttElemMemoryRecall = document.getElementById("bmr");
buttElemMemoryRecall.addEventListener("click", function (){
    memoryRecall();
});



//SCOPE add keyboard support by
//UNFIN adding keyboard event to document html
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
         case 'Enter':
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

//SCOPE memoryRecall by
function memoryRecall(){//FOCUS2
    //FINAL checking if memory is not undefined
    if(memory != undefined){
        //FINAL before putting its value to the main display (updater)
        number = memory;
        updateNumberDisplay();
        //FINAL and updating the variable stating main display is an answer
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

//UNFIN
//SCOPE resetEverythingWithIncludeMemory
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


//UNFIN
//SCOPE Plus Minus button functionality


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
    answer = eval(toBeOperatedTemp).toString();//FINAL

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

//UNFIN
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
