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

// =============================================================================
function calculator (expr) {
  // remove white spaces from expression
  const expression = expr.replace(/\s/g, "");
  
  const operStack = [];
  const resultStack = [];

  for (let i = 0; i < expression.length; i++){
     if (isDigit(expression[i])) {resultStack.push(parseFloat(expression[i]));} 
     else if (isOperator(expression[i])) {
       if (hasPrecedence(expression[i])) {
         if (!isDigit(expression[i+1])) {throw new TypeError("Invalid Expression!");}
         
         const operand2 = parseFloat(expression[i+1]);
         const operand1 = resultStack.pop();
         const operator = expression[i];

        const result = calculate(operand1, operand2, operator);
        resultStack.push(result);
        i += 1;
       } else {
         operStack.push(expression[i]);
       }
     } 
     else if (isCloseParentheses(expression[i])) {
      while (resultStack.length > 1) {
        const operand2 = resultStack.pop();
        const operand1 = resultStack.pop();
        const operator = operStack.pop();

        const result = calculate(operand1, operand2, operator);
        resultStack.push(result);
      }
    } 
     else if(isOpenParentheses(expression[i])) {continue;} 
     else {throw new TypeError("Invalid expression!");}
  }

  // Evaluate any remaining expressions on the stack
  while (resultStack.length > 1) {
     const operand2 = resultStack.pop();
     const operand1 = resultStack.pop();
     const operator = operStack.pop();

     resultStack.push(calculate(operand1, operand2, operator));
  }

  return resultStack.pop();
}
