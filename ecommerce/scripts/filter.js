// DOM elements
const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOptions = document.getElementById("sortOptions");

// Function to filter products
function filterProducts() {
    let filteredProducts = products;
  
    // Filter by category
    const category = categoryFilter.value;
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
  
    // Filter by price
    const price = priceFilter.value;
    if (price === "low") {
      filteredProducts = filteredProducts.filter((product) => product.price < 50);
    } else if (price === "medium") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 50 && product.price <= 100
      );
    } else if (price === "high") {
      filteredProducts = filteredProducts.filter((product) => product.price > 100);
    }
  
    // Sort products
    const sort = sortOptions.value;
    if (sort === "priceLow") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "ratingHigh") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }
  
    displayProducts(filteredProducts);
  }
  
  // Event listeners for filters and sorting
  categoryFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
  sortOptions.addEventListener("change", filterProducts);
  
  // Initial display
  displayProducts(products);