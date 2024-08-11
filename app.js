document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question__top");
  const buttons = document.querySelectorAll(".expand__btn");

  // Make buttons non-focusable
  buttons.forEach((button) => (button.tabIndex = -1));

  questions.forEach((question, index) => {
    // Add tabindex to each question container for accessibility
    question.tabIndex = 0;

    // Add event listeners for keyboard navigation
    question.addEventListener("keydown", (e) => handleKeyPress(e, index));

    // Add click event listener
    question.addEventListener("click", (e) => toggleQuestion(e));
  });
});

function handleKeyPress(e, index) {
  const questions = document.querySelectorAll(".question__top");

  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      // Move focus to the next question, or loop to the start
      if (index < questions.length - 1) {
        questions[index + 1].focus();
      } else {
        questions[0].focus();
      }
      break;

    case "ArrowUp":
      e.preventDefault();
      // Move focus to the previous question, or loop to the end
      if (index > 0) {
        questions[index - 1].focus();
      } else {
        questions[questions.length - 1].focus();
      }
      break;

    case "Enter":
      // Trigger the toggle function on Enter key press
      toggleQuestion(e);
      break;
  }
}

function toggleQuestion(e) {
  // Find the closest question container
  const questionCont = e.target.closest(".question__cont");

  // Get the associated paragraph
  const p = questionCont.querySelector(".question__bot");

  // Get the icon in the button
  const icon = questionCont.querySelector(".expand__icon");

  // Toggle the hidden class on the paragraph
  p.classList.toggle("hidden");

  // Toggle the icon based on the paragraph's visibility
  if (p.classList.contains("hidden")) {
    icon.src = "./assets/images/icon-plus.svg";
  } else {
    icon.src = "./assets/images/icon-minus.svg";
  }
}
