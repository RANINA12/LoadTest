const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});


const floatBar = document.getElementById('floatBar');
window.addEventListener('scroll', () => {
    floatBar.classList.toggle('visible', window.scrollY > 300);
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger children if available
                const el = entry.target;
                el.style.transitionDelay = `${i * 60}ms`;
                el.classList.add('visible');
                revealObserver.unobserve(el);
            }
        });
    },
    { threshold: 0.12 }
);

const revealTargets = [
    '.about-grid',
    '.service-card',
    '.work-card',
    '.contact-card',
    '.section-title',
    '.section-label',
    '.contact-sub',
    '.work-note',
    '.stats-row',
];
revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});

const countObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.dataset.target;
                const duration = 1600;
                const step = target / (duration / 16);
                let current = 0;

                const update = () => {
                    current += step;
                    if (current < target) {
                        el.textContent = Math.floor(current);
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target;
                    }
                };
                requestAnimationFrame(update);
                countObserver.unobserve(el);
            }
        });
    },
    { threshold: 0.5 }
);

document.querySelectorAll('.stat-num').forEach(el => countObserver.observe(el));


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
