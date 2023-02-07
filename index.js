// Invert Button

function invertStyles() {
    const allElements = document.querySelectorAll();
    for (element in allElements) {
        element.style.background = 'black';
        element.style.color = 'white';
    }
}