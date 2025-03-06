let currentInput = '';
let previousInput = '';
let operator = null;

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  document.getElementById('display').value = '';
}

function calculateResult() {
  if (previousInput !== '' && operator !== null && currentInput !== '') {
    currentInput = evaluateExpression(previousInput, currentInput, operator);
    document.getElementById('display').value = currentInput;
    previousInput = '';
    operator = null;
  }
}

function evaluateExpression(previous, current, operator) {
  let prev = parseFloat(previous);
  let curr = parseFloat(current);

  switch (operator) {
    case '+':
      return prev + curr;
    case '-':
      return prev - curr;
    case '*':
      return prev * curr;
    case '/':
      if (curr === 0) {
        return 'Error';
      }
      return prev / curr;
    default:
      return current;
  }
}

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', function () {
    if (currentInput !== '') {
      if (previousInput === '') {
        previousInput = currentInput;
      } else {
        currentInput = evaluateExpression(previousInput, currentInput, operator);
        document.getElementById('display').value = currentInput;
        previousInput = currentInput;
      }
      operator = this.innerText;
      currentInput = '';
    }
  });
});
