// 导航栏点击高亮
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // 移除所有高亮
        navLinks.forEach(item => item.classList.remove('active'));
        // 给当前点击的添加高亮
        this.classList.add('active');
    });
});

// 侧边栏点击效果
const asideLinks = document.querySelectorAll('.aside-menu li a');
asideLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#d32f2f';
        this.style.fontWeight = 'bold';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '#333';
        this.style.fontWeight = 'normal';
    });
});

// 给CSS补充.active样式（也可以写在CSS里）
const style = document.createElement('style');
style.textContent = `
    nav ul li a.active {
        background-color: #b71c1c;
        font-weight: bold;
    }
`;
document.head.appendChild(style);