const displayValueOne = document.querySelector('.display_1');
const displayValueTwo = document.querySelector('.display_2');
const numbersInput = document.querySelectorAll('.digit');
const operationInput = document.querySelectorAll('.operator');
const equalResult = document.querySelector('.equal');
const deleteAll = document.querySelector('.clear_all');
const deleteError = document.querySelector('#delete');

let operandA = '';
let operandB = '';
let result = null;
let decimalPoint = false;
let previousOperation = '';



// Calculator numbers and decimal input
numbersInput.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !decimalPoint) {
            decimalPoint = true;
        } else if (e.target.innerText === '.' && decimalPoint) {
            return;
        }
        operandB += e.target.innerText;
        displayValueTwo.innerText = operandB;
    })
});



// Calculator operation input for mathematical operators
operationInput.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!operandB) return;
        decimalPoint = false;
        const operationValue = e.target.innerText;
        if (operandA && operandB && previousOperation) {
            calculateOperation();
        } else {
            result = parseFloat(operandB);
        }
        clearVariable(operationValue);
        previousOperation = operationValue;
    })
});



// Function will clear input variable values in display_2 to display_1 calculator
function clearVariable(operator = '') {
    operandA += operandB + '' + operator + '';
    displayValueOne.innerText = operandA;
    displayValueTwo.innerText = '';
    operandB = '';
};



// Calculate mathematical operations 
function calculateOperation() {
    if (previousOperation === '/') {
        result = parseFloat(result) / parseFloat(operandB);
    } else if (previousOperation === '*') {
        result = parseFloat(result) * parseFloat(operandB);
    } else if (previousOperation === '-') {
        result = parseFloat(result) - parseFloat(operandB);
    } else if (previousOperation === '+') {
        result = parseFloat(result) + parseFloat(operandB);
        
    }
};



// Equal operation for math calcualtion
equalResult.addEventListener('click', (e) => {
    if(!operandA || !operandB) return;
    decimalPoint = false;
    calculateOperation();
    clearVariable();
    displayValueTwo.innerText = result;
    operandB = result;
    operandA = '';
});



// AC input for clearing all the numbers and math operation
deleteAll.addEventListener('click', (e) => {
    displayValueOne.innerText = '';
    displayValueTwo.innerText = '';
    operandA = '';
    operandB = '';
    result = '';
});



// Delete the current entry of input
deleteError.addEventListener("click", () => {
    displayValueTwo.innerText = "";
    operandB = "";
  });