// article.js

document.addEventListener('DOMContentLoaded', () => {
    // Lấy ID bài viết từ URL, nếu không có mặc định lấy bài số 1
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || '1';
    
    renderArticle(id);
});

function renderArticle(id) {
    const container = document.getElementById('article-container');
    if (!container) return;

    const article = articles.find(a => a.id === id);
    if (!article) {
        container.innerHTML = '<h1>Bài viết không tồn tại</h1>';
        return;
    }

    const catInfo = getCategoryInfo(article.category);
    document.title = `${article.title} - TechVerge`;

    let reviewHTML = '';
    if (article.score) {
        const borderCol = article.score >= 8 ? 'var(--color-success)' : 'var(--color-warning)';
        reviewHTML = `
        <div class="review-box">
            <div class="review-score-circle" style="border-color: ${borderCol}; color: ${borderCol};">
                ${article.score}
            </div>
            <div class="review-details">
                <h3>The TechVerge Score</h3>
                <div class="review-lists">
                    <div class="review-list good">
                        <h4>Điểm cộng</h4>
                        <ul>
                            <li>Hiệu năng vượt trội</li>
                            <li>Thiết kế cao cấp, hoàn thiện tốt</li>
                            <li>Tính năng đột phá</li>
                        </ul>
                    </div>
                    <div class="review-list bad">
                        <h4>Điểm trừ</h4>
                        <ul>
                            <li>Giá thành còn cao</li>
                            <li>Một số phần mềm chưa tối ưu</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    container.innerHTML = `
        <header class="article-header">
            <a href="#" class="article-category" style="color: ${catInfo.color}">${catInfo.name}</a>
            <h1 class="article-title">${article.title}</h1>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-meta-row">
                <div class="article-meta-item">
                    <i class="ri-user-line"></i> By <strong>${article.author}</strong>
                </div>
                <div class="article-meta-item">
                    <i class="ri-calendar-line"></i> ${formatDate(article.date)}
                </div>
                <div class="article-meta-item">
                    <i class="ri-time-line"></i> ${article.readTime}
                </div>
                <div class="article-meta-item">
                    <button id="btn-bookmark" class="icon-btn" style="border:1px solid var(--color-border); border-radius:var(--radius-full); width:32px; height:32px; margin-left:1rem;">
                        <i class="ri-bookmark-line"></i>
                    </button>
                    <button class="icon-btn" style="border:1px solid var(--color-border); border-radius:var(--radius-full); width:32px; height:32px;">
                        <i class="ri-share-line"></i>
                    </button>
                </div>
            </div>
        </header>

        ${article.videoUrl ? 
        `<div class="article-hero-video" style="position: relative; width: 100%; max-width: 1200px; margin: 0 auto var(--space-8); border-radius: var(--radius-lg); overflow: hidden; aspect-ratio: 16/9; box-shadow: var(--shadow-lg);">
            <iframe src="${article.videoUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>` :
        `<figure class="article-hero-image">
            <img src="${article.imageUrl}" alt="${article.title}">
        </figure>`}

        <div class="article-body">
            ${article.content || `<p>${article.excerpt}</p>`}
            
            ${reviewHTML}
            
            <div style="display:flex; gap:0.5rem; margin-top:var(--space-6); padding-top:var(--space-4); border-top:1px solid var(--color-border);">
                <span style="font-weight:600; margin-right:1rem;">Tags:</span>
                ${article.tags ? article.tags.map(t => `<a href="#" class="badge">${t}</a>`).join('') : ''}
            </div>
        </div>
    `;

    // Bookmark logic
    const btnBookmark = document.getElementById('btn-bookmark');
    const icon = btnBookmark.querySelector('i');
    const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (saved.includes(id)) {
        icon.className = 'ri-bookmark-fill';
        icon.style.color = 'var(--color-accent)';
    }

    btnBookmark.addEventListener('click', () => {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        if (bookmarks.includes(id)) {
            bookmarks = bookmarks.filter(b => b !== id);
            icon.className = 'ri-bookmark-line';
            icon.style.color = '';
        } else {
            bookmarks.push(id);
            icon.className = 'ri-bookmark-fill';
            icon.style.color = 'var(--color-accent)';
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    });
}
