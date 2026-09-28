document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('year').textContent = new Date().getFullYear();

    const skills = [
        "Python", "Pygame", "Flask", "MySQL", "LangChain",
        "RAG", "HTML", "CSS", "JavaScript", "Git & GitHub"
    ];

    const skillsContainer = document.getElementById('skills-container');
    skills.forEach((skill, index) => {
        const span = document.createElement('span');
        span.className = 'px-6 py-3 bg-white/[0.05] border border-white/15 rounded-full text-sm font-medium text-white/90 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-white hover:bg-white/[0.12] hover:text-white transition-all duration-300 cursor-default';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });

    const phrases = [
        "Software Developer.",
        "PyGame Programmer.",
        "AI Enthusiast."
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);

    const revealElements = document.querySelectorAll('.reveal-up');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg', 'border-white/15');
            navbar.classList.replace('bg-paper/85', 'bg-surface/95');
        } else {
            navbar.classList.remove('shadow-lg', 'border-white/15');
            navbar.classList.replace('bg-surface/95', 'bg-paper/85');
        }
    });
});
