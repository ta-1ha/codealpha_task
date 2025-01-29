let lastResult = '';

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    lastResult = '';
    updatePreviousResult();
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        lastResult = eval(display.value);
        display.value = lastResult;
        updatePreviousResult();
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSin() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        lastResult = Math.sin(value);
        display.value = lastResult;
        updatePreviousResult();
    } else {
        display.value = 'Error';
    }
}

function calculateCos() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        lastResult = Math.cos(value);
        display.value = lastResult;
        updatePreviousResult();
    } else {
        display.value = 'Error';
    }
}

function calculateTan() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        lastResult = Math.tan(value);
        display.value = lastResult;
        updatePreviousResult();
    } else {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value) && value >= 0) {
        lastResult = Math.sqrt(value);
        display.value = lastResult;
        updatePreviousResult();
    } else {
        display.value = 'Error';
    }
}

function updatePreviousResult() {
    const previousResultDisplay = document.getElementById('previous-result');
    previousResultDisplay.textContent = lastResult ? `Last Result: ${lastResult}` : '';
}