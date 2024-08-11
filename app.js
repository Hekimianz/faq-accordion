document.addEventListener("DOMContentLoaded", () => {
  const questionsAndButtons = document.querySelectorAll(
    ".question, .expand__btn"
  );

  questionsAndButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
      toggleQuestion(e);
    });
  });
});

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
