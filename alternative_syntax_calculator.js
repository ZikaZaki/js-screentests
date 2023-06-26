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

function altCalculator(expression) {
  const tokens = expression.split(" ");
  let operand1, operand2, operator, result;
  let i = 0;

  while (i < tokens.length && tokens.length >= 3) {
    // console.log("length: ", tokens.length);
    // console.log("index : ", i);
    if (isOperator(tokens[i]) && isDigit(tokens[i+1]) && isDigit(tokens[i+2])) {
      operator = tokens[i];
      operand1 = Number(tokens[i+1]);
      operand2 = Number(tokens[i+2]);
      result = calculate(operand1, operand2, operator);
      tokens.splice(i, 3, result);
      i = 0;
      // console.log("length : ", tokens.length);
      console.log("remaining tokens: ", tokens);
    } else {i+=1;}
  }

  // Perform final calcuation if remaining.
  while (tokens.length > 1) {
    operand1 = Number(tokens[0]);
    operator = tokens[1];
    operand2 = Number(tokens[2]);
    result = calculate(operand1, operand2, operator);
    tokens.splice(0, 3, result);
  }

  return tokens.pop();
}

console.log(altCalculator("+ 3 4")); // 3 + 4 => 7
console.log(altCalculator("- 3 * 4 5"));   // 3 - (4 * 5) => -17
console.log(altCalculator("* + 3 4 5")); // (3 + 4) * 5 => 35
console.log(altCalculator("/ - 3 4 + 5 2")); //(3-4) / (5+2) => -0.142
