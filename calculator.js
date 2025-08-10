
document.addEventListener("DOMContentLoaded", function () {
    // Arithmetic functions
    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        return number1 / number2;
    }

    // Helper to read inputs (returns array [n1, n2])
    function getNumbers() {
        const n1 = parseFloat(document.getElementById('number1').value) || 0;
        const n2 = parseFloat(document.getElementById('number2').value) || 0;
        return [n1, n2];
    }

    const resultSpan = document.getElementById('calculation-result');

    // Event listeners for buttons
    document.getElementById('add').addEventListener('click', function () {
        const [n1, n2] = getNumbers();
        resultSpan.textContent = add(n1, n2);
    });

    document.getElementById('subtract').addEventListener('click', function () {
        const [n1, n2] = getNumbers();
        resultSpan.textContent = subtract(n1, n2);
    });

    document.getElementById('multiply').addEventListener('click', function () {
        const [n1, n2] = getNumbers();
        resultSpan.textContent = multiply(n1, n2);
    });

    document.getElementById('divide').addEventListener('click', function () {
        const [n1, n2] = getNumbers();
        if (n2 === 0) {
            resultSpan.textContent = 'Error: Division by zero';
        } else {
            resultSpan.textContent = divide(n1, n2);
        }
    });
});

