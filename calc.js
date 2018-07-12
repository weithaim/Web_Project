function calculateNextState(jsonState, input) {
    let calc = jsonState ? JSON.parse(jsonState) : {expression: "", display: ""};
    if (isNaN(input)) {
        if (input === "=") {
            calc.expression = eval(calc.expression) + "";
            calc.display = calc.expression;
            calc.clearExpression = true;
        } else {
            calc.expression = eval(calc.expression) + input;
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


// let s = null;
// s = calculateNextState(s, "1");
// console.log(JSON.parse(s).display); // 1
// s = calculateNextState(s, "2");
// console.log(JSON.parse(s).display); // 12
// s = calculateNextState(s, "+");
// console.log(JSON.parse(s).display); // 12
// s = calculateNextState(s, "4");
// console.log(JSON.parse(s).display); // 4
// s = calculateNextState(s, "3");
// console.log(JSON.parse(s).display); // 43
// s = calculateNextState(s, "=");
// console.log(JSON.parse(s).display); // 55
// s = calculateNextState(s, "+");
// console.log(JSON.parse(s).display); // 55
// s = calculateNextState(s, "1");
// console.log(JSON.parse(s).display); // 1
// s = calculateNextState(s, "=");
// console.log(JSON.parse(s).display); // 56
// s = calculateNextState(s, "5");
// console.log(JSON.parse(s).display); // 5
// s = calculateNextState(s, "+");
// console.log(JSON.parse(s).display); // 5
// s = calculateNextState(s, "1");
// console.log(JSON.parse(s).display); // 1
// s = calculateNextState(s, "=");
// console.log(JSON.parse(s).display); // 6
// s = calculateNextState(s, "8");
// console.log(JSON.parse(s).display); // 8
// s = calculateNextState(s, "8");
// console.log(JSON.parse(s).display); // 88
// s = calculateNextState(s, "+");
// console.log(JSON.parse(s).display); // 88
// s = calculateNextState(s, "1");
// console.log(JSON.parse(s).display); // 1
// s = calculateNextState(s, "2");
// console.log(JSON.parse(s).display); // 12
// s = calculateNextState(s, "=");
// console.log(JSON.parse(s).display); // 100

module.exports = calculateNextState;