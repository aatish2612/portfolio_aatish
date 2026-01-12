document.addEventListener('DOMContentLoaded', () => {
    
    // --- DICTIONNAIRE DE TRADUCTION ---
    const translations = {
        'fr': {
            'nav-home': '[accueil]',
            'nav-bio': '[bio]',
            'nav-cursus': '[cursus]',
            'nav-projects': '[projets]',
            'nav-skills': '[competences]',
            'nav-contact': '[contact]',
            'section-bio': '[bio.txt]',
            'bio-text': '<br>Étudiant en 2ème année de développement web, je passe le plus clair de mon temps à donner vie à des idées avec du HTML, du CSS et WordPress. Mon clavier est mon meilleur allié pour construire des sites web de A à Z. <br><br>Quand je ne suis pas en train de coder, il y a de fortes chances que je sois plongé dans un film. Je suis le genre de personne qui peut analyser une scène culte avec autant de passion qu\'une ligne de code... tout en cherchant le meilleur spot de burgers en ville. <br><br>Sérieux mais toujours décontracté, je suis à la recherche de ma prochaine aventure : que ce soit une alternance pour ma 3ème année, des missions en freelance, ou à plus long terme, un poste d\'expert HTML/CSS ou WordPress. <br>',
            'section-cursus': '[cursus.log]',
            'cursus-date-1': '2025 - 2027 (En cours)',
            'cursus-desc-1': '2ème Année [Bachelor Développement Web] à [.Decode - Paris] - <i>En recherche d\'alternance pour la 3e année</i>',
            'cursus-desc-2': '1ère Année [BUT - GEII] à [IUT de Cergy-Pontoise]',
            'cursus-desc-3': 'Obtention du Baccalauréat [STI2D]',
            'section-projets': '[./projets/]',
            'click-info': 'Cliquez pour voir les détails >_',
            'card-desc-biryani': 'Développement d\'un site sur un plat indien au lycée.',
            'card-desc-cartes': 'Développement d\'un site sur un jeu de cartes.',
            'card-title-cookie': 'Identité visuelle',
            'card-desc-cookie': 'Création d\'identité visuelle pour une cookiterie.',
            'card-desc-kolly': 'Mon projet personnel en cours....',
            'section-skills': '[./competences/]',
            'section-contact': '[contact.sh]',
            'contact-text': '> Prêt à discuter de votre projet ou d\'une opportunité ?',
            'footer-text': '// Fin du document. &copy; 2025 Aatish ASHOKKUMAR LAMIRAND.',
            'modal-obj-title': 'Contexte et Objectif',
            'btn-see-site': 'Voir le site en ligne',
            'btn-play-game': 'Jouer au jeu',
            'btn-see-pdf': 'Voir le Dossier PDF',
            
            // MODALE BIRYANI
            'modal-biryani-title': 'Site Vitrine : Allo Biryani',
            'modal-biryani-obj': 'Ce projet a été réalisé dans le cadre d\'un <strong>devoir scolaire</strong>. C\'était la toute première fois que je devais utiliser concrètement du <strong>HTML et du CSS</strong> pour construire un site. J\'ai voulu profiter de cette occasion pour mettre en avant ma culture indienne, et plus particulièrement l\'une des meilleures spécialités gastronomiques de mon pays : le Biryani.',
            'modal-biryani-cap1-title': '1. La Page Home',
            'modal-biryani-cap1-desc': 'La page d\'accueil sert d\'introduction visuelle. J\'ai voulu qu\'elle soit accueillante avec un visuel fort pour donner immédiatement le ton culturel et gourmand du site.',
            'modal-biryani-cap2-title': '2. La Page About',
            'modal-biryani-cap2-desc': 'Ici, je raconte l\'histoire et les origines du Biryani. C\'était l\'exercice idéal pour apprendre à structurer des blocs de texte et aligner du contenu informatif.',
            'modal-biryani-cap3-title': '3. La Page Recipes',
            'modal-biryani-cap3-desc': 'Le cœur du site. J\'ai dû organiser la présentation des recettes, les listes d\'ingrédients et les étapes de préparation pour que ce soit clair et lisible.',
            'modal-biryani-cap4-title': '4. Page Contact',
            'modal-biryani-cap4-desc': 'Une page essentielle pour un site vitrine, permettant de comprendre la structure des formulaires (inputs, boutons) en HTML.',

            // MODALE CARTES
            'modal-cartes-title': 'Jeu de Cartes (Partiel)',
            'modal-cartes-obj': 'Ce projet a été réalisé lors d\'un <strong>partiel de ma première année de Bachelor</strong>. La contrainte était forte : nous avions seulement <strong>3 heures</strong> pour reproduire fidèlement un jeu de cartes interactif à partir d\'une maquette imposée. Il fallait gérer la pression du temps tout en livrant un code HTML/CSS/JS propre et fonctionnel.',
            'modal-cartes-cap1-title': '1. Les Règles du Jeu',
            'modal-cartes-cap1-desc': 'Comme il s\'agit d\'un projet scolaire non officiel, j\'ai utilisé du "Lorem Ipsum" pour simuler le texte des règles. L\'objectif ici était de montrer ma capacité à mettre en page une section textuelle complexe.',
            'modal-cartes-cap2-title': '2. "Que contient la boîte ?"',
            'modal-cartes-cap2-desc': 'Réalisation de la section détaillant le matériel. Le but était de respecter scrupuleusement l\'alignement et la hiérarchie visuelle de la maquette fournie lors de l\'examen.',
            'modal-cartes-cap3-title': '3. Le Footer',
            'modal-cartes-cap3-desc': 'Intégration du pied de page. Même sur un projet rapide, il était important de soigner les finitions (mentions légales, liens) pour un rendu professionnel.',
            'modal-cartes-cap4-title': '4. Le Plateau de Jeu',
            'modal-cartes-cap4-desc': 'Le cœur de l\'interaction. Utilisation du JavaScript pour gérer le retournement des cartes, les paires et la logique de victoire.',

            // MODALE COOKIE
            'modal-cookie-title': 'Identité : Cookie Dream',
            'modal-cookie-obj': 'Ce projet est issu d\'un <strong>devoir de design</strong> lors de ma première année de Bachelor. L\'objectif était de créer l\'identité complète de la marque "Cookie Dream". J\'ai utilisé <strong>Illustrator</strong> pour concevoir un univers gourmand et artisanal, du logo jusqu\'à la mise en page de la carte des menus.',
            'modal-cookie-cap1-title': '1. Le Logo "Cookie Dream"',
            'modal-cookie-cap1-desc': 'Création d\'un logo représentant un cookie croqué pour l\'aspect gourmand. J\'ai choisi une typographie manuscrite pour évoquer le côté "fait maison" et artisanal.',
            'modal-cookie-cap2-title': '2. La Charte Graphique',
            'modal-cookie-cap2-desc': 'Sélection de couleurs chaudes pour "donner faim" : le brun foncé (#261608) pour le chocolat et le doré (#BF7B3F) pour le caramel fondu.',
            'modal-cookie-cap3-title': '3. Les Goodies',
            'modal-cookie-cap3-desc': 'Déclinaison de la marque sur des objets publicitaires : Mugs personnalisés beiges et sacs en coton pour que les clients transportent leurs cookies avec style.',
            'modal-cookie-cap4-title': '4. La Carte des Menus',
            'modal-cookie-cap4-desc': 'Mise en page de l\'offre : présentation des produits phares comme le "Nutella Dream" ou le "Speculoos Crunch" avec des descriptions alléchantes.',

            // MODALE KOLLYWOOD
            'modal-kolly-title': 'Projet : Kollywood Party',
            'modal-kolly-obj': 'Aujourd\'hui, je travaille sur un <strong>projet personnel ambitieux</strong> : créer un jeu et une plateforme pour les fans du cinéma Tamoul (Kollywood). C\'est un double défi pour moi : d\'abord par passion pour ce cinéma, mais surtout pour <strong>prouver à mes futurs clients</strong> que je maîtrise les langages web (HTML, CSS, JS) et que je suis capable de mener un projet complexe de A à Z.',
            'modal-kolly-cap1-title': '1. Concept & Recherche',
            'modal-kolly-cap1-desc': 'Phase d\'analyse des besoins des fans de cinéma Tamoul (À venir).',
            'modal-kolly-cap2-title': '2. Design UI/UX',
            'modal-kolly-cap2-desc': 'Création des maquettes pour une expérience utilisateur fluide (À venir).',
            'modal-kolly-cap3-title': '3. Développement',
            'modal-kolly-cap3-desc': 'Intégration et codage des fonctionnalités principales (À venir).',
            'modal-kolly-cap4-title': '4. Lancement',
            'modal-kolly-cap4-desc': 'Mise en ligne et évolution de la plateforme (À venir).',
        },
        'en': {
            'nav-home': '[home]',
            'nav-bio': '[about]',
            'nav-cursus': '[journey]',
            'nav-projects': '[projects]',
            'nav-skills': '[skills]',
            'nav-contact': '[contact]',
            'section-bio': '[about.txt]',
            'bio-text': '<br>As a 2nd-year Web Development student, I spend most of my time bringing ideas to life with HTML, CSS, and WordPress. My keyboard is my best ally for building websites from A to Z. <br><br>When I\'m not coding, chances are I\'m immersed in a movie. I\'m the kind of person who can analyze a cult scene with as much passion as a line of code... while looking for the best burger spot in town. <br><br>Serious but always laid-back, I am looking for my next adventure: whether it be a work-study program for my 3rd year, freelance missions, or long-term, a position as an HTML/CSS or WordPress expert.<br>',
            'section-cursus': '[journey.log]',
            'cursus-date-1': '2025 - 2027 (Current)',
            'cursus-desc-1': '2nd Year [Web Development Bachelor] at [.Decode - Paris] - <i>Looking for a work-study program for 3rd year</i>',
            'cursus-desc-2': '1st Year [BUT - GEII] at [IUT of Cergy-Pontoise]',
            'cursus-desc-3': 'High School Diploma [STI2D] obtained',
            'section-projets': '[./projects/]',
            'click-info': 'Click to see details >_',
            'card-desc-biryani': 'Development of a website about an Indian dish in high school.',
            'card-desc-cartes': 'Development of a card game website.',
            'card-title-cookie': 'Visual Identity',
            'card-desc-cookie': 'Creation of a visual identity for a cookie shop.',
            'card-desc-kolly': 'My personal project in progress....',
            'section-skills': '[./skills/]',
            'section-contact': '[contact.sh]',
            'contact-text': '> Ready to discuss your project or an opportunity?',
            'footer-text': '// End of document. &copy; 2025 Aatish ASHOKKUMAR LAMIRAND.',
            'modal-obj-title': 'Context and Objective',
            'btn-see-site': 'See live site',
            'btn-play-game': 'Play the game',
            'btn-see-pdf': 'See PDF File',

            // MODAL BIRYANI
            'modal-biryani-title': 'Showcase Site: Allo Biryani',
            'modal-biryani-obj': 'This project was realized as part of a <strong>school assignment</strong>. It was the very first time I had to concretely use <strong>HTML and CSS</strong> to build a site. I wanted to take this opportunity to highlight my Indian culture, and more particularly one of the best gastronomic specialties of my country: Biryani.',
            'modal-biryani-cap1-title': '1. The Home Page',
            'modal-biryani-cap1-desc': 'The home page serves as a visual introduction. I wanted it to be welcoming with strong visuals to immediately set the cultural and gourmet tone of the site.',
            'modal-biryani-cap2-title': '2. The About Page',
            'modal-biryani-cap2-desc': 'Here, I tell the history and origins of Biryani. It was the ideal exercise to learn how to structure text blocks and align informative content.',
            'modal-biryani-cap3-title': '3. The Recipes Page',
            'modal-biryani-cap3-desc': 'The heart of the site. I had to organize the presentation of recipes, ingredient lists, and preparation steps so that it is clear and readable.',
            'modal-biryani-cap4-title': '4. Contact Page',
            'modal-biryani-cap4-desc': 'An essential page for a showcase site, allowing me to understand the structure of forms (inputs, buttons) in HTML.',

            // MODAL CARDS
            'modal-cartes-title': 'Card Game (Exam)',
            'modal-cartes-obj': 'This project was carried out during a <strong>first-year Bachelor exam</strong>. The constraint was strong: we had only <strong>3 hours</strong> to faithfully reproduce an interactive card game from an imposed mockup. I had to manage time pressure while delivering clean and functional HTML/CSS/JS code.',
            'modal-cartes-cap1-title': '1. The Game Rules',
            'modal-cartes-cap1-desc': 'As this is an unofficial school project, I used "Lorem Ipsum" to simulate the rules text. The goal here was to show my ability to layout a complex textual section.',
            'modal-cartes-cap2-title': '2. "What\'s in the box?"',
            'modal-cartes-cap2-desc': 'Realization of the section detailing the game material. The goal was to scrupulously respect the alignment and visual hierarchy of the mockup provided during the exam.',
            'modal-cartes-cap3-title': '3. The Footer',
            'modal-cartes-cap3-desc': 'Integration of the footer. Even on a quick project, it was important to polish the finishes (legal notices, links) for a professional rendering.',
            'modal-cartes-cap4-title': '4. The Game Board',
            'modal-cartes-cap4-desc': 'The heart of the interaction. Using JavaScript to manage card flipping, pairs, and victory logic.',

            // MODAL COOKIE
            'modal-cookie-title': 'Design: Cookie Dream',
            'modal-cookie-obj': 'This project comes from a <strong>design assignment</strong> during my first year of Bachelor. The goal was to create the complete identity of the "Cookie Dream" brand. I used <strong>Illustrator</strong> to design a gourmet and artisanal universe, from the logo to the menu layout.',
            'modal-cookie-cap1-title': '1. The "Cookie Dream" Logo',
            'modal-cookie-cap1-desc': 'Creation of a logo representing a bitten cookie for the gourmet aspect. I chose a handwritten typography to evoke the "homemade" and artisanal side.',
            'modal-cookie-cap2-title': '2. Graphic Charter',
            'modal-cookie-cap2-desc': 'Selection of warm colors to "make you hungry": dark brown (#261608) for chocolate and golden (#BF7B3F) for melted caramel.',
            'modal-cookie-cap3-title': '3. The Goodies',
            'modal-cookie-cap3-desc': 'Brand variation on promotional items: Personalized beige mugs and cotton bags so customers can carry their cookies in style.',
            'modal-cookie-cap4-title': '4. The Menu Card',
            'modal-cookie-cap4-desc': 'Layout of the offer: presentation of flagship products like "Nutella Dream" or "Speculoos Crunch" with mouth-watering descriptions.',

            // MODAL KOLLYWOOD
            'modal-kolly-title': 'Project: Kollywood Party',
            'modal-kolly-obj': 'Today, I am working on an <strong>ambitious personal project</strong>: creating a game and platform for fans of Tamil cinema (Kollywood). It is a double challenge for me: first out of passion for this cinema, but above all to <strong>prove to my future clients</strong> that I master web languages (HTML, CSS, JS) and that I am capable of leading a complex project from A to Z.',
            'modal-kolly-cap1-title': '1. Concept & Research',
            'modal-kolly-cap1-desc': 'Analysis phase of Tamil cinema fan needs (Coming soon).',
            'modal-kolly-cap2-title': '2. UI/UX Design',
            'modal-kolly-cap2-desc': 'Creation of mockups for a fluid user experience (Coming soon).',
            'modal-kolly-cap3-title': '3. Development',
            'modal-kolly-cap3-desc': 'Integration and coding of main features (Coming soon).',
            'modal-kolly-cap4-title': '4. Launch',
            'modal-kolly-cap4-desc': 'Platform launch and evolution (Coming soon).',
        }
    };

    let currentLang = 'fr'; // Langue par défaut

    // --- 1. GESTION DU CHANGEMENT DE LANGUE ---
    const langBtn = document.getElementById('lang-toggle');
    const allTextElements = document.querySelectorAll('[data-lang]');

    // Fonction pour mettre à jour tous les textes
    function updateLanguage(lang) {
        allTextElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; // innerHTML pour garder les <strong> et <br>
            }
        });
        
        // Mettre à jour le texte du bouton
        langBtn.textContent = lang === 'fr' ? '[en]' : '[fr]';
        
        // Relancer l'effet machine à écrire avec la nouvelle langue
        startTypingEffect(lang);
    }

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        updateLanguage(currentLang);
    });


    // --- 2. EFFET MACHINE À ÉCRIRE (MODIFIÉ POUR LANGUES) ---
    const textElement = document.getElementById('typing-effect');
    let typeTimeout; // Pour pouvoir arrêter l'animation en cours

    function startTypingEffect(lang) {
        if (!textElement) return;

        // Reset
        clearTimeout(typeTimeout);
        textElement.textContent = '';

        // Textes selon la langue
        let textsToType = [];
        if (lang === 'fr') {
            textsToType = [
                "Bonjour, je suis Aatish ASHOKKUMAR LAMIRAND.",
                "Je suis un Etudiant Développeur Web.",
                "Bienvenue sur mon portfolio !"
            ];
        } else {
            textsToType = [
                "Hello, I am Aatish ASHOKKUMAR LAMIRAND.",
                "I am a Web Development Student.",
                "Welcome to my portfolio!"
            ];
        }

        const typingSpeed = 80;
        const eraseSpeed = 40;
        const pauseTime = 2000;
        let textIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textsToType[textIndex].length) {
                textElement.textContent += textsToType[textIndex].charAt(charIndex);
                charIndex++;
                typeTimeout = setTimeout(type, typingSpeed);
            } else {
                typeTimeout = setTimeout(erase, pauseTime);
            }
        }

        function erase() {
            if (charIndex > 0) {
                textElement.textContent = textsToType[textIndex].substring(0, charIndex - 1);
                charIndex--;
                typeTimeout = setTimeout(erase, eraseSpeed);
            } else {
                textIndex = (textIndex + 1) % textsToType.length;
                typeTimeout = setTimeout(type, typingSpeed);
            }
        }
        
        type();
    }

    // Lancer l'effet au démarrage (en français)
    startTypingEffect('fr');


    // --- 3. GESTION DES GRANDES MODALES PROJETS ---
    const projectCards = document.querySelectorAll('.project-card');
    const closeButtons = document.querySelectorAll('.close-modal');
    const overlays = document.querySelectorAll('.modal-overlay');

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

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        });
    });

    // --- 4. GESTION DU ZOOM (LIGHTBOX) ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const zoomOverlay = document.getElementById('modal-zoom');
    const zoomImg = zoomOverlay.querySelector('.zoom-img');
    const zoomTitle = zoomOverlay.querySelector('.zoom-title');
    const zoomDesc = zoomOverlay.querySelector('.zoom-desc');
    const closeZoomBtn = zoomOverlay.querySelector('.close-zoom');

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const imgSource = item.querySelector('img').src;
            // On récupère le texte directement dans le DOM (donc il sera déjà traduit s'il faut)
            const titleText = item.querySelector('h4').textContent;
            const descText = item.querySelector('p').textContent;

            zoomImg.src = imgSource;
            zoomTitle.textContent = titleText;
            zoomDesc.textContent = descText;
            zoomOverlay.classList.add('active');
        });
    });

    closeZoomBtn.addEventListener('click', () => {
        zoomOverlay.classList.remove('active');
    });

    zoomOverlay.addEventListener('click', (e) => {
        if (e.target === zoomOverlay) {
            zoomOverlay.classList.remove('active');
        }
    });
});