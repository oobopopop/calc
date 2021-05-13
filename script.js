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
    if(b == 0){
    return 'ERROR'
    } else {
        if(a % b == 0){
        return a / b;
        } else {
        return (a/b).toFixed(10)
        }
    }
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




const calc = () => {

    let temp = 0;
    let operation = null;
    let activeOperation = false;

    one.onclick = () => {
        if(activeOperation == true){
        display.innerText = '1';
        activeOperation = false;
        } else {
        display.innerText += '1';
        }
    }

    two.onclick = () => {
        if(activeOperation == true){
        display.innerText = '2';
        activeOperation = false;
        } else {
        display.innerText += '2';
        }
    }

    three.onclick = () => {
        if(activeOperation == true){
        display.innerText = '3';
        activeOperation = false;
        } else {
        display.innerText += '3';
        }
    }

    four.onclick = () => {
        if(activeOperation == true){
        display.innerText = '4';
        activeOperation = false;
        } else {
        display.innerText += '4';
        }
    }

    five.onclick = () => {
        if(activeOperation == true){
        display.innerText = '5';
        activeOperation = false;
        } else {
        display.innerText += '5';
        }
    }

    six.onclick = () => {
        if(activeOperation == true){
        display.innerText = '6';
        activeOperation = false;
        } else {
        display.innerText += '6';
        }
    }

    seven.onclick = () => {
        if(activeOperation == true){
        display.innerText = '7';
        activeOperation = false;
        } else {
        display.innerText += '7';
        }
    }

    eight.onclick = () => {
        if(activeOperation == true){
        display.innerText = '8';
        activeOperation = false;
        } else {
        display.innerText += '8';
        }
    }

    nine.onclick = () => {
        if(activeOperation == true){
        display.innerText = '9';
        activeOperation = false;
        } else {
        display.innerText += '9';
        }
    }

    zero.onclick = () => {
        if(activeOperation == true){
        display.innerText = '0';
        activeOperation = false;
        } else {
        display.innerText += '0';
        }
    }
    
    clear.onclick = () => {
        display.innerText = '';
        temp = 0;
        operation = null;
        activeOperation = false;
    }

    plus.onclick = () => {

        if (operation == null){
        operation = '+';
        activeOperation = true;
        temp = parseInt(display.innerText);
        } else {
        display.innerText = operate(operation, temp, parseInt(display.innerText));
        temp = parseInt(display.innerText);
        operation = '+'
        activeOperation = true;
        }
    }

    minus.onclick = () => {
       
        if (operation == null){
            operation = '-';
            activeOperation = true;
            temp = parseInt(display.innerText);
            } else {
            display.innerText = operate(operation, temp, parseInt(display.innerText));
            temp = parseInt(display.innerText);
            operation = '-'
            activeOperation = true;
            }
    }

    mult.onclick = () => {
        if (operation == null){
            operation = '*';
            activeOperation = true;
            temp = parseInt(display.innerText);
            } else {
            display.innerText = operate(operation, temp, parseInt(display.innerText));
            temp = parseInt(display.innerText);
            operation = '*'
            activeOperation = true;
            }
    }

    divi.onclick = () => {
        if (operation == null){
            operation = '/';
            activeOperation = true;
            temp = parseInt(display.innerText);
            } else {
            display.innerText = operate(operation, temp, parseInt(display.innerText));
            temp = parseInt(display.innerText);
            operation = '/'
            activeOperation = true;
            }
    }

    equals.onclick = () => {
        if(operation == null){
            return display.innerText;
        }
        display.innerText = operate(operation, temp, parseInt(display.innerText));
        temp = 0;
        operation = null;
        activeOperation = false;
    }
}


calc();