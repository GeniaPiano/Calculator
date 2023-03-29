const currentNumber = document.querySelector(".current-number");
const previousNumber = document.querySelector(".previous-number");
const mathOperator = document.querySelector(".math-operator");
const clearButton = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const clearHistoryButton = document.querySelector(".clear-history-btn");
const historyCalculator = document.querySelector(".calculator-history");
const historyList = document.querySelector(".history-list");
let result = "";
const displayCalculator = document.querySelector(".display");

function showResult(){
if (previousNumber.innerHTML === " " || currentNumber.innerHTML === "") return;
let a = Number(currentNumber.innerHTML);
let b = Number(previousNumber.innerHTML);
let operator = mathOperator.innerHTML;
const historyLi =  document.createElement("li");
historyLi.classList.add("list-item");
historyList.appendChild(historyLi);
clearHistoryButton.classList.add("clear-history-btn-active");


if (operator === "+") {
   result = a + b
historyLi.innerHTML = `${previousNumber.innerHTML}  ${operator} ${currentNumber.innerHTML} = ${result}` 
previousNumber.innerHTML += ` + ${currentNumber.innerHTML}`
currentNumber.innerHTML = result;
mathOperator.innerHTML = "=";

}

if (operator === "-") {
    result = b - a 
 
    historyLi.innerHTML = `${previousNumber.innerHTML}  ${operator} ${currentNumber.innerHTML} = ${result}` 
 previousNumber.innerHTML += ` - ${currentNumber.innerHTML}`
 currentNumber.innerHTML = result;
 mathOperator.innerHTML = "="
 }

 if (operator === "*") {
    result = a * b 
historyLi.innerHTML = `${previousNumber.innerHTML}  ${operator} ${currentNumber.innerHTML} = ${result}`    
 previousNumber.innerHTML += ` * ${currentNumber.innerHTML}`
 currentNumber.innerHTML = result;
 mathOperator.innerHTML = "="
 }

 if (operator === "/") {
    result = b / a 
historyLi.innerHTML = `${previousNumber.innerHTML}  ${operator} ${currentNumber.innerHTML} = ${result}`
 previousNumber.innerHTML += ` / ${currentNumber.innerHTML}`
 currentNumber.innerHTML = result;
 mathOperator.innerHTML = "="
 }
 if (operator === "2^") {
    result = b ** a;
historyLi.innerHTML = `${previousNumber.innerHTML} ^ ${currentNumber.innerHTML} = ${result}` 
 previousNumber.innerHTML += ` ^ ${currentNumber.innerHTML}`
 currentNumber.innerHTML = result;
 mathOperator.innerHTML = "="
 }


}



function displayNumber(){
if (this.textContent === "." && currentNumber.innerHTML.includes(".")) 
    return;
if (this.textContent === "." && currentNumber.innerHTML === " ") {
    return currentNumber.innerHTML = "0."}

    currentNumber.innerHTML += this.textContent;
}
function clearDisplay(){
   result.innerHTML = "";
   currentNumber.innerHTML = "";
   previousNumber.innerHTML = "";
   mathOperator.innerHTML = "";

}
function clearHistory(){
historyList.innerHTML = "";
if (historyList.innerHTML = "") 
clearHistoryButton.classList.remove("clear-history-btn-active")

}

 function operate() {
    if (currentNumber.innerHTML === " " && this.textContent === "-"){
        currentNumber.innerHTML = "-";
        return;
    }
    else if (currentNumber.innerHTML === " "){
        return;
    }
 
    if (mathOperator !== " ") {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathOperator.innerHTML = this.textContent;
    currentNumber.innerHTML = "";
 }

numberButtons.forEach(button => {
    button.addEventListener("click", displayNumber)
        });

operatorButtons.forEach(button => button.addEventListener("click", operate))
equalButton.addEventListener("click", showResult);

clearButton.addEventListener("click", clearDisplay);

clearHistoryButton.addEventListener("click", clearHistory);

