export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }];
}
console.log(cart);

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, addQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += addQuantity;
  } else {
    cart.push({
      productId: productId,
      quantity: addQuantity,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;

  for (let i = 0; i < cart.length; i++) {
    cartQuantity += cart[i].quantity;
  }

  document.querySelector('.js-cart-quantity')
    .innerHTML = String(cartQuantity);
}

export function updateCartQuantityCheckout() {
  let cartQuantity = 0;

  for (let i = 0; i < cart.length; i++) {
    cartQuantity += cart[i].quantity;
  }

  document.querySelector('.js-cart-quantity-header')
    .innerHTML = ("Checkout (" + String(cartQuantity) + " items)");
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}