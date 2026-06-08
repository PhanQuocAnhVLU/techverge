// app.js

document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderLatestArticles();
    renderTrending();
});

function renderHero() {
    const heroSection = document.getElementById('hero-section');
    if (!heroSection) return;

    // Lấy bài featured đầu tiên
    const featured = articles.find(a => a.featured) || articles[0];
    const catInfo = getCategoryInfo(featured.category);

    // Lấy 2 bài tiếp theo cho cột bên phải
    const sideArticles = articles.filter(a => a.id !== featured.id).slice(0, 2);

    const heroHTML = `
        <article class="hero-article">
            <img src="${featured.imageUrl}" alt="${featured.title}" class="card-img">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <span class="badge primary" style="background-color: ${catInfo.color}; margin-bottom: 0.5rem;">${catInfo.name}</span>
                <h2 class="card-title"><a href="article.html?id=${featured.id}">${featured.title}</a></h2>
                <div class="card-meta">
                    <span>${featured.author}</span>
                    <span>&bull;</span>
                    <span>${formatDate(featured.date)}</span>
                </div>
            </div>
        </article>
        
        <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            ${sideArticles.map(a => {
                const cInfo = getCategoryInfo(a.category);
                return `
                <article class="article-card" style="height: calc(50% - (var(--space-4)/2));">
                    <div class="card-img-wrapper" style="position: absolute; inset: 0; border-radius: var(--radius-lg);">
                        <img src="${a.imageUrl}" alt="${a.title}" class="card-img">
                        <div class="hero-overlay" style="background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%);"></div>
                    </div>
                    <div class="hero-content" style="padding: var(--space-4); z-index: 2; display: flex; flex-direction: column; justify-content: flex-end; height: 100%;">
                        <div><span class="badge primary" style="background-color: ${cInfo.color}; font-size:0.65rem; padding: 0.15rem 0.4rem; margin-bottom:0.5rem;">${cInfo.name}</span></div>
                        <h3 class="card-title" style="font-size: 1.25rem; color:#fff;"><a href="article.html?id=${a.id}" style="color:#fff;">${a.title}</a></h3>
                    </div>
                </article>
                `;
            }).join('')}
        </div>
    `;

    heroSection.innerHTML = heroHTML;
}

function renderLatestArticles() {
    const grid = document.getElementById('latest-articles');
    if (!grid) return;

    // Bỏ qua 3 bài đã hiển thị ở Hero
    const latest = articles.slice(3);

    const html = latest.map(a => {
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

function renderTrending() {
    const ul = document.getElementById('trending-articles');
    if (!ul) return;

    const trending = [...articles].sort((a, b) => b.readTime.localeCompare(a.readTime)).slice(0, 4);

    ul.innerHTML = trending.map((a, index) => {
        return `
        <li style="display: flex; gap: 1rem; align-items: flex-start;">
            <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: var(--color-border); line-height: 1;">${index + 1}</div>
            <div>
                <h4 style="font-size: 1rem; margin-bottom: 0.25rem; line-height: 1.3;"><a href="article.html?id=${a.id}">${a.title}</a></h4>
                <div style="font-size: 0.8rem; color: var(--color-text-secondary);">${formatDate(a.date)}</div>
            </div>
        </li>
        `;
    }).join('');
}
