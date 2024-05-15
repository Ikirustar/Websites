window.addEventListener("load", () => {
  var questionLabel = document.getElementsByClassName("question_label");

  for (let i = 0; i < questionLabel.length; i++) {
    questionLabel[i].addEventListener("click", function () {
      var questionText = questionTexts[i];
      questionText.classList.toggle("active");
      if (questionText.style.display == "none") {
        questionText.style.display == "block";
      } else {
        questionText.style.display == "none";
      }
    });
  }
});
