const codingHeading = document.querySelector('.coding-heading');
const text = ['Learn Coding', 'Learn HTML', 'Learn JavaScript', 'Learn CSS', 'Ask AI'];
let wordIndex = 0;
let charIndex = 0;
let isBackspacing = false;

function type() {
    if (charIndex <= text[wordIndex].length) {
        codingHeading.textContent = text[wordIndex].substring(0, charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        isBackspacing = true;
        setTimeout(backspace, 1000);
    }
}

function backspace() {
    if (isBackspacing && charIndex >= 0) {
        codingHeading.textContent = text[wordIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(backspace, 50);
    } else {
        isBackspacing = false;
        wordIndex = (wordIndex + 1) % text.length;
        setTimeout(type, 1000);
    }
}

type();
