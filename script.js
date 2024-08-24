







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





function orderOnWhatsApp(productName) {
        var phoneNumber = "+234XXXXXXXXXX"; // Replace with your WhatsApp phone number
        var message = "Hello, I would like to order the following product: " + productName;
        var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(whatsappLink, '_blank');
    }















document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartCount = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Toggle cart modal
    cartBtn.addEventListener('click', function () {
        cartModal.style.display = 'block';
    });

    closeCartBtn.addEventListener('click', function () {
        cartModal.style.display = 'none';
    });

    // Function to add item to cart
    function addToCart(product) {
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }

    // Update cart display
    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `
                ${item.name} - ${item.price} x ${item.quantity}
                <button class="remove-item" data-name="${item.name}">Remove</button>
            `;
            cartItemsList.appendChild(li);

            total += parseFloat(item.price.replace('N', '')) * item.quantity;
        });

        cartTotal.textContent = `N${total.toFixed(2)}`;
        cartCount.textContent = cart.length;
    }

    // Add items to cart from product cards
    document.querySelectorAll('.product-card .btn-primary').forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('p').textContent;
            addToCart({ name: productName, price: productPrice });
        });
    });

    // Remove item from cart
    cartItemsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-item')) {
            const itemName = event.target.getAttribute('data-name');
            const itemIndex = cart.findIndex(item => item.name === itemName);
            if (itemIndex > -1) {
                cart.splice(itemIndex, 1);
                updateCart();
            }
        }
    });

    // Add 'Buy Now' functionality to featured products
    document.querySelectorAll('.product-card .btn-primary').forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('p').textContent;
            addToCart({ name: productName, price: productPrice });
            alert('Product added to cart!');
        });
    });
});
