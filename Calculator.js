document.getElementById("equalsButton").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("firstNumber").value);
  const num2 = parseFloat(document.getElementById("secondNumber").value);
  const operation = document.getElementById("operation").value;
  const resultField = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultField.textContent = "Please enter a valid number";
    return;
  }

  const result = calculator(num1, num2, operation);

  resultField.textContent = `Result: ${result}`;
});

function calculator(num1, num2, op) {
  const a = num1;
  const b = num2;
  const operations = {
    addition: a + b,
    subtraction: a - b,
    multiplication: a * b,
    division: b !== 0 ? a / b : "Cannot divide by zero",
  };

  return operations[op];
}
