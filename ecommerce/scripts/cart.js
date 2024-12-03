// Render Cart Items on the Cart Page
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout");
    if (!cartItems || !checkoutButton) return;
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.innerHTML = "";
    let total = 0;
  
    // Dynamically populate cart items
    cart.forEach((item, index) => {
      total += item.price;
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
  
    // Update total price
    totalPriceElement.textContent = total;
  
    // Handle checkout
    checkoutButton.onclick = () => {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      alert(`Your total payment is $${total}. Thank you for shopping!`);
      localStorage.clear();
      location.reload();
    };
  }
  
  // Remove Item from Cart
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove the item at the given index
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // Re-render the cart
  }
  
  // Initialize cart rendering
  document.addEventListener("DOMContentLoaded", renderCart);
  