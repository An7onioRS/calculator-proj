function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 % num2 === 0 ? num1 / num2 : (num1 / num2).toFixed(2);
}

function calculate(operator, num1, num2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = sum(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '÷':
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operator';
    };
    return result;
}   

function applyEqualButton() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    displayValue.textContent = calculate(operator, num1, num2);
    num1 = parseFloat(displayValue.textContent).toFixed(2);
    num2 = 0;
    operator = '';
}

function applyClearButton() {
    displayValue.textContent = '';
    num1 = 0;
    num2 = 0;
    operator = '';  
}
    
function applyOperatorButton(buttonInput) {
    if(!operator) { 
        // if operator is falsy, num1 is completed
        operator = buttonInput;
        displayValue.textContent += ' ' + operator + ' ';
    }
    else { 
        // if it is not falsy, then we already have one calculation done
        if (!num2) { 
        // if there is no num2, then the user is trying to change the operator after num1, therefore replace it with the new one
            displayValue.textContent = displayValue.textContent.replace(operator, buttonInput);
            operator = buttonInput;  
        }
        else { // if there is num2, then we are trying to make a new calculation, therefore act as equal,  and add the new operator and wait for num2
            displayValue.textContent = calculate(operator, num1, num2);
            num1 = parseFloat(displayValue.textContent).toFixed(2);
            num2 = 0;
            operator = buttonInput;
            displayValue.textContent += ' ' + operator + ' ';
        }
    }
}

function applyNumberButton(buttonInput) {
    if (!operator) { // if operator is empty, then we are still on num1
        displayValue.textContent += buttonInput;
        num1 += buttonInput;
    }
    else { // if operator is not empty, then we are ready to take in num2
        displayValue.textContent += buttonInput; 
        num2 += buttonInput;
    }
}

function decideButtonOperation(buttonInput, buttonClass) {

    switch (buttonClass) {
        case "number":
            applyNumberButton(buttonInput);
            break;
        case "operator":
            applyOperatorButton(buttonInput);
            break;
        case "clear": 
            applyClearButton();
            break;
        case "equal":
            applyEqualButton();
            break;
    }
}

function addEventListenerList(list, event, fn) {
    list.forEach(button => button.addEventListener(event, fn));
};

const displayValue = document.querySelector('.display-results');
const buttons = document.querySelectorAll('button'); 
let num1 = 0;
let num2 = 0;
let operator;

addEventListenerList(buttons, "click", function(e) {
    const buttonInput = e.target.textContent;
    const buttonClass = e.target.classList[0];
    
    decideButtonOperation(buttonInput, buttonClass);
});

