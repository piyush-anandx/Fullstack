const container = document.getElementById("product-grid");
const nav = document.getElementById("nav");
const searchInput = document.getElementById("search-input");

const products = [
  { id: 1, name: "Laptop", price: 50000, category: "tech" },
  { id: 2, name: "Coat", price: 3000, category: "fashion" },
  { id: 3, name: "iphone", price: 50000, category: "tech" },
  { id: 4, name: "ipad", price: 70000, category: "tech" },
  { id: 5, name: "jeans", price: 3000, category: "fashion" },
  { id: 6, name: "ipod", price: 5000, category: "tech" },
];

function displayProducts(items) {
  container.innerHTML = "";
  items.forEach((item) => {
    container.innerHTML += `
          <div class="product-card">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <p>Category: ${item.category}</p>
        </div>`;
  });
}
displayProducts(products);

nav.addEventListener("click", (e) => {
  e.preventDefault();
  const category = e.target.dataset.category;
  if (!category) return;
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter((item) => {
      return item.category === category;
    });
    displayProducts(filtered);
  }
});

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filter = products.filter((item) => {
    return item.name.toLocaleLowerCase().includes(value);
  });
  displayProducts(filter);
});
