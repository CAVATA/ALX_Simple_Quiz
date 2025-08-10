
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected radio (using querySelector as required)
    const selected = document.querySelector('input[name="quiz"]:checked');

    // Get feedback element
    const feedback = document.getElementById('feedback');

    // If nothing is selected, prompt the user (guard to avoid errors)
    if (!selected) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    // Store the user's answer in the required variable name
    const userAnswer = selected.value;

    // Compare and show feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add click event listener to the submit button (do NOT call the function here)
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

