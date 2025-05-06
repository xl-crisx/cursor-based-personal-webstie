// 背景动画
const circles = document.querySelectorAll('.circle');

circles.forEach((circle, index) => {
    gsap.to(circle, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
    });

    gsap.to(circle, {
        scale: gsap.utils.random(0.8, 1.2),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
    });
});

// 页面加载完成后的动画控制
document.addEventListener('DOMContentLoaded', function() {
    // 重置导航栏内容动画
    const navContent = document.querySelector('.nav-content');
    navContent.style.animation = 'none';
    navContent.offsetHeight; // 触发重排
    navContent.style.animation = 'navContentFadeIn 1s ease forwards';

    // 重置首页内容动画
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'none';
    heroContent.offsetHeight; // 触发重排
    heroContent.style.animation = 'heroContentFadeIn 1s ease forwards';

    // 添加滚动监听
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 为标题添加动画
                const heading = entry.target.querySelector('h2');
                if (heading) {
                    heading.style.opacity = '1';
                    heading.style.transform = 'translateY(0)';
                }

                // 为内容添加动画
                const content = entry.target.querySelector('.about-content, .project-grid, .contact-content');
                if (content) {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    // 观察所有section
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 项目卡片动画
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// 技能标签动画
const skillTags = document.querySelectorAll('.skill-tags span');
skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    tag.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
    }, index * 100);
}); 