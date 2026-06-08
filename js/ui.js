// ui.js

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
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
        
        // Cần CSS phụ để làm cho menu mobile xịn hơn, hiện tại toggle hiển thị cơ bản
    });
}
