// INICIO HEADER
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "src/imgs/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "src/imgs/sair.png";
    }
}
// FIM DO HEADER


// INICIO CARROSEL
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.right');
    const prevButton = document.querySelector('.carousel-button.left');
    const nav = document.querySelector('.carousel-nav');
    const dots = Array.from(nav.children);

    let currentIndex = 0;

    function updateSlide(position) {
    track.style.transform = 'translateX(-' + (100 * position) + '%)';
    slides.forEach((slide, index) =>
        slide.classList.toggle('current-slide', index === position)
    );
    dots.forEach((dot, index) =>
        dot.classList.toggle('current-slide', index === position)
    );
    }

    nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(index);
    });
    });
// FIM CARROSEL

// ANIMAÇÃO DOS TEXTOS
    document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Anima apenas uma vez
        }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        observer.observe(el);
    });
    });
// FIM DA ANIMAÇÃO

    function mudarCor(cor) {
        document.body.style.backgroundColor = cor;
    }