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
        tags: ['Apple', 'AI', 'iOS 18'],
        content: `
            <p><strong>Siri mới thông minh hơn, khả năng tạo ảnh Genmoji và các công cụ viết lại văn bản hoạt động như thế nào trong thực tế? Dưới đây là đánh giá chi tiết sau 1 tuần sử dụng.</strong></p>
            <p>Apple Intelligence đánh dấu bước chuyển mình lớn của gã khổng lồ xứ Cupertino trong cuộc đua trí tuệ nhân tạo. Khác với ChatGPT hay Gemini, Apple tập trung vào "AI cá nhân" - những tính năng hiểu rõ ngữ cảnh của bạn và được xử lý trực tiếp trên thiết bị (On-device).</p>
            <h2>Siri đã không còn "ngốc"</h2>
            <p>Sự thay đổi lớn nhất mà bạn có thể cảm nhận ngay là Siri. Không còn những câu trả lời rập khuôn, Siri giờ đây hiểu được ngôn ngữ tự nhiên, nhận diện ngữ cảnh trên màn hình và thậm chí có thể thực hiện chuỗi hành động phức tạp xuyên suốt các ứng dụng.</p>
            <blockquote>"Apple không cố tạo ra một AI biết tuốt, họ tạo ra một trợ lý ảo thực sự hiểu bạn là ai."</blockquote>
            <img src="https://images.unsplash.com/photo-1621360811013-c76831f162cb?q=80&w=800&auto=format&fit=crop" alt="iOS 18 AI">
            <h3>Genmoji và Writing Tools</h3>
            <p>Khả năng tạo emoji tùy chỉnh (Genmoji) mang lại trải nghiệm chat cực kỳ thú vị. Trong khi đó, Writing Tools giúp bạn viết lại email, tóm tắt tin nhắn dài một cách gọn gàng. Dù vẫn còn một vài hạn chế về ngôn ngữ, nhưng đây là một khởi đầu vô cùng ấn tượng.</p>
        `
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
        tags: ['NVIDIA', 'PC', 'GPU'],
        content: `
            <p><strong>Chiếc card đồ họa đầu bảng mới nhất từ NVIDIA chứng tỏ sức mạnh vượt trội, nhưng đi kèm mức giá và mức tiêu thụ điện năng không dành cho số đông.</strong></p>
            <p>Kiến trúc Blackwell cuối cùng cũng đã lộ diện trên thị trường người tiêu dùng với flagship RTX 5090. Với hơn 24,000 nhân CUDA và bộ nhớ GDDR7 thế hệ mới, nó thiết lập một chuẩn mực hoàn toàn mới cho PC Gaming.</p>
            <h2>Chơi game 8K không còn là giấc mơ</h2>
            <p>Trong các bài test thực tế, RTX 5090 dễ dàng càn quét các tựa game AAA hiện nay ở độ phân giải 4K với mức FPS trên 120 (khi bật RT Overdrive). Thậm chí khi đẩy lên 8K kết hợp DLSS 4.0, trải nghiệm vẫn cực kỳ mượt mà.</p>
            <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop" alt="RTX GPU">
            <h3>Tuy nhiên, nó quá to và tốn điện</h3>
            <p>Để nuôi con quái vật này, bạn cần một bộ nguồn ít nhất 1000W và một thùng máy cỡ lớn. Nhiệt lượng tỏa ra cũng là một vấn đề cần cân nhắc nếu bạn không có hệ thống tản nhiệt tốt.</p>
        `
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
        tags: ['VR', 'Meta', 'Gadgets'],
        content: `
            <p><strong>Với mức giá chỉ bằng một phần ba so với Apple Vision Pro, thiết bị mới của Meta đang nỗ lực đưa VR đến với đại chúng.</strong></p>
            <p>Meta Quest 4 vừa được ra mắt với thiết kế công thái học mỏng nhẹ hơn đáng kể so với thế hệ trước. Nó giải quyết được bài toán mỏi cổ khi đeo lâu - điều mà các thế hệ VR trước đây thường mắc phải.</p>
            <h2>Trải nghiệm Mixed Reality được cải thiện</h2>
            <p>Camera passthrough giờ đây có độ phân giải cao hơn và ít bị méo hình, cho phép bạn làm việc với màn hình ảo trong khi vẫn nhìn rõ môi trường xung quanh.</p>
            <blockquote>"Meta đã chứng minh rằng bạn không cần phải bỏ ra $3499 để có một trải nghiệm thực tế hỗn hợp chất lượng."</blockquote>
            <h3>Vấn đề muôn thuở: Hệ sinh thái phần mềm</h3>
            <p>Phần cứng đã tốt hơn, nhưng ứng dụng vẫn là một điểm nghẽn. Trừ lĩnh vực gaming đang phát triển tốt, các ứng dụng làm việc và năng suất vẫn chưa thực sự thuyết phục người dùng rời bỏ màn hình truyền thống.</p>
        `
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
        tags: ['Space', 'Physics', 'JWST'],
        content: `
            <p><strong>Kính viễn vọng không gian James Webb (JWST) vừa gửi về những dữ liệu có thể lật đổ các lý thuyết vật lý hiện đại.</strong></p>
            <p>Vật chất tối luôn là một trong những bí ẩn lớn nhất của vũ trụ học. Dù chiếm phần lớn khối lượng của vũ trụ, chúng ta không thể nhìn thấy chúng. Nhưng quan sát mới đây từ JWST đã ghi nhận được sự phân bố dị thường của các thiên hà sơ khai.</p>
            <h2>Một mô hình vũ trụ mới?</h2>
            <p>Theo tiến sĩ Sarah Jenkins từ NASA, dữ liệu cho thấy các cụm sao hình thành nhanh hơn nhiều so với dự đoán của Mô hình Chuẩn. Điều này ám chỉ rằng vật chất tối có thể không lạnh và thụ động như chúng ta nghĩ.</p>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" alt="Space JWST">
            <h3>Tác động đến vật lý lượng tử</h3>
            <p>Nếu những quan sát này được xác nhận, chúng ta có thể phải viết lại sách giáo khoa vật lý, mở ra những lý thuyết mới kết nối giữa lực hấp dẫn lượng tử và vật lý thiên văn.</p>
        `
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
        tags: ['Laptop', 'Windows', 'ARM'],
        content: `
            <p><strong>Các vi xử lý Snapdragon X Elite đang mang lại thời lượng pin đáng kinh ngạc cho máy tính Windows.</strong></p>
            <p>Đã nhiều năm trôi qua kể từ khi Apple giới thiệu chip M1, thế giới Windows cuối cùng cũng có câu trả lời đích đáng. Qualcomm Snapdragon X Elite kết hợp với lớp giả lập Prism của Windows 11 đang tạo ra một cơn sốt thực sự.</p>
            <h2>Thời lượng pin không đối thủ trong thế giới Windows</h2>
            <p>Các bài test cho thấy những chiếc laptop Copilot+ PC mới có thể trụ được hơn 18 tiếng xem video và hơn 12 tiếng làm việc liên tục - một con số chưa từng có trên máy tính xách tay x86.</p>
            <h3>Hiệu năng giả lập ứng dụng</h3>
            <p>Điều làm người dùng lo lắng nhất là tương thích phần mềm. May mắn thay, Prism hoạt động hiệu quả hơn nhiều so với Rosetta 2 của Apple ở giai đoạn đầu. Hầu hết các ứng dụng x86 đều chạy mượt mà mà không có cảm giác độ trễ.</p>
        `
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
        tags: ['Law', 'Apple', 'Business'],
        content: `
            <p><strong>Tòa án châu Âu yêu cầu Apple mở cửa hoàn toàn cho các kho ứng dụng bên thứ ba.</strong></p>
            <p>Đạo luật Thị trường Kỹ thuật số (DMA) của EU đang tạo ra những áp lực chưa từng có lên hệ sinh thái đóng kín của Apple. Quyết định mới nhất buộc Táo Khuyết phải cho phép các công ty như Epic Games vận hành kho ứng dụng riêng biệt trên iOS.</p>
            <h2>Fortnite chính thức trở lại iPhone (tại châu Âu)</h2>
            <p>Epic Games đã ra mắt Epic Games Store trên iOS dành riêng cho người dùng tại EU, đánh dấu sự trở lại của bom tấn Fortnite sau nhiều năm vắng bóng.</p>
            <blockquote>"Đây là một chiến thắng cho các nhà phát triển và người tiêu dùng trên toàn cầu, không riêng gì châu Âu." - Tim Sweeney, CEO Epic Games.</blockquote>
        `
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
        tags: ['AI', 'Art', 'Copyright'],
        content: `
            <p><strong>Sự bùng nổ của các công cụ như Sora và Midjourney đang dấy lên nhiều lo ngại về bản quyền và tương lai của nghề thiết kế.</strong></p>
            <p>Khi OpenAI giới thiệu Sora, khả năng tạo video từ văn bản chân thực đến đáng sợ đã khiến cả Hollywood phải giật mình. Công nghệ đang phát triển nhanh hơn tốc độ mà luật pháp có thể điều chỉnh.</p>
            <h2>Bản quyền thuộc về ai?</h2>
            <p>Hàng loạt vụ kiện đang diễn ra giữa các nghệ sĩ và các công ty AI về việc sử dụng tác phẩm có bản quyền để huấn luyện mô hình. Câu hỏi về việc tác phẩm tạo ra bởi AI có được bảo hộ bản quyền hay không vẫn chưa có lời giải đáp đồng nhất.</p>
            <img src="https://images.unsplash.com/photo-1678720131679-14475f693df6?q=80&w=800&auto=format&fit=crop" alt="AI Generated Art">
            <h3>Adapt or Die (Thích nghi hoặc bị đào thải)</h3>
            <p>Tuy nhiên, thay vì tẩy chay, nhiều studio thiết kế chuyên nghiệp đã bắt đầu coi AI là một công cụ tăng năng suất, giúp họ phác thảo ý tưởng (storyboard) và tạo moodboard nhanh gấp 10 lần trước đây.</p>
        `
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
        tags: ['Movie', 'Sci-Fi', 'Matrix'],
        content: `
            <p><strong>Phần tiếp theo của loạt phim bom tấn mang đến một góc nhìn hoàn toàn mới về AI, nhưng kịch bản lại gây nhiều tranh cãi.</strong></p>
            <p>The Matrix: Reboot cố gắng khai thác một chủ đề đầy tính triết học: Nếu AI đạt đến mức độ nhận thức hoàn chỉnh, liệu chúng có phát triển các loại cảm xúc như tình yêu hay lòng trắc ẩn?</p>
            <h2>Hình ảnh choáng ngợp, nội dung... buồn ngủ</h2>
            <p>Đạo diễn vẫn làm rất tốt ở mảng hình ảnh. Các pha hành động với hiệu ứng bullet-time được nâng tầm nhờ công nghệ CGI hiện đại. Tuy nhiên, nửa sau bộ phim sa đà vào những cuộc hội thoại triết lý dài dòng, làm gãy nhịp độ căng thẳng vốn có.</p>
            <blockquote>"Họ đã cố biến một phim hành động sci-fi thành một tác phẩm nghệ thuật lãng mạn, và kết quả là một mớ hỗn độn đẹp đẽ."</blockquote>
        `
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
        tags: ['Smart Home', 'Robot', 'Review'],
        content: `
            <p><strong>Sản phẩm mới nhất từ Dreame không chỉ có lực hút khủng mà còn giải quyết được bài toán làm sạch đa tầng trong nhà phố.</strong></p>
            <p>Dreame X50 Ultra vừa ra mắt mang theo một loạt cảm biến LIDAR và camera AI mới nhất. Tính năng đáng chú ý nhất là khả năng tự động nhấc cụm lau lên cực cao khi gặp thảm và cơ chế vươn giẻ lau ra tận các góc tường.</p>
            <h2>Lực hút 12,000 Pa</h2>
            <p>Với lực hút cực mạnh, nó dễ dàng dọn sạch từ bụi mịn đến các mảnh vụn lớn. Trạm sạc đa năng giờ đây được tích hợp hệ thống sấy khô bằng khí nóng và tự động pha nước lau sàn theo tỷ lệ chuẩn.</p>
            <img src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?q=80&w=800&auto=format&fit=crop" alt="Robot vacuum">
            <h3>Xứng đáng với số tiền bỏ ra</h3>
            <p>Dù mức giá khá chát, nhưng với việc tự động hóa 99% quá trình dọn dẹp, đây là một khoản đầu tư xứng đáng cho những gia đình bận rộn.</p>
        `
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
        tags: ['Security', 'Wi-Fi', 'Hack'],
        content: `
            <p><strong>Chuyên gia bảo mật khuyến cáo người dùng nên cập nhật firmware ngay lập tức hoặc thay mới thiết bị nếu đã quá cũ.</strong></p>
            <p>Lỗ hổng mới mang mã định danh CVE-2026-1045 ảnh hưởng trực tiếp đến các giao thức mã hóa WPA2 trên nhiều dòng router sản xuất trước năm 2020. Kẻ tấn công có thể dễ dàng giải mã và đánh cắp dữ liệu truyền tải trong mạng nội bộ.</p>
            <h2>Mối nguy từ thiết bị IoT</h2>
            <p>Sự việc này một lần nữa gióng lên hồi chuông cảnh báo về việc quản lý vòng đời của các thiết bị IoT và thiết bị mạng. Rất nhiều người dùng có thói quen "mua về cắm là xong" mà quên mất việc phải cập nhật phần mềm định kỳ.</p>
            <h3>Lời khuyên từ chuyên gia</h3>
            <p>Hãy truy cập vào trang quản trị của router, kiểm tra phiên bản Firmware mới nhất. Nếu thiết bị của bạn đã bị nhà sản xuất ngừng hỗ trợ (End of Life), đây là lúc nên mua một bộ định tuyến Wi-Fi 6 mới an toàn hơn.</p>
        `
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
        tags: ['Apple', 'iPhone', 'Review', 'Video'],
        content: `
            <p><strong>Video đánh giá chi tiết thiết kế mới, camera và thời lượng pin siêu khủng của chiếc iPhone được mong chờ nhất năm.</strong></p>
            <p>Việc loại bỏ hoàn toàn Dynamic Island để chuyển sang thiết kế camera dưới màn hình (UDC) đã giúp iPhone 17 Pro Max có một màn hình tràn viền hoàn hảo thực sự.</p>
            <h2>Cụm camera được thiết kế lại</h2>
            <p>Cụm camera phía sau đã bớt lồi hơn nhờ công nghệ ống kính siêu mỏng mới (Metalens). Cảm biến chính 48MP giờ đây có khả năng thu sáng tốt hơn 40% trong điều kiện chụp đêm.</p>
            <blockquote>"Nhiều năm qua Apple bị chỉ trích vì sự nhàm chán, nhưng iPhone 17 Pro Max chính là câu trả lời đanh thép nhất."</blockquote>
            <img src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=800&auto=format&fit=crop" alt="iPhone Review">
            <h3>Thời lượng pin vô đối</h3>
            <p>Nhờ chip A19 Pro tiết kiệm điện và viên pin dung lượng lớn hơn, chiếc điện thoại này có thể sống sót qua 2 ngày sử dụng với các tác vụ thông thường. Mời các bạn xem chi tiết trong video review bên trên!</p>
        `
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
