function applyEqualButton() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    displayValue.textContent = operatorSigns[operator](num1, num2);
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
    if (!operator) { 
        operator = buttonInput;
        displayValue.textContent += ' ' + operator + ' ';
    }
    else { 
        if (!num2) { 
            displayValue.textContent = displayValue.textContent.replace(operator, buttonInput);
            operator = buttonInput;  
        }
        else { 
            num1 = parseFloat(displayValue.textContent).toFixed(2);
            num2 = 0;
            operator = buttonInput;
            displayValue.textContent += ' ' + operator + ' ';
        }
    }
}

function applyNumberButton(buttonInput) {
    if (!operator) {
        displayValue.textContent += buttonInput;
        num1 += buttonInput;
    }
    else { 
        displayValue.textContent += buttonInput; 
        num2 += buttonInput;
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
const operatorSigns = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    'x': (num1, num2) => num1 * num2,
    '÷': (num1, num2) => num1 % num2 === 0 ? num1 / num2 : (num1 / num2).toFixed(2)
}; 
const buttonTypes = {
    number: buttonInput => applyNumberButton(buttonInput),
    operator: buttonInput => applyOperatorButton(buttonInput),
    clear: applyClearButton,
    equal: applyEqualButton
}; 

addEventListenerList(buttons, "click", function(e) {
    const buttonInput = e.target.textContent;
    const buttonClass = e.target.classList[0];    

    (buttonClass === 'number' || buttonClass === 'operator') 
        ? buttonTypes[buttonClass](buttonInput) 
        : buttonTypes[buttonClass]();
});

