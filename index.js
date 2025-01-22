let result = 0
let firstOperand = ""
let secondOperand = ""
let operator = null
let showingResult = false

const clear = document.querySelector("#clearBtn")
const equal = document.querySelector("#equalBtn")
const point = document.querySelector("#pointBtn")
const curDisplay = document.querySelector(".cur-display")
const prevDisplay = document.querySelector(".prev-display")
const numberBtn = document.querySelectorAll("[#numberBtn]")
const operatorBtn = document.querySelectorAll("[#operator]")



const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}
