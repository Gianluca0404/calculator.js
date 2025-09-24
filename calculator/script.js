const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if ((value >= '0' && value <= '9') || value === '.') {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = null;
      display.textContent = '0';
    } else if (value === '=') {
      if (currentInput && previousInput && operator) {
        const result = calculate(Number(previousInput), Number(currentInput), operator);
        display.textContent = result;
        currentInput = result.toString();
        previousInput = '';
        operator = null;
      }
    } else {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    }
  });
});

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Errore';
    default:
      return b;
  }
}
