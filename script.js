// Carousel Functionality
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter = 0;
const size = carouselImages[0].clientWidth;

function updateCarousel() {
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= carouselImages.length) {
        counter = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = carouselImages.length - 1;
    }
    updateCarousel();
});

// Gallery Filtering Functionality
const filterButtons = document.querySelectorAll('#gallery .category-filters button');
const galleryItems = document.querySelectorAll('#gallery .gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        galleryItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Initialize gallery with all items visible
document.querySelector('#gallery .category-filters button[data-category="all"]').click();

document.addEventListener('DOMContentLoaded', function() {
    // Carousel Functionality
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = carouselSlides[0].clientWidth;
        carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % carouselSlides.length;
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
        updateCarousel();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Auto-slide every 5 seconds
    setInterval(showNextSlide, 5000);

    // Gallery Filtering
    const filterButtons = document.querySelectorAll('.category-filters button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
