const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let currentOperator = "";
let prevInput = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
            if (currentInput !== "") {
                prevInput = currentInput;
                currentInput = "";
                currentOperator = buttonText;
                display.value = prevInput + " " + currentOperator;
            }
        } else if (buttonText === "=") {
            if (currentInput !== "" && prevInput !== "") {
                const result = calculate(parseFloat(prevInput), parseFloat(currentInput), currentOperator);
                display.value = result;
                currentInput = result;
                prevInput = "";
                currentOperator = "";
            }
        } else if (buttonText === "C") {
            currentInput = "";
            prevInput = "";
            currentOperator = "";
            display.value = "";
        } else {
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Error";
    }
}
