let result = 0;
let firstOperand = "";
let secondOperand = "";
let curOperator = null;
let showingResult = false;
let shouldReset = false;
let operatorUsed = false;

const clear = document.querySelector("#clearBtn");
const delBtn = document.querySelector("#deleteBtn");
const equal = document.querySelector("#equalBtn");
const point = document.querySelector("#pointBtn");
const curDisplay = document.querySelector(".cur-display");
const prevDisplay = document.querySelector(".prev-display");
const numberBtn = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".operator");

window.addEventListener('keydown', handleKeyboard);
clear.addEventListener("click", clearDisplay);
delBtn.addEventListener("click", deleteNumber);
point.addEventListener("click", placeDot);
equal.addEventListener("click", operateResult);
numberBtn.forEach((button) =>
    button.addEventListener("click", () => displayNumber(button.value))
);
operatorBtn.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.value))
);

function displayNumber(num) {
    if (showingResult) return;
    if (curDisplay.textContent === "0" || shouldReset) {
        resetDisplay();
    }
    curDisplay.textContent += num;
}

function placeDot() {
    if (curDisplay.textContent.includes(".")) return;
    if (curDisplay.textContent.length <= 0) {
        curDisplay.textContent = "0";
    }
    curDisplay.textContent += ".";
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
    if (num === "NaN") {
        clearDisplay();
        return;
    }
    if (showingResult || num === "0") return;
    curDisplay.textContent = num.slice(0, -1);
}

function setOperator(operator) {
    if (curOperator != null) operateResult();
    if (curDisplay.textContent.length <= 0) return;
    firstOperand = curDisplay.textContent;
    curOperator = operator;
    prevDisplay.textContent = `${firstOperand} ${curOperator}`;
    shouldReset = true;
    operatorUsed = true;
}

function operateResult() {
    if (curOperator == null) return;
    secondOperand = curDisplay.textContent;
    if (curOperator === "/" && secondOperand === "0") {
        prevDisplay.textContent = "";
        curDisplay.textContent = "NaN";
        return;
    }

    result = round(calculate(curOperator, firstOperand, secondOperand));

    prevDisplay.textContent = `${firstOperand} ${curOperator} ${secondOperand}`;
    curDisplay.textContent = result.toString();

    firstOperand = result.toString();
    secondOperand = "";
    curOperator = null;
    showingResult = true;
    operatorUsed = false;
}

function handleKeyboard(e) {
    if (e.key >= 0 && e.key <= 9) displayNumber(e.key);
    if (e.key === ".") placeDot();
    if (e.key === "=" || e.key === "Enter") operateResult();
    if (e.key === "Backspace") deleteNumber();
    if (e.key === "Escape") clearDisplay();
    if (["+", "-", "*", "/", "%"].includes(e.key)) setOperator(e.key);
}

function round(num) {
    return (num * 1000) / 1000;
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
