
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

