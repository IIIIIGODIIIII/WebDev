let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';

const display = document.getElementById('display');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) 
        return "Error";
    
    return a / b;
}

function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operation";
    }
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '' || displayValue === '') {
            displayValue += button.textContent;
        } else {
            secondNumber += button.textContent;
        }
        display.textContent = displayValue;
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === '') {
            firstNumber = displayValue;
            operator = button.textContent;
            displayValue = '';
        } else if (operator !== '' && displayValue !== '') {
            secondNumber = displayValue;
            const result = operate(operator, firstNumber, secondNumber);
            display.textContent = result;
            firstNumber = result;
            operator = button.textContent;
            displayValue = '';
        }
    });
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    if (firstNumber !== '' && operator !== '' && displayValue !== '') {
        secondNumber = displayValue;
        const result = operate(operator, firstNumber, secondNumber);
        display.textContent = result;
        firstNumber = result;
        operator = '';
        displayValue = '';
    }
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    displayValue = '';
    display.textContent = '0';
});
