// category.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const catId = urlParams.get('id') || 'tech';
    
    const catInfo = getCategoryInfo(catId);
    
    // Set Header UI
    document.title = `${catInfo.name} - TechVerge`;
    const titleEl = document.getElementById('category-title');
    if (titleEl) {
        titleEl.textContent = catInfo.name;
        document.documentElement.style.setProperty('--category-color', catInfo.color);
    }
    
    // Highlight Nav Link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `category.html?id=${catId}`) {
            link.parentElement.classList.add('active');
        }
    });

    renderCategoryArticles(catId);
});

function renderCategoryArticles(catId) {
    const grid = document.getElementById('category-articles');
    if (!grid) return;

    const filtered = articles.filter(a => a.category === catId);

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="font-size: 1.25rem; color: var(--color-text-secondary);">Hiện chưa có bài viết nào trong chuyên mục này.</p>';
        return;
    }

    const html = filtered.map(a => {
        const catInfo = getCategoryInfo(a.category);
        const scoreBadge = a.score ? `<div style="position: absolute; top: 0.5rem; right: 0.5rem; background: var(--color-bg); color: var(--color-text-primary); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-weight: bold; font-size: 0.8rem; z-index: 2; border: 2px solid ${a.score >= 8 ? 'var(--color-success)' : 'var(--color-warning)'}">${a.score}</div>` : '';
        const videoBadge = a.videoUrl ? `<div style="position: absolute; bottom: 0.5rem; left: 0.5rem; background: rgba(0,0,0,0.7); color: #fff; padding: 0.3rem 0.6rem; border-radius: var(--radius-full); font-weight: bold; font-size: 0.75rem; z-index: 2; display:flex; align-items:center; gap:0.25rem;"><i class="ri-play-circle-fill"></i> Video</div>` : '';

        return `
        <article class="article-card">
            <div class="card-img-wrapper">
                ${scoreBadge}
                ${videoBadge}
                <img src="${a.imageUrl}" alt="${a.title}" class="card-img" loading="lazy">
            </div>
            <div class="card-content">
                <div class="card-meta" style="margin-bottom: 0.25rem;">
                    <a href="#" style="color: ${catInfo.color}; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em;">${catInfo.name}</a>
                    <span>&bull;</span>
                    <span>${formatDate(a.date)}</span>
                </div>
                <h3 class="card-title"><a href="article.html?id=${a.id}">${a.title}</a></h3>
                <p class="card-excerpt">${a.excerpt}</p>
                <div class="card-meta" style="margin-top: auto; padding-top: 0.5rem;">
                    <span><i class="ri-user-line"></i> ${a.author}</span>
                </div>
            </div>
        </article>
        `;
    }).join('');

    grid.innerHTML = html;
}
