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

// Alternative Calculator Function
function altCalculator(expression) {
  // get the expression tokens without empty space.
  const tokens = expression.split(" ");
  
  let i = 0;
  while (tokens.length > 1) {
      if (isOperator(tokens[i]) && isDigit(tokens[i+1]) && isDigit(tokens[i+2])) {
        const op1 = tokens[i+1], op2 = tokens[i+2], opr = tokens[i];
        const result = calculate(op1, op2, opr);
        // console.log("result:", result);
        tokens.splice(i, 3, result);
        // console.log("tokens:",tokens);
        i = 0;
      } else { i++; }
  }

  return tokens.pop();
}

console.log(altCalculator("+ 3 4")); // 3 + 4 => 7
console.log(altCalculator("- 3 * 4 5"));   // 3 - (4 * 5) => -17
console.log(altCalculator("* + 3 4 5")); // (3 + 4) * 5 => 35
console.log(altCalculator("/ - 3 4 + 5 2")); //(3-4) / (5+2) => -0.142
