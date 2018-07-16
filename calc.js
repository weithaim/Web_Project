function calculateNextState(jsonState, input) {
    let calc = jsonState ? JSON.parse(jsonState) : {expression: "", display: ""};
    if (isNaN(input)) {
        if (input === "=") {
            calc.expression = calc.expression ? eval(calc.expression) + "" : "";
            calc.display = calc.expression;
            calc.clearExpression = true;
        } else if (!calc.expression && (input === "/" || input === "*")) {
            return JSON.stringify(calc);
        } else {
            if (calc.clearDisplay && !calc.clearExpression) {
                calc.expression = calc.expression ? eval(calc.expression.slice(0, -1)) + input : input;
            } else {
                calc.expression = calc.expression ? eval(calc.expression) + input : input;
            }
            calc.clearExpression = false;
        }
        calc.clearDisplay = true;
    } else {
        calc.expression = !calc.clearExpression ? calc.expression + input : input;
        calc.display = !calc.clearDisplay ? calc.display + input : input;
        calc.clearDisplay = false;
        calc.clearExpression = false
    }
    return JSON.stringify(calc);
}

module.exports = calculateNextState;