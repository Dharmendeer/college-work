let display = document.getElementById('display');
let calculation = '';

function appendNumber(num) {
  calculation += num;
  display.value = calculation;
}

function appendOperator(operator) {
  calculation += operator;
  display.value = calculation;
}

function clearDisplay() {
  calculation = '';
  display.value = calculation;
}

function calculateResult() {
  try {
    let result = eval(calculation);
    display.value = result;
    calculation = result.toString();
  } catch (error) {
    display.value = 'Error';
    calculation = '';
  }
}
