document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('main-image');
  const colorButtons = document.querySelectorAll('[data-image]');
  const sizeButtons = document.querySelectorAll('.size-btn');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');
  const quantityEl = document.getElementById('quantity');
  const addToCartBtn = document.getElementById('add-to-cart');
  const checkoutBtn = document.getElementById('checkout');
  const cartPopup = document.getElementById('cart-popup');
  const cartItems = document.getElementById('cart-items');
  const totalQuantityEl = document.getElementById('total-quantity');
  const totalPriceEl = document.getElementById('total-price');
  const cartQuantityEl = document.getElementById('cart-quantity');
  const continueShoppingBtn = document.getElementById('continue-shopping');

  let quantity = 1;
  let cart = [];
  let selectedSizePrice = 99; // Default size price

  // Color selection
  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      mainImage.src = button.getAttribute('data-image');
      colorButtons.forEach(btn => btn.classList.remove('color-active'));
      button.classList.add('color-active');
    });
  });

  // Size selection
  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      sizeButtons.forEach(btn => btn.classList.remove('size-active'));
      button.classList.add('size-active');
      selectedSizePrice = parseInt(button.getAttribute('data-price'));
    });
  });

  // Increment quantity
  incrementBtn.addEventListener('click', () => {
    quantity++;
    quantityEl.textContent = quantity;
  });

  // Decrement quantity
  decrementBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityEl.textContent = quantity;
    }
  });

  // Add to Cart
  addToCartBtn.addEventListener('click', () => {
    const selectedColor = document.querySelector('.color-active')?.getAttribute('data-color') || 'Default';
    const selectedSize = document.querySelector('.size-active .size')?.textContent || 'Default';
    const productImage = mainImage.src; // Get the current main image source

    const newItem = {
      title: 'Classy Modern Smart Watch', // Change this to dynamically fetch product title if needed
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: selectedSizePrice * quantity,
      image: productImage, // Include the product image
    };

    cart.push(newItem);
    updateCart();
  });

  // Checkout Button Click
  checkoutBtn.addEventListener('click', () => {
    cartPopup.classList.remove('hidden');
  });

  // Continue Shopping
  continueShoppingBtn.addEventListener('click', () => {
    cartPopup.classList.add('hidden');
  });

  // Update Cart Popup
  function updateCart() {
    cartItems.innerHTML = ''; // Clear current items
    let totalQuantity = 0;
    let totalPrice = 0;

    // Generate table rows for cart items
    cart.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.price;

      const cartRow = `
      <tr>
        <td class="border-b py-[16px] pr-[40px] lg:pr-[0] flex gap-[8px] items-center text-dark_blue text-s14 font-normal capitalize text-nowrap">
          <img src="${item.image}" alt="${item.title}" class="w-10 h-10 rounded">
          ${item.title}
        </td>
        <td class="border-b py-[16px] pr-[40px] lg:pr-[0] text-dark_blue text-s14 font-normal capitalize text-nowrap">${item.color}</td>
        <td class="border-b py-[16px] pr-[40px] lg:pr-[0] text-dark_blue text-s14 font-bold capitalize text-nowrap">${item.size}</td>
        <td class="border-b py-[16px] pr-[40px] lg:pr-[0] text-dark_blue text-s14 font-bold capitalize text-nowrap">${item.quantity}</td>
        <td class="border-b py-[16px] pr-[40px] lg:pr-[0] text-dark_blue text-s14 font-bold capitalize text-nowrap text-right">$${item.price.toFixed(2)}</td>
      </tr>
    `;
      cartItems.insertAdjacentHTML('beforeend', cartRow);
    });

    // Add total row with three columns
    const totalRow = `
    <tr class="font-bold">
      <td colspan="3" class="text-dark_blue font-bold text-s16 py-[16px]">Total</td>
      <td class="text-dark_blue font-bold text-[14px] py-[16px]">${totalQuantity}</td>
      <td class="text-dark_blue font-bold text-s16 lg:text-[18px] py-[16px] lg:text-right">$${totalPrice.toFixed(2)}</td>
    </tr>
  `;
    cartItems.insertAdjacentHTML('beforeend', totalRow);

    // Update total quantity and price in other parts of the UI
    cartQuantityEl.textContent = totalQuantity;
    totalQuantityEl.textContent = totalQuantity;
    totalPriceEl.textContent = totalPrice.toFixed(2);
  }

});