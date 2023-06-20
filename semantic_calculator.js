// Helper functions
function isOpenParentheses(char) {
  return char === '(';
}

function isCloseParentheses(char) {
  return char === ')';
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

function isOperator(opr) {
  return opr === "+" || opr === "-" || opr === "*" || opr === "/" || opr === "%";
}

function hasPrecedence(opr) {
  return opr === "*" || opr === "/" || opr === "%";
}

function calculate(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    case "%":
      return operand1 % operand2;
  }
}
