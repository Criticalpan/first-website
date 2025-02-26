$(document).ready(function() {
    $('.hero-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      animateOut: 'fadeOut',
    });
  
    $('.testimonial-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      nav: false,
      dots: true,
    });
  });
  
  document.querySelectorAll('#add-to-cart-form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const product = this.closest('.product-info').querySelector('h1').textContent;
      const size = this.querySelector('#size').value;
      const price = parseFloat(this.closest('.product-info').querySelector('.price').textContent.replace('Price: $', ''));
      addToCart(product, size, price);
    });
  });
  
  function addToCart(product, size, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, size, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} (Size: ${size}) added to cart!`);
  }
  
  if (window.location.pathname.endsWith('cart.html')) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    let total = 0;
  
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `<p>${item.product} - Size: ${item.size} - $${item.price.toFixed(2)}</p>`;
      cartItemsDiv.appendChild(itemDiv);
      total += item.price;
    });
  
    document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
  }
  
  document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
      alert('Logged in successfully!');
      window.location.href = 'index.html';
    } else {
      alert('Please enter valid credentials.');
    }
  });