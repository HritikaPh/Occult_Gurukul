let currentInput = '';
let currentOperation = null;
let storedValue = null;

function clearDisplay() {
  document.getElementById('display').textContent = '0';
  currentInput = '';
  currentOperation = null;
  storedValue = null;}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput !== '') {
    if (currentOperation !== null) {
      calculate();
    }
    currentOperation = operation;
    storedValue = parseFloat(currentInput);
    currentInput = '';
    updateDisplay();
  }}

function calculate() {
  if (currentOperation !== null && currentInput !== '') {
    const inputValue = parseFloat(currentInput);
    let result;
    switch (currentOperation) {
      case '+':
        result = storedValue + inputValue;
        break;
      case '-':
        result = storedValue - inputValue;
        break;
      case '*':
        result = storedValue * inputValue;
        break;
      case '/':
        result = storedValue / inputValue;
        break;
    }
    currentOperation = null;
    currentInput = result.toString();
    storedValue = result;
    updateDisplay();
  }
}
function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function calculateSquareRoot() {
  if (currentInput !== '') {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
  }
}

function calculatePercentage() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}

function changeSign() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  const displayValue = currentOperation !== null ? storedValue + currentOperation + currentInput : currentInput;
  document.getElementById('display').textContent = displayValue || '0';
}


// taking name
document.addEventListener('DOMContentLoaded', function() {
  var userName = prompt("Hi there! What's your name?");
  var greetingElement = document.getElementById('greeting');
  greetingElement.textContent = `Hi, ${userName}! Let's calculate something amazing.`;
});

function redirectToCalculator() {
  window.location.href = 'numerology.html';
}
"serviceWorker" in navigator && console.log("servable");