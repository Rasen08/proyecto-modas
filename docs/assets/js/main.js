// main.js

// PARALLAX
function initParallax() {
    const images = document.getElementsByClassName('parallax-image');
    if (images.length > 0 && typeof simpleParallax !== 'undefined') {
        new simpleParallax(images, {
            scale: 1.8,
            orientation: 'up',
            overflow: false,
            delay: 0.4,
            transition: 'cubic-bezier(0,0,0,1)',
        });
    }
}

// COUNTDOWN
function initCountdown() {
    const targetDate = new Date("Dec 5, 2025 19:00:00").getTime();
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    const updateCounter = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownEl.textContent = "¡Llegó el día!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCounter();
    setInterval(updateCounter, 1000);
}

// CAROUSEL AUTOMÁTICO
function initCarousel() {
    let currentSlide = 0;
    const carousel = document.getElementById('carousel');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = 3;
    
    if (!carousel) return;
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('bg-white', index === currentSlide);
            dot.classList.toggle('w-8', index === currentSlide);
            dot.classList.toggle('bg-gray-400', index !== currentSlide);
        });
    }
    
    // Dots clickeables
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentSlide = parseInt(e.target.dataset.index);
            updateCarousel();
        });
    });
    
    // Auto-play cada 4 segundos
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 4000);
    
    updateCarousel();
}

// MENÚ MÓVIL
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        if (mobileMenu.style.maxHeight === '0px' || mobileMenu.style.maxHeight === '') {
            mobileMenu.style.maxHeight = '300px';
        } else {
            mobileMenu.style.maxHeight = '0px';
        }
    });
    
    // Cerrar al hacer clic en un enlace
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.maxHeight = '0px';
        });
    });
}

// LIGHTBOX
function initLightbox() {
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
        });
    }
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initCountdown();
    initCarousel();
    initMobileMenu();
    initLightbox();
});