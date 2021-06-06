// "use strict";
const text = ["Thinker", "Developer"];
const typed = document.getElementsByClassName("typed")[0];
let characterIterator = 0,
  wordIterator = 0;

let currentText = "",
  currLetter = "";

(function type() {
  if (wordIterator === text.length) wordIterator = 0;
  currentText = text[wordIterator];

  currLetter = currentText.slice(0, ++characterIterator);
  typed.textContent = currLetter;
  if (currLetter.length === currentText.length) {
    wordIterator++;
    characterIterator = 0;
  }
  setTimeout(type, 400);
})();
