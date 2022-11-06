const container = document.querySelector('.container');
const output = document.querySelector('.output');
const buttonContainer = document.querySelector('.button-container');
const buttons = document.querySelectorAll('button');

init();

function init() {
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => button.classList.add('mousedown'));
        button.addEventListener('mouseout', () => button.classList.remove('mousedown'));
        button.addEventListener('click', () => button.classList.remove('mousedown'));
    })
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if (num2 === 0) {
        return 'lol';
    }
    return num1 / num2;
}

function operate(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = sub(num1, num2);
            break;
        case '*':
            result = mul(num1, num2);
            break;
        case '/':
            result = div(num1, num2);
            break;
    }

    return result;
}