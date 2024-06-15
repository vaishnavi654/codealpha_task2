document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value) {
                handleInput(value);
            } else if (button.id === 'clear') {
                clearDisplay();
            } else if (button.id === 'equals') {
                calculate();
            }
        });
    });

    function handleInput(value) {
        if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
        }
        updateDisplay();
    }

    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.textContent = '0';
    }

    function calculate() {
        let result = 0;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(curr)) return;

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = currentInput || previousInput || '0';
    }
});
