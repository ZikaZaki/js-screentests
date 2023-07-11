/* ***********************************************************REGEX*************************************************************** 
'^[-+*%\/]?\d+$' matches any digits that are optionally preceded with any operator signs (+-*%\/).
'^[-+*%\/]?\d{2,}+$' matches at least 2 digits or more that are optionally preceded with any operator signs (+-*%\/).
'[-+*%\/]{1}+\d{2,}+$' matches at least 2 digits or more that must be preceded with at least 
 one of any operator signs (+-*%\/), starting from '$' end of line.
'[-+*%\/]{1}+\d{2,}' matches at least 2 digits or more that must be preceded with at least 
 one of any operator signs (+-*%\/), starting from the beggining of line.
 '\d{1}+[-+*%\/]{1}+\d{1}+$' Matches one digit followed by one of operator signs (+-*%\/), followed by another one digit.
  Starts from the end of the line.
 '\d{1}+[-+*%\/]{1}+\d{1}' Matches one digit followed by one of operator signs (+-*%\/), followed by another one digit.
  Starts from the begginig of the line.
  '[^-+*%\/\d]+$' matches any character other than digits [0-9] or operator signs (+-*%\/). Used to validate the expression.
***********************************************************************************************************************************/

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
  /* Check if a char is an operator (+,-,*,/,%) */
  return /^[+\-*\/%]$/.test(opr);
}

function isDigit(str) {
  /* Check if the string contains only digits (and optionally, a minus sign at the start)
  */
  return /^-?\d+$/.test(str);
}


function isAltSyntax(str) {
  /* Check if there's an alterantive syntax match in the string */
  return /[-+*%\/]\s+\-?\d+\s+\-?\d+/.test(str);
}

function isSemanticSyntax(str) {
  /* Check if there's a semantic syntax match in the string */
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
function altCalc(expr) {
  const regex = /[-+*%\/]\s+\-?\d+\s+\-?\d+/;

  while (regex.exec(expr)) {
    // Get the match from the expression
    const match = regex.exec(expr);
    // Get the match start and end index
    const [startIdx, endIdx] = [match.index, match.index + match[0].length - 1];
    // Extract only digits and operators from the match
    const tokens = match[0].split(" ").filter(t => isDigit(t) || isOperator(t));
    // Perform calculation
    const result = calculate(Number(tokens[1]), Number(tokens[2]), tokens[0]);
    // Replace the match string with the result
    expr = expr.slice(0, startIdx) + result + expr.slice(endIdx + 1);
  }

  return expr;
}

console.log(altCalc("+ 3 4")); // 3 + 4 => 7
console.log(altCalc("- 3 * 4  5"));   // 3 - (4 * 5) => -17
console.log("- 3 * 4  5".split(" "));
console.log(altCalc("* + 3 4 5")); // (3 + 4) * 5 => 35
console.log(altCalc("/ - 3 4 + 5 2")); //(3-4) / (5+2) => -0.142
