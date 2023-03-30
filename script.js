const display = document.querySelector('.calc__display__input');
const buttons = document.querySelectorAll('.calc__buttons__row__button');
const operators = ['+', '-', 'x', '/'];
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            clear();
        } else if (button.textContent === '+/-') {
            changeSign();
        } else if (button.textContent === '%') {
            percent();
        } else if (operators.includes(button.textContent)) {
            setOperator(button.textContent);
        } else if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === '.') {
            addDecimal();
        } else {
            addNumber(button.textContent);
        }
    });
});

function addNumber(number) {
    if (operator === '') {
        firstNumber += number;
        display.textContent = firstNumber;
    } else {
        secondNumber += number;
        display.textContent = secondNumber;
    }
}

function addDecimal() {
    if (operator === '') {
        if (!firstNumber.includes('.')) {
            firstNumber += '.';
            display.textContent = firstNumber;
        }
    } else {
        if (!secondNumber.includes('.')) {
            secondNumber += '.';
            display.textContent = secondNumber;
        }
    }
}

function setOperator(operatorInput) {

    if (firstNumber === '') {
        firstNumber = '0';
    }

    if (secondNumber !== '') {
        calculate();
    }

    operator = operatorInput;
}

function calculate() {

    if (operator === '+') {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator === '-') {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator === 'x') {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operator === '/') {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    display.textContent = result;
    firstNumber = result;
    secondNumber = '';
    operator = '';
}

function clear() {

    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';

    display.textContent = '0';
}

function changeSign() {

    if (operator === '') {
        firstNumber *= -1;
        display.textContent = firstNumber;
    } else {
        secondNumber *= -1;
        display.textContent = secondNumber;
    }
}

function percent() {

    if (operator === '') {
        firstNumber /= 100;
        display.textContent = firstNumber;
    } else {
        secondNumber /= 100;
        display.textContent = secondNumber;
    }
}
