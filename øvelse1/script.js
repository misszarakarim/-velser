// Hent alle billeder på siden
const images = document.querySelectorAll('img');

// Opret en funktion, der skal køres, når et billede klikkes
function checkForAlcohol() {
    if (this.alt === 'øl' || this.alt === 'snaps') {
        console.log('Indeholder alkohol');
    } else if (this.alt === 'fanta' || this.alt === 'cola') {
        console.log('Alkoholfri');
    }
}

// Tilføj klikhændelse til hvert billede
images.forEach(image => {
    image.addEventListener('click', checkForAlcohol);
});