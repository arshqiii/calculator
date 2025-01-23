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

numberBtn.forEach((button) =>
    button.addEventListener("click", () => displayNumber(button.value))
);

clear.addEventListener("click", clearDisplay);
delBtn.addEventListener("click", deleteNumber);

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

function deleteNumber(){
    if (showingResult) return
    let num = curDisplay.textContent
    curDisplay.textContent = num.slice(0,-1)
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
