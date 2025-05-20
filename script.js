// 우클릭 및 드래그 방지
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('이미지 저장이 금지되어 있습니다.');
    return false;
});

// 드래그 방지
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// 선택 방지
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// 키보드 단축키 방지
document.addEventListener('keydown', function(e) {
    if (
        (e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'p')) || // Ctrl+S, Ctrl+U, Ctrl+P
        (e.key === 'F12') || // 개발자 도구
        (e.altKey && e.key === 'F4') // Alt+F4
    ) {
        e.preventDefault();
        return false;
    }
});

// 작품 데이터
const portfolioWorks = [
    {
        id: 1,
        title: '작품 제목 1',
        artist: '홍길동',
        image: './up_images/portfolio/brownboy.png',
        description: '이 작품은...'
    },
    {
        id: 2,
        title: '작품 제목 2',
        artist: '김철수',
        image: './up_images/portfolio/blondgirl.png',
        description: '이 작품은...'
    },
    {
        id: 3,
        title: '작품 제목 3',
        artist: '이영희',
        image: './up_images/portfolio/1.png',
        description: '이 작품은...'
    },
    {
        id: 4,
        title: '작품 제목 4',
        artist: '박민수',
        image: './up_images/portfolio/2.png',
        description: '이 작품은...'
    },
    {
        id: 5,
        title: '작품 제목 5',
        artist: '최지원',
        image: './up_images/portfolio/3.png',
        description: '이 작품은...'
    },
    {
        id: 6,
        title: '작품 제목 6',
        artist: '정서연',
        image: './up_images/portfolio/4.png',
        description: '이 작품은...'
    },
    {
        id: 7,
        title: '작품 제목 7',
        artist: '김도현',
        image: './up_images/portfolio/5.png',
        description: '이 작품은...'
    },
    {
        id: 8,
        title: '작품 제목 8',
        artist: '이수진',
        image: './up_images/portfolio/6.png',
        description: '이 작품은...'
    }
];

