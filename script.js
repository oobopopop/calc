const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, a, b) => {
    if (operator == '+'){
      return add(a, b);
    } else if (operator == '-'){
       return subtract(a, b);
    } else if (operator == '*'){
       return multiply(a, b);
    } else if (operator == '/'){
       return divide(a, b)
    }
}

const display = document.querySelector('.display');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const clear = document.querySelector('.clear');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const mult = document.querySelector('.mult');
const divi = document.querySelector('.divi');
const equals = document.querySelector('.equals');


one.onclick = () => display.innerText += '1';
two.onclick = () => display.innerText += '2';
three.onclick = () => display.innerText += '3';
four.onclick = () => display.innerText += '4';
five.onclick = () => display.innerText += '5';
six.onclick = () => display.innerText += '6';
seven.onclick = () => display.innerText += '7';
eight.onclick = () => display.innerText += '8';
nine.onclick = () => display.innerText += '9';
zero.onclick = () => display.innerText += '0';
clear.onclick = () => display.innerText = '';



const calc = () => {
    let firstNum
    let secondNum
    let operation

    plus.onclick = () => {
        
        firstNum = parseInt(display.innerText);
        operation = '+';
        display.innerText = '';
        
    }

    minus.onclick = () => {
        firstNum = parseInt(display.innerText);
        operation = '-';
        display.innerText = '';
    }

    mult.onclick = () => {
        firstNum = parseInt(display.innerText);
        operation = '*';
        display.innerText = '';
    }

    divi.onclick = () => {
        firstNum = parseInt(display.innerText);
        operation = '/';
        display.innerText = '';
    }

    equals.onclick = () => {
        secondNum = parseInt(display.innerText);
        display.innerText =
        operate(operation, firstNum, secondNum);
        firstNum = undefined;
        secondNum = undefined;

    }
}


calc();