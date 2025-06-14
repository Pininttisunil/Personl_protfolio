// Typing animation (already in your code)
const textArray = ["DSA",
    "FRONT END DEVELOPER",
    "DATA SCIENCE",
    "FULL STACK DEVELOPER",
    "AI-ML DEVELOPER",
    "DATA ANALYST",
    "NLP SPECIALIST"];
const typingElement = document.getElementById("typing-text");
const colors = ["#32CD32",
    "#32CD32",
    "#32CD32",
    "#32CD32",
    "#32CD32",
    "#32CD32"];
let arrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[arrayIndex].length) {
        typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
        typingElement.style.color = colors[arrayIndex];
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

type();

// ⭐ Star Animation Script
function createStars(count) {
    const container = document.getElementById('star-container');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        container.appendChild(star);
    }
}

createStars(500); // You can change the number of stars here