const freeWorks = [
    {
        id: 1,
        title: '자유로운 표현 1',
        artist: '박지민',
        image: './up_images/freework/1.png',
        description: '이 작품은...'
    },
    {
        id: 2,
        title: '자유로운 표현 2',
        artist: '최수진',
        image: './up_images/freework/2.png',
        description: '이 작품은...'
    },
    {
        id: 3,
        title: '자유로운 표현 3',
        artist: '정다은',
        image: './up_images/freework/3.png',
        description: '이 작품은...'
    },
    {
        id: 4,
        title: '자유로운 표현 4',
        artist: '김민지',
        image: './up_images/freework/4.png',
        description: '이 작품은...'
    },
    {
        id: 5,
        title: '자유로운 표현 5',
        artist: '이준호',
        image: './up_images/freework/5.png',
        description: '이 작품은...'
    },
    {
        id: 6,
        title: '자유로운 표현 6',
        artist: '박서연',
        image: './up_images/freework/6.png',
        description: '이 작품은...'
    },
    {
        id: 7,
        title: '자유로운 표현 7',
        artist: '최민준',
        image: './up_images/freework/7.png',
        description: '이 작품은...'
    },
    {
        id: 8,
        title: '자유로운 표현 8',
        artist: '정지원',
        image: './up_images/freework/8.png',
        description: '이 작품은...'
    },
    {
        id: 9,
        title: '자유로운 표현 9',
        artist: '김서연',
        image: './up_images/freework/9.png',
        description: '이 작품은...'
    },
    {
        id: 10,
        title: '자유로운 표현 10',
        artist: '이민준',
        image: './up_images/freework/10.png',
        description: '이 작품은...'
    },
    {
        id: 11,
        title: '자유로운 표현 11',
        artist: '박준영',
        image: './up_images/freework/11.png',
        description: '이 작품은...'
    },
    {
        id: 12,
        title: '자유로운 표현 12',
        artist: '최서연',
        image: './up_images/freework/12.png',
        description: '이 작품은...'
    },
    {
        id: 13,
        title: '자유로운 표현 13',
        artist: '정민준',
        image: './up_images/freework/13.png',
        description: '이 작품은...'
    },
    {
        id: 14,
        title: '자유로운 표현 14',
        artist: '김지원',
        image: './up_images/freework/14.png',
        description: '이 작품은...'
    },
    {
        id: 15,
        title: '자유로운 표현 15',
        artist: '이서연',
        image: './up_images/freework/15.png',
        description: '이 작품은...'
    },
    {
        id: 16,
        title: '자유로운 표현 16',
        artist: '박민준',
        image: './up_images/freework/16.png',
        description: '이 작품은...'
    },
    {
        id: 17,
        title: '자유로운 표현 17',
        artist: '최지원',
        image: './up_images/freework/17.png',
        description: '이 작품은...'
    },
    {
        id: 18,
        title: '자유로운 표현 18',
        artist: '정서연',
        image: './up_images/freework/18.png',
        description: '이 작품은...'
    },
    {
        id: 19,
        title: '자유로운 표현 19',
        artist: '김민준',
        image: './up_images/freework/19.png',
        description: '이 작품은...'
    },
    {
        id: 20,
        title: '자유로운 표현 20',
        artist: '이지원',
        image: './up_images/freework/20.png',
        description: '이 작품은...'
    },
    {
        id: 21,
        title: '자유로운 표현 21',
        artist: '박서연',
        image: './up_images/freework/21.png',
        description: '이 작품은...'
    },
    {
        id: 22,
        title: '자유로운 표현 22',
        artist: '최민준',
        image: './up_images/freework/22.png',
        description: '이 작품은...'
    },
    {
        id: 23,
        title: '자유로운 표현 23',
        artist: '정지원',
        image: './up_images/freework/23.png',
        description: '이 작품은...'
    },
    {
        id: 24,
        title: '자유로운 표현 24',
        artist: '김서연',
        image: './up_images/freework/24.png',
        description: '이 작품은...'
    },
    {
        id: 25,
        title: '자유로운 표현 25',
        artist: '이민준',
        image: './up_images/freework/25.png',
        description: '이 작품은...'
    },
    {
        id: 26,
        title: '자유로운 표현 26',
        artist: '박지원',
        image: './up_images/freework/26.png',
        description: '이 작품은...'
    },
    {
        id: 27,
        title: '자유로운 표현 27',
        artist: '최서연',
        image: './up_images/freework/27.png',
        description: '이 작품은...'
    },
    {
        id: 28,
        title: '자유로운 표현 28',
        artist: '정민준',
        image: './up_images/freework/28.png',
        description: '이 작품은...'
    }
];

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    // 메인 페이지 Swiper 초기화
    const mainSwiper = document.querySelector('.mySwiper');
    if (mainSwiper) {
        new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
            },
            mousewheel: {
                enabled: true,
            },
        });
    }

    // 갤러리 탭 전환 기능
    const tabButtons = document.querySelectorAll('.tab-button');
    const gallerySections = document.querySelectorAll('.gallery-section');

    if (tabButtons.length && gallerySections.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 모든 탭 버튼에서 active 클래스 제거
                tabButtons.forEach(btn => btn.classList.remove('active'));
                // 클릭된 버튼에 active 클래스 추가
                button.classList.add('active');

                // 모든 갤러리 섹션 숨기기
                gallerySections.forEach(section => section.classList.remove('active'));
                // 선택된 탭에 해당하는 섹션 표시
                const selectedTab = button.getAttribute('data-tab');
                const targetSection = document.getElementById(`${selectedTab}-section`);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }

    // 갤러리 섹션에 이벤트 위임 방식으로 클릭 이벤트 추가
    function setupGalleryEvents() {
        const gallerySections = document.querySelectorAll('.gallery-section');
        gallerySections.forEach(section => {
            section.addEventListener('click', function(e) {
                // 클릭된 요소가 갤러리 아이템인지 확인
                const galleryItem = e.target.closest('.gallery-item');
                if (!galleryItem) return;

                const img = galleryItem.querySelector('img');
                if (!img) return;
                
                // 현재 섹션의 모든 이미지 아이템 가져오기
                const allItems = Array.from(section.querySelectorAll('.gallery-item'));
                let currentIndex = allItems.indexOf(galleryItem);
                
                const modal = document.createElement('div');
                modal.className = 'modal';
                
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <button class="modal-nav prev">&lt;</button>
                        <button class="modal-nav next">&gt;</button>
                        <div class="modal-image-container">
                            <img src="${img.src}" alt="${img.alt || ''}" loading="eager">
                        </div>
                    </div>
                `;
                
                document.body.appendChild(modal);
                
                const modalImg = modal.querySelector('img');
                const prevBtn = modal.querySelector('.modal-nav.prev');
                const nextBtn = modal.querySelector('.modal-nav.next');
                
                // 이미지 로드 및 크기 조정
                function adjustImageSize(img) {
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    const imgWidth = img.naturalWidth;
                    const imgHeight = img.naturalHeight;
                    
                    const ratio = imgWidth / imgHeight;
                    const maxWidth = windowWidth * 0.9;
                    const maxHeight = windowHeight * 0.9;
                    
                    if (imgWidth > maxWidth || imgHeight > maxHeight) {
                        if (ratio > 1) {
                            img.style.width = `${maxWidth}px`;
                            img.style.height = 'auto';
                        } else {
                            img.style.height = `${maxHeight}px`;
                            img.style.width = 'auto';
                        }
                    } else {
                        img.style.width = `${imgWidth}px`;
                        img.style.height = `${imgHeight}px`;
                    }
                }

                modalImg.onload = () => adjustImageSize(modalImg);

                // 다음/이전 이미지로 이동하는 함수
                function showImage(index) {
                    const newItem = allItems[index];
                    const newImg = newItem.querySelector('img');
                    modalImg.src = newImg.src;
                    modalImg.alt = newImg.alt || '';
                    currentIndex = index;
                }

                // 이전 이미지 버튼 클릭
                prevBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const newIndex = (currentIndex - 1 + allItems.length) % allItems.length;
                    showImage(newIndex);
                });

                // 다음 이미지 버튼 클릭
                nextBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const newIndex = (currentIndex + 1) % allItems.length;
                    showImage(newIndex);
                });

                // 키보드 네비게이션
                function handleKeyNav(e) {
                    if (e.key === 'ArrowLeft') {
                        const newIndex = (currentIndex - 1 + allItems.length) % allItems.length;
                        showImage(newIndex);
                    } else if (e.key === 'ArrowRight') {
                        const newIndex = (currentIndex + 1) % allItems.length;
                        showImage(newIndex);
                    } else if (e.key === 'Escape') {
                        closeModal();
                    }
                }

                document.addEventListener('keydown', handleKeyNav);
                
                // 모달 닫기 함수
                function closeModal() {
                    modal.remove();
                    document.removeEventListener('keydown', handleKeyNav);
                }
                
                // 모달 닫기
                const closeBtn = modal.querySelector('.close');
                closeBtn.onclick = closeModal;
                
                // 모달 외부 클릭 시 닫기
                modal.onclick = (e) => {
                    if (e.target === modal) {
                        closeModal();
                    }
                };
            });
        });
    }

    // 초기 이벤트 설정
    setupGalleryEvents();

    // 햄버거 메뉴 토글 기능
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 화면 크기가 768px보다 커지면 메뉴 초기화
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            if (menuToggle) menuToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        }
    });

    // 설명 펼치기 기능
    const expandButtons = document.querySelectorAll('.expand-button');
    if (expandButtons.length) {
        expandButtons.forEach(button => {
            button.addEventListener('click', () => {
                const descriptionFull = button.nextElementSibling;
                if (!descriptionFull) return;

                const isExpanded = descriptionFull.classList.contains('active');
                
                if (isExpanded) {
                    descriptionFull.classList.remove('active');
                    button.classList.remove('active');
                    button.textContent = '▼';
                } else {
                    descriptionFull.classList.add('active');
                    button.classList.add('active');
                    button.textContent = '▲';
                }
            });
        });
    }

    // 카드 스택 기능
    const cards = document.querySelectorAll('.exhibition-card');
    const prevButton = document.querySelector('.card-stack-controls .prev-button');
    const nextButton = document.querySelector('.card-stack-controls .next-button');
    
    if (cards.length && prevButton && nextButton) {
        let currentIndex = 0;

        function updateCards() {
            cards.forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next');
                if (index === currentIndex) {
                    card.classList.add('active');
                } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                    card.classList.add('prev');
                } else if (index === (currentIndex + 1) % cards.length) {
                    card.classList.add('next');
                }
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateCards();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCards();
        });

        // 초기 카드 상태 설정
        updateCards();
    }
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.backgroundColor = '#fff';
        }
    }
}); 