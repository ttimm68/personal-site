let styleMode;
document.addEventListener("DOMContentLoaded", (e) => {
    styleMode = 'light';
    document.body.classList.add('light');
});


// Invert Button

function invertStyles() {
    if (styleMode == 'light') {
        document.body.classList.replace('light', 'dark');
        styleMode = 'dark';
    } else {
        document.body.classList.replace('dark', 'light');
        styleMode = 'light';
    }
}