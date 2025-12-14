// scripts.js - interações simples: menu scroll suavizado e sticky button mobile
document.addEventListener('DOMContentLoaded', function() {
    // smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // optional: floating whatsapp on small screens
    const waTop = document.getElementById('whatsapp-top');

    function checkWidth() {
        if (window.innerWidth <= 720) {
            waTop.style.position = 'fixed';
            waTop.style.right = '16px';
            waTop.style.bottom = '16px';
            waTop.style.zIndex = 60;
            waTop.style.borderRadius = '50px';
            waTop.textContent = '💬';
            waTop.style.padding = '14px';
            waTop.style.boxShadow = '0 8px 30px rgba(2,6,23,0.15)';
        } else {
            waTop.style.position = '';
            waTop.style.right = '';
            waTop.style.bottom = '';
            waTop.style.borderRadius = '';
            waTop.innerHTML = '☎ Chamar Guincho Agora';
            waTop.style.padding = '';
            waTop.style.boxShadow = '';
        }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
});