"use strict";

const text = ["Developer", "Programmer", "Designer"];
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
  setTimeout(type, 250);
})();

// function detyped() {}

/* 
  Add Event Listeners to NavBar Icons for Hover
*/

(function NavBarHover() {
  const navBarTexts = ["Home", "About", "Resume"];
  const navBarUL = document.querySelector(
    "#navbarSupportedContent .navbar-nav"
  );
  for (let i = 0; i < navBarUL.childElementCount; i++) {
    const navBarAnchor = navBarUL.children[i].children[0];
    navBarUL.children[i].addEventListener("mouseenter", function (event) {
      navBarAnchor.lastElementChild.classList.remove("hidden");
    });
    navBarUL.children[i].addEventListener("mouseleave", function (event) {
      navBarAnchor.lastElementChild.classList.add("hidden");
    });
  }
})();
