function calculateNextState(jsonState, input) {
    let calc = jsonState ? JSON.parse(jsonState) : {expression: "0", display: ""};
    if (isNaN(input)) {
        if (input === "=") {
            calc.expression = eval(calc.expression) + "";
            calc.display = calc.expression;
            calc.clearExpression = true;
        } else {
            if (calc.clearDisplay && !calc.clearExpression) {
                calc.expression = eval(calc.expression.slice(0, -1)) + input;
            } else {
                calc.expression = eval(calc.expression) + input;
            }
            calc.clearExpression = false;
        }
        calc.clearDisplay = true;
    } else {
        calc.expression = calc.expression === "0" ? "" : calc.expression;
        calc.expression = !calc.clearExpression ? calc.expression + input : input;
        calc.display = !calc.clearDisplay ? calc.display + input : input;
        calc.clearDisplay = false;
        calc.clearExpression = false
    }
    return JSON.stringify(calc);
}

module.exports = calculateNextState;