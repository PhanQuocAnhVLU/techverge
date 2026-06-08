// ui.js

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    
    // Wow Effects
    initCustomCursor();
    initScrollReveal();
    initAmbientGlow();
});

function initThemeToggle() {
    const btn = document.getElementById('btn-theme-toggle');
    if (!btn) return;

    // Check local storage for preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(btn, currentTheme);

    btn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(btn, newTheme);
    });
}

function updateThemeIcon(btn, theme) {
    const icon = btn.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'ri-sun-line';
    } else {
        icon.className = 'ri-moon-line';
    }
}

function initMobileMenu() {
    // Basic implementation for mobile menu toggle
    const btnMenu = document.getElementById('btn-menu');
    const nav = document.querySelector('.main-nav');
    
    if (!btnMenu || !nav) return;

    btnMenu.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'none' || nav.style.display === '' ? 'block' : 'none';
    });
}

function initCustomCursor() {
    // Không áp dụng trên mobile
    if (window.innerWidth <= 768) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const follower = document.createElement('div');
    follower.className = 'custom-cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // Smooth follow loop
    function animate() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
        requestAnimationFrame(animate);
    }
    animate();

    // Hover effect
    const addHover = () => {
        document.querySelectorAll('a, button, .article-card').forEach(el => {
            el.addEventListener('mouseenter', () => follower.classList.add('active'));
            el.addEventListener('mouseleave', () => follower.classList.remove('active'));
        });
    };
    
    // Initial bind
    addHover();
    
    // Re-bind when DOM changes (since content is loaded dynamically)
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const markItems = () => {
        document.querySelectorAll('.article-card:not(.reveal-item), .widget:not(.reveal-item), .hero-article:not(.reveal-item), .article-body p:not(.reveal-item), .article-body h2:not(.reveal-item)').forEach((el, index) => {
            el.classList.add('reveal-item');
            el.style.transitionDelay = `${(index % 5) * 0.1}s`;
            observer.observe(el);
        });
    };

    markItems();
    const domObserver = new MutationObserver(markItems);
    domObserver.observe(document.body, { childList: true, subtree: true });
}

function initAmbientGlow() {
    const glow = document.createElement('div');
    glow.className = 'ambient-glow';
    document.body.appendChild(glow);
}
