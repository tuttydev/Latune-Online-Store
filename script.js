

    // Auto-slide every 5 seconds
    setInterval(showNextSlide, 5000);

    // Gallery Filtering Functionality
    const filterButtons = document.querySelectorAll('.category-filters button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            galleryItems.forEach(item => {
                item.style.display = (category === 'all' || item.getAttribute('data-category') === category) ? 'block' : 'none';
            });
        });
    });

    // Initialize gallery with all items visible
    document.querySelector('.category-filters button[data-category="all"]').click();
});
