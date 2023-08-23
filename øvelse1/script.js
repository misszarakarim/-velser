
const images = document.querySelectorAll('img');

function checkForAlcohol() {
    if (this.alt === 'øl' || this.alt === 'snaps') {
        console.log('Indeholder alkohol');
    } else if (this.alt === 'fanta' || this.alt === 'cola') {
        console.log('Alkoholfri');
    }
}

images.forEach(image => {
    image.addEventListener('click', checkForAlcohol);
});