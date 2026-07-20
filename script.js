// Fehlerfreies Timingsystem
window.addEventListener('load', () => {
    
    // Sicherheitssystem: Falls GSAP blockiert wird, bricht das Intro trotzdem nach 3 Sekunden auf!
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        if (intro && intro.style.display !== 'none') {
            intro.style.opacity = '0';
            setTimeout(() => intro.style.display = 'none', 1500);
            document.body.classList.add('animation-ready');
            document.body.style.overflow = "auto";
        }
    }, 4500);

    // GSAP Hauptanimation
    if (typeof gsap !== 'undefined') {
        const timeline = gsap.timeline();

        // 1. Titel einblenden
        timeline.to(".intro-title", {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out"
        });

        // 2. Untertitel einblenden
        timeline.to(".intro-subtitle", {
            opacity: 1,
            duration: 1.0,
            ease: "power2.out"
        }, "-=0.6");

        // 3. Intro wegschalten
        timeline.to("#intro-screen", {
            opacity: 0,
            duration: 1.2,
            delay: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
                document.getElementById('intro-screen').style.display = "none";
            }
        });

        // 4. Hauptseite einfliegen lassen
        timeline.to("#main-content", {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            onComplete: () => {
                document.body.style.overflow = "auto";
            }
        }, "-=0.8");
    } else {
        // Fallback falls die externe GSAP Library vom Internet blockiert wird
        document.querySelector(".intro-title").style.opacity = "1";
        document.querySelector(".intro-subtitle").style.opacity = "1";
    }
});
