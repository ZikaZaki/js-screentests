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

function isAltSyntax(str) {
  /* Check if the string starts with one operator sign
  and followed by at least two digits
  */
  // return /^[-+*%\/] \d \d+$/.test(str);
  return /[-+*%\/]\s{1}\d+\s{1}\d+/.test(str);
  // return /[-+*%\/]\s{1}\-?\d+\s{1}\-?\d+/.test(str);
}

function isSemanticSyntax(str) {
  return /^\d+[-+*%\/]{1}\d+$/.test(str);
}

function findIndexes(str, pattern) {
  const regex = new RegExp(pattern);
  const match = regex.exec(str);
  if (match) {
    return [match.index, match.index + match[0].length - 1];
  } else {
    return [-1, -1];
  }
}
// =====================================================
function altCalc(expression) {
  let expr = expression;
  const regex = /[-+*%\/]\s{1}\-?\d+\s{1}\-?\d+/;
  // const regex = /[-+*%\/]\s\-?\d+\s\-?\d+/; // with any number of spaces

  while (regex.exec(expr)) {
    const match = regex.exec(expr);
    const tokens = match[0].split(" ");
    const [startIdx, endIdx] = [match.index, match.index + match[0].length - 1];
    const result = calculate(Number(tokens[1]), Number(tokens[2]), tokens[0]);
    expr = expr.slice(0, startIdx) + result + expr.slice(endIdx + 1);
  }

  return expr;
}

console.log(altCalc("+ 3 4")); // 3 + 4 => 7
console.log(altCalc("- 3 * 4 5"));   // 3 - (4 * 5) => -17
console.log(altCalc("* + 3 4 5")); // (3 + 4) * 5 => 35
console.log(altCalc("/ - 3 4 + 5 2")); //(3-4) / (5+2) => -0.142
