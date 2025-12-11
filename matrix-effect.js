document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-canvas');
    // Vérifie si le canvas existe avant de continuer
    if (!canvas) {
        console.error("Erreur : L'élément avec l'ID 'matrix-canvas' n'a pas été trouvé.");
        return;
    }

    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()_+{}|:<>?-=[]\\;,./`~';
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    let drops = [];

    // Initialiser les gouttes de pluie à des positions aléatoires
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Fonction pour dessiner la pluie de code
    function drawMatrix() {
        // Fond légèrement transparent pour l'effet de traînée
        ctx.fillStyle = 'rgba(13, 17, 23, 0.05)'; // Couleur de fond sombre et très transparente
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#0F0'; // Couleur du texte Matrix (vert)
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Renvoyer la goutte en haut si elle dépasse ou aléatoirement
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        drops = [];
        const newColumns = Math.floor(width / fontSize);
        for (let i = 0; i < newColumns; i++) {
            drops[i] = 1;
        }
    });

    // Boucle d'animation
    setInterval(drawMatrix, 33); // Environ 30 images par seconde
});