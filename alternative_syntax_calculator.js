// Helper functions
function calculate(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return parseFloat(operand1) + parseFloat(operand2);
    case "-":
      return parseFloat(operand1) - parseFloat(operand2);
    case "*":
      return parseFloat(operand1) * parseFloat(operand2);
    case "/":
      return parseFloat(operand1) / parseFloat(operand2);
    case "%":
      return parseFloat(operand1) % parseFloat(operand2);
  }
}

function isOperator(opr) {
  return opr === "+" || opr === "-" || opr === "*" || opr === "/" || opr === "%";
}

function isDigit(str) {
  /* Check if the string contains only digits (and optionally, a minus sign at the start)
  */
  return /^-?\d+$/.test(str);
}
