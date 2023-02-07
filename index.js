// Invert Button

function invertStyles() {
    const allElements = document.querySelectorAll();
    for (element in allElements) {
        element.style.backgroundColor = 'black';
        element.style.color = 'white';
    }
}