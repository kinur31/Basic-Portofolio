// Navigation bar effects on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Hamburger menu - responsive
let menuToggle = document.querySelector(".menu-toggle");
let navMenu1 = document.querySelector(".nav-menu1");
let navMenu2 = document.querySelector(".nav-menu2");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu1.classList.toggle("active");
    navMenu2.classList.toggle("active");
});

//Typing text effects
const dynamicText = document.querySelector("h3 span");
const words = ["Freelancer", "Front-end Developer", "Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    // console.log(currentWord, currentChar);
    dynamicText.textContent = currentChar;
    // dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } 
    else if (isDeleting && charIndex > 0) {
        charIndex --;
        setTimeout(typeEffect, 200);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();

