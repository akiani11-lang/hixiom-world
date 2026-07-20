window.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline();

    timeline.to(".intro-title", {
        delay: 0.5,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out"
    });

    timeline.to(".intro-subtitle", {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out"
    }, "-=0.8");

    timeline.to("#intro-screen", {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 1.0,
        ease: "power3.inOut"
    });

    timeline.to("#main-content", {
        opacity: 1,
        scale: 1,
        duration: 2.0,
        ease: "power3.out",
        onComplete: () => {
            document.body.style.overflow = "auto";
        }
    }, "-=1.0");
});
