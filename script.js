const displayValueOne = document.querySelector('.display_1');
const displayValueTwo = document.querySelector('.display_2');
const numbersInput  = document.querySelectorAll('.digit');
const operationInput = document.querySelectorAll('.operator');
const equalResult = document.querySelector('.equal');
const deleteAll = document.querySelector('.clear_all');
const deleteError = document.querySelector('delete');

let operandA = '';
let operandB = '';
let result = null;
let decimalPoint = false;

