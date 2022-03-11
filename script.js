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
    let result;
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
const buttons = document.querySelectorAll('button'); 
let num1 = 0;
let num2 = 0;
let operator = '';
let equal = false;

addEventListenerList(buttons, "click", function(e) {
    const input = e.target.textContent;

    if (equal) displayValue.textContent = "";

    switch (e.target.classList[0]) {
        case "number":
            if (!operator) {
                displayValue.textContent += input;
                num1 += input;
            }
            else {
                displayValue.textContent += input;
                num2 += input;
            }
            break;
        case "operator":
            displayValue.textContent += input;
            operator = input;
            break;
        case "clear":
            displayValue.textContent = "";
            break;
        case "equal":
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            displayValue.textContent = operate(operator, num1, num2);
            equal = true;
            break;
    }
});

