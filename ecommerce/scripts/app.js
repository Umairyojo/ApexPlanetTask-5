// Product Data
const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 200, rating: 4.5, image: "./img/smartphone.jpg" },
    { id: 2, name: "Jeans", category: "fashion", price: 40, rating: 4.0, image: "./img/jeans.jpg" },
    { id: 3, name: "Laptop", category: "electronics", price: 800, rating: 4.8, image: "./img/laptop.jpg" },
    { id: 4, name: "Book: JavaScript", category: "books", price: 30, rating: 4.7, image: "./img/book.jpg" },
    { id: 5, name: "Headphones", category: "electronics", price: 50, rating: 4.2, image: "./img/head.jpg" },
    { id: 6, name: "T-Shirt", category: "fashion", price: 20, rating: 4.1, image: "./img/t-shirt.jpg" },
    { id: 3, name: "guitar", category: "electronics", price: 450, rating: 4.9, image: "./img/guiatr.jpg" },
    { id: 4, name: "Book: python", category: "books", price: 50, rating: 4.8, image: "./img/python.jpg" },
    { id: 5, name: "airpods", category: "electronics", price: 80, rating: 4.5, image: "./img/airpods.jpg" },
    { id: 6, name: "Suits", category: "fashion", price: 100, rating: 4.1, image: "./img/suits.jpg" },
  ];
  
  // Cart Array
  let cart = [];
  
  // Render Products
  function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p class="price">$${product.price}</p>
        <p>Rating: ${product.rating} ⭐</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Add to Cart
  function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  }
  
  // Initialize
  renderProducts();
  