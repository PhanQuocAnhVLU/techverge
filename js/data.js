// data.js
const categories = [
    { id: 'tech', name: 'Tech', color: 'var(--color-accent)' },
    { id: 'reviews', name: 'Reviews', color: '#7B61FF' },
    { id: 'science', name: 'Science', color: '#00C853' },
    { id: 'creators', name: 'Creators', color: '#FFAB00' },
    { id: 'entertainment', name: 'Entertainment', color: '#00B0FF' }
];

const articles = [
    {
        id: '1',
        title: 'Apple Intelligence: Trải nghiệm thực tế các tính năng AI mới nhất trên iOS 18',
        excerpt: 'Siri mới thông minh hơn, khả năng tạo ảnh Genmoji và các công cụ viết lại văn bản hoạt động như thế nào trong thực tế? Dưới đây là đánh giá chi tiết sau 1 tuần sử dụng.',
        category: 'tech',
        imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1600&auto=format&fit=crop',
        author: 'Minh Hoàng',
        date: '2026-06-08',
        readTime: '8 min read',
        featured: true,
        tags: ['Apple', 'AI', 'iOS 18']
    },
    {
        id: '2',
        title: 'Đánh giá NVIDIA RTX 5090: Sức mạnh quái vật cho kỷ nguyên 8K',
        excerpt: 'Chiếc card đồ họa đầu bảng mới nhất từ NVIDIA chứng tỏ sức mạnh vượt trội, nhưng đi kèm mức giá và mức tiêu thụ điện năng không dành cho số đông.',
        category: 'reviews',
        imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=800&auto=format&fit=crop',
        author: 'Tuấn Cường',
        date: '2026-06-07',
        readTime: '12 min read',
        featured: false,
        score: 8.5,
        tags: ['NVIDIA', 'PC', 'GPU']
    },
    {
        id: '3',
        title: 'Kính thực tế ảo mới của Meta: Nhẹ hơn, rẻ hơn, nhưng đã đủ tốt chưa?',
        excerpt: 'Với mức giá chỉ bằng một phần ba so với Apple Vision Pro, thiết bị mới của Meta đang nỗ lực đưa VR đến với đại chúng.',
        category: 'reviews',
        imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop',
        author: 'Linh Nguyễn',
        date: '2026-06-06',
        readTime: '6 min read',
        featured: false,
        score: 7.0,
        tags: ['VR', 'Meta', 'Gadgets']
    },
    {
        id: '4',
        title: 'Phát hiện mới về vật chất tối có thể thay đổi cách chúng ta hiểu về vũ trụ',
        excerpt: 'Kính viễn vọng không gian James Webb vừa gửi về những dữ liệu có thể lật đổ các lý thuyết vật lý hiện đại.',
        category: 'science',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop',
        author: 'Hải Đăng',
        date: '2026-06-05',
        readTime: '10 min read',
        featured: false,
        tags: ['Space', 'Physics', 'JWST']
    },
    {
        id: '5',
        title: 'Thế hệ laptop ARM mới: Windows cuối cùng đã có thể đấu với MacBook M3?',
        excerpt: 'Các vi xử lý Snapdragon X Elite đang mang lại thời lượng pin đáng kinh ngạc cho máy tính Windows.',
        category: 'tech',
        imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop',
        author: 'Bảo Trần',
        date: '2026-06-05',
        readTime: '7 min read',
        featured: false,
        tags: ['Laptop', 'Windows', 'ARM']
    },
    {
        id: '6',
        title: 'Cuộc chiến pháp lý giữa Epic Games và Apple có diễn biến mới',
        excerpt: 'Tòa án châu Âu yêu cầu Apple mở cửa hoàn toàn cho các kho ứng dụng bên thứ ba.',
        category: 'tech',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
        author: 'Ngọc Mai',
        date: '2026-06-04',
        readTime: '5 min read',
        featured: false,
        tags: ['Law', 'Apple', 'Business']
    },
    {
        id: '7',
        title: 'Trí tuệ nhân tạo tạo sinh: Mối đe dọa hay cơ hội cho các nhà sáng tạo nội dung?',
        excerpt: 'Sự bùng nổ của các công cụ như Sora và Midjourney đang dấy lên nhiều lo ngại về bản quyền và tương lai của nghề thiết kế.',
        category: 'creators',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
        author: 'Minh Tuấn',
        date: '2026-06-03',
        readTime: '15 min read',
        featured: false,
        tags: ['AI', 'Art', 'Copyright']
    },
    {
        id: '8',
        title: 'Review Phim "The Matrix: Reboot": Khi máy móc bắt đầu biết yêu',
        excerpt: 'Phần tiếp theo của loạt phim bom tấn mang đến một góc nhìn hoàn toàn mới về AI, nhưng kịch bản lại gây nhiều tranh cãi.',
        category: 'entertainment',
        imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
        author: 'Quỳnh Trang',
        date: '2026-06-02',
        readTime: '9 min read',
        featured: false,
        score: 6.5,
        tags: ['Movie', 'Sci-Fi', 'Matrix']
    },
    {
        id: '9',
        title: 'Robot hút bụi thông minh thế hệ 5: Có thể tự động giặt giẻ và lau cầu thang',
        excerpt: 'Sản phẩm mới nhất từ Dreame không chỉ có lực hút khủng mà còn giải quyết được bài toán làm sạch đa tầng trong nhà phố.',
        category: 'reviews',
        imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop',
        author: 'Lê Hoàng',
        date: '2026-06-01',
        readTime: '8 min read',
        featured: false,
        score: 9.0,
        tags: ['Smart Home', 'Robot', 'Review']
    },
    {
        id: '10',
        title: 'Phát hiện lỗ hổng bảo mật nghiêm trọng trên hàng triệu bộ định tuyến Wi-Fi cũ',
        excerpt: 'Chuyên gia bảo mật khuyến cáo người dùng nên cập nhật firmware ngay lập tức hoặc thay mới thiết bị nếu đã quá cũ.',
        category: 'tech',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
        author: 'Đức Huy',
        date: '2026-05-31',
        readTime: '4 min read',
        featured: false,
        tags: ['Security', 'Wi-Fi', 'Hack']
    },
    {
        id: '11',
        title: 'Trải nghiệm iPhone 17 Pro Max: Apple cuối cùng cũng thay đổi thiết kế?',
        excerpt: 'Video đánh giá chi tiết thiết kế mới, camera và thời lượng pin siêu khủng của chiếc iPhone được mong chờ nhất năm.',
        category: 'reviews',
        imageUrl: 'https://images.unsplash.com/photo-1603898037225-84ee4fa41e73?q=80&w=800&auto=format&fit=crop',
        author: 'Minh Hoàng',
        date: '2026-05-30',
        readTime: '10 min read',
        featured: false,
        score: 9.5,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tags: ['Apple', 'iPhone', 'Review', 'Video']
    }
];

// Utility: format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
}

// Utility: get category info
function getCategoryInfo(catId) {
    return categories.find(c => c.id === catId) || categories[0];
}
