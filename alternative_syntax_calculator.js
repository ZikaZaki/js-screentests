function isOperator(opr) {
    return opr === "+" || opr === "-" || opr === "*" || opr === "/" || opr === "%";
}

function isDigit(num) {
    return num >= "0" && num <= "9";
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

// console.log(calculator("+ 3 4"));
console.log(calculator("- 3 * 4 5"));
// console.log(calculator("* + 3 4 5")); // 5 4 3 + *
// console.log(calculator("/ - 3 4 + 5 2")); // 2 5 + 4 3 - /
function calculator(expression) {
    const tokens = expression.split(" ");
    console.log("splitted expr: ", tokens);
    console.log("reversed expr: ", tokens.reverse());
    
    let i = 0;
    while (tokens.length > 1) {
        if (!isOperator(tokens[i]))
        if (isOperator(tokens[i]) && isOperator(tokens[i+1])) {
            i += 1;
        } else if (isOperator(tokens[i]) && isDigit(tokens[i+1]) && isDigit(tokens[i+2])) {
            const operand1 = parseFloat(tokens[i+1]);
            const operand2 = parseFloat(tokens[i+2]);
            const operator = tokens[i];
            
            const result = calculate(operand1, operand2, operator);
            tokens.splice(i, 3, result);
            i = 0;
        }   
       
        else { throw new TypeError("Invalid expression!"); }
        
        console.log("Tokens: ", tokens);
    }
    
    return tokens.pop();
}

