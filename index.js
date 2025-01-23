let result = 0;
let firstOperand = "";
let secondOperand = "";
let operator = null;
let showingResult = false;
let shouldReset = false;

const clear = document.querySelector("#clearBtn");
const delBtn = document.querySelector("#deleteBtn");
const equal = document.querySelector("#equalBtn");
const point = document.querySelector("#pointBtn");
const curDisplay = document.querySelector(".cur-display");
const prevDisplay = document.querySelector(".prev-display");
const numberBtn = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".operator");

clear.addEventListener("click", clearDisplay);
delBtn.addEventListener("click", deleteNumber);
numberBtn.forEach((button) =>
    button.addEventListener("click", () => displayNumber(button.value))
);


function displayNumber(num) {
    if (curDisplay.textContent === "0" || shouldReset) {
        resetDisplay();
    }
    curDisplay.textContent += num;
}

function resetDisplay() {
    curDisplay.textContent = "";
    showingResult = false;
    shouldReset = false;
}

function clearDisplay() {
    curDisplay.textContent = "0";
    prevDisplay.textContent = "";
    firstOperand = "";
    secondOperand = "";
    showingResult = false;
    shouldReset = false;
    operator = null;
}

function deleteNumber() {
    let num = curDisplay.textContent;
    if (showingResult || num === '0') return;
    curDisplay.textContent = num.slice(0, -1);
}

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const mod = function (a, b) {
    return a % b;
};

function calculate(sign, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (sign == "+") {
        return add(num1, num2);
    }
    if (sign == "-") {
        return subtract(num1, num2);
    }
    if (sign == "x") {
        return multiply(num1, num2);
    }
    if (sign == "/") {
        return divide(num1, num2);
    }
    if (sign == "%") {
        return mod(num1, num2);
    }
}
