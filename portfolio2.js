document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. EFFET MACHINE À ÉCRIRE ---
    const textElement = document.getElementById('typing-effect');
    if (textElement) {
        const textsToType = [
            "Bonjour, je suis Aatish ASHOKKUMAR LAMIRAND.",
            "Je suis un Etudiant Développeur Web.",
            "Bienvenue sur mon portfolio !"
        ];
        const typingSpeed = 80;
        const eraseSpeed = 40;
        const pauseTime = 2000;
        let textIndex = 0;
        let charIndex = 0;
        function type() {
            if (charIndex < textsToType[textIndex].length) {
                textElement.textContent += textsToType[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, pauseTime);
            }
        }
        function erase() {
            if (charIndex > 0) {
                textElement.textContent = textsToType[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, eraseSpeed);
            } else {
                textIndex = (textIndex + 1) % textsToType.length;
                setTimeout(type, typingSpeed);
            }
        }
        setTimeout(type, 500);
    }

    // --- 2. GESTION DES GRANDES MODALES PROJETS ---
    const projectCards = document.querySelectorAll('.project-card');
    const closeButtons = document.querySelectorAll('.close-modal');
    const overlays = document.querySelectorAll('.modal-overlay');

    // Ouvrir le projet
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.classList.add('modal-open'); 
            }
        });
    });

    // Fermer projet avec la croix
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    });

    // Fermer projet en cliquant sur le fond (sauf si zoom actif)
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        });
    });

    // --- 3. GESTION DU ZOOM (LIGHTBOX) ---
    // Gère le clic sur les 4 images de la galerie
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const zoomOverlay = document.getElementById('modal-zoom');
    const zoomImg = zoomOverlay.querySelector('.zoom-img');
    const zoomTitle = zoomOverlay.querySelector('.zoom-title');
    const zoomDesc = zoomOverlay.querySelector('.zoom-desc');
    const closeZoomBtn = zoomOverlay.querySelector('.close-zoom');

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Empêche de fermer la modale derrière
            e.stopPropagation();

            // Récupérer les infos de l'élément cliqué
            const imgSource = item.querySelector('img').src;
            const titleText = item.querySelector('h4').textContent;
            const descText = item.querySelector('p').textContent;

            // Remplir la fenêtre de zoom
            zoomImg.src = imgSource;
            zoomTitle.textContent = titleText;
            zoomDesc.textContent = descText;

            // Afficher le zoom
            zoomOverlay.classList.add('active');
        });
    });

    // Fermer le zoom
    closeZoomBtn.addEventListener('click', () => {
        zoomOverlay.classList.remove('active');
    });

    // Fermer le zoom en cliquant sur le fond noir
    zoomOverlay.addEventListener('click', (e) => {
        if (e.target === zoomOverlay) {
            zoomOverlay.classList.remove('active');
        }
    });
});