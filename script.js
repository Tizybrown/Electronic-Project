// Make the header sticky on scroll
const header = document.querySelector("nav");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Get cart element
const cart = document.getElementById('cart');

// Get cart count element
const cartCount = document.getElementById('cart-count');

// Initialize cart items array
let cartItems = [];

// Add click event listener to cart
cart.addEventListener('click', () => {
  cart.classList.toggle('stop-bounce'); // Toggle the class to stop/resume the bounce animation
});

// Add hover event listener to cart
cart.addEventListener('mouseover', () => {
  cart.classList.remove('stop-bounce'); // Remove stop-bounce class on hover
});

// Add mouseout event listener to cart
cart.addEventListener('mouseout', () => {
  if (!cart.classList.contains('stop-bounce')) {
    cart.classList.add('stop-bounce'); // Add stop-bounce class if it's not already present
  }
});



// Function to update cart count
function updateCartCount(count) {
  cartCount.textContent = count; // Update the cart count text
}

// Function to add item to cart
function addItemToCart(id, name, price) {
  const item = { id, name, price }; // Create item object
  cartItems.push(item); // Add item to cart
  updateCartCount(cartItems.length); // Update cart count
}

// Add click event listeners to view buttons
document.querySelectorAll('.view-button').forEach(button => {
  button.addEventListener('click', (event) => {
    const box = event.target.closest('.box, .ibox-item');
    const id = box.getAttribute('data-id');
    const name = box.getAttribute('data-name');
    const price = box.getAttribute('data-price');
    addItemToCart(id, name, price); // Add item to cart
  });
});

// Example usage:
addItemToCart(1, 'Product 1', 2000); // Example: Add item with id 1, name 'Product 1', and price 2000 to cart
