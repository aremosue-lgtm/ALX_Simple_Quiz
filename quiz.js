function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option selected, exit the function without errors
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare answers and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add click event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
