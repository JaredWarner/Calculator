function calculator(num1, num2, op) {
  const a = num1;
  const b = num2;
  const operations = {
    addition: a + b,
    subtraction: a - b,
    multiplication: a * b,
    division: a / b,
  };

  return operations[op];
}

console.log(calculator(10, 5, "addition"));
