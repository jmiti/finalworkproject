// Initialize cart and total variables
let cart = [];
let total = 0;

// Add product to cart
function addToCart(product, price) {
  cart.push({product, price});
  total += price;
  displayCart();
}

// Display items in cart and update total
function displayCart() {
  let cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let item = document.createElement("li");
    item.innerText = cart[i].product + " - $" + cart[i].price;
    cartList.appendChild(item);
  }
  document.getElementById("total").innerText = total;
}

// Clear cart
function clearCart() {
  cart = [];
  total = 0;
  displayCart();
}
