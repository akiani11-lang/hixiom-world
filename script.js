// Nur 1 einfache Funktion: Schaltet das Intro beim Klick stumm ab
function weiterleitung() {
    const intro = document.getElementById('intro-screen');
    
    // Intro ausfaden
    intro.style.opacity = '0';
    
    // Profil einblenden
    document.body.classList.add('show-profile');
    document.body.style.overflow = "auto";
    
    // Intro nach der Animation komplett löschen
    setTimeout(() => {
        intro.style.display = 'none';
    }, 800);
}
