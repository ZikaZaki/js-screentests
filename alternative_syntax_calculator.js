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

