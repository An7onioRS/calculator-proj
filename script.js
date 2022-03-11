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
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = sum(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operator';
    };
    return result;
}

function addEventListenerList(list, event, fn) {
    list.forEach(button => button.addEventListener(event, fn));
};

const displayValue = document.querySelector('.display-results');
const operators = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('.number'); 

addEventListenerList(buttons, "click", function(e) {
    displayValue.textContent += e.target.textContent;

});

