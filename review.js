// =====================
// AutoDz - Review Page
// =====================

// Car data (20 Algerian popular models)
const cars = [
  { name: "Renault Clio 5", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200", rating: 4.6, price: "2,400,000 DZD", engine: "1.3L Turbo", year: 2024, color: "Red" },
  { name: "Peugeot 208", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200", rating: 4.4, price: "2,600,000 DZD", engine: "1.2L PureTech", year: 2023, color: "Blue" },
  { name: "Hyundai i10", img: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200", rating: 4.2, price: "2,100,000 DZD", engine: "1.0L", year: 2022, color: "White" },
  { name: "Seat Ibiza", img: "https://images.unsplash.com/photo-1606663889134-9b5d0b7a45c3?q=80&w=1200", rating: 4.3, price: "2,350,000 DZD", engine: "1.0L TSI", year: 2023, color: "Black" },
  { name: "Dacia Logan", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200", rating: 3.9, price: "1,950,000 DZD", engine: "1.6L", year: 2022, color: "Grey" },
  { name: "Volkswagen Polo", img: "https://images.unsplash.com/photo-1597001667874-d4b07b54b0d1?q=80&w=1200", rating: 4.5, price: "2,700,000 DZD", engine: "1.0L Turbo", year: 2024, color: "White" },
  { name: "Toyota Yaris", img: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200", rating: 4.3, price: "2,800,000 DZD", engine: "1.5L Hybrid", year: 2023, color: "Red" },
  { name: "Ford Fiesta", img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2e2d6?q=80&w=1200", rating: 4.1, price: "2,500,000 DZD", engine: "1.1L EcoBoost", year: 2023, color: "Blue" },
  { name: "Kia Picanto", img: "https://images.unsplash.com/photo-1614145173722-4d99a2a9f2e3?q=80&w=1200", rating: 4.0, price: "2,200,000 DZD", engine: "1.0L", year: 2022, color: "Yellow" },
  { name: "Suzuki Swift", img: "https://images.unsplash.com/photo-1608116029534-33d6c07b65b7?q=80&w=1200", rating: 4.2, price: "2,300,000 DZD", engine: "1.2L Boosterjet", year: 2023, color: "Silver" },
  { name: "Honda Jazz", img: "https://images.unsplash.com/photo-1581291519195-ef11498d1cf9?q=80&w=1200", rating: 4.1, price: "2,600,000 DZD", engine: "1.5L Hybrid", year: 2023, color: "Green" },
  { name: "Citroen C3", img: "https://images.unsplash.com/photo-1563720228734-3c9d09ef3f85?q=80&w=1200", rating: 4.0, price: "2,400,000 DZD", engine: "1.2L PureTech", year: 2022, color: "Red" },
  { name: "Opel Corsa", img: "https://images.unsplash.com/photo-1600185367412-cd77f9c8691b?q=80&w=1200", rating: 4.1, price: "2,350,000 DZD", engine: "1.2L Turbo", year: 2023, color: "White" },
  { name: "Mazda 2", img: "https://images.unsplash.com/photo-1617899381091-23f1d792ff58?q=80&w=1200", rating: 4.0, price: "2,500,000 DZD", engine: "1.5L Skyactiv", year: 2023, color: "Blue" },
  { name: "Nissan Micra", img: "https://images.unsplash.com/photo-1603786417405-6c8c7b4a7d4f?q=80&w=1200", rating: 4.2, price: "2,450,000 DZD", engine: "1.0L IG-T", year: 2023, color: "Orange" },
  { name: "Mini Cooper", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200", rating: 4.5, price: "3,000,000 DZD", engine: "1.5L Turbo", year: 2024, color: "Red" },
  { name: "Fiat 500", img: "https://images.unsplash.com/photo-1523983300006-8b8d03dbb5e5?q=80&w=1200", rating: 4.3, price: "2,700,000 DZD", engine: "1.2L Turbo", year: 2023, color: "White" },
  { name: "Mitsubishi Mirage", img: "https://images.unsplash.com/photo-1597001646811-1f5a5f68dbb1?q=80&w=1200", rating: 4.0, price: "2,150,000 DZD", engine: "1.2L", year: 2022, color: "Blue" },
  { name: "Chevrolet Spark", img: "https://images.unsplash.com/photo-1588477992564-5d04f6e0d091?q=80&w=1200", rating: 3.9, price: "2,100,000 DZD", engine: "1.0L", year: 2022, color: "Silver" },
  { name: "Renault Twingo", img: "https://images.unsplash.com/photo-1589382061293-c1a9f3d5b6d1?q=80&w=1200", rating: 4.1, price: "2,300,000 DZD", engine: "0.9L Turbo", year: 2023, color: "Pink" },
];


// ============= DOM ELEMENTS =============
const carGrid = document.getElementById("carGrid");
const searchInput = document.getElementById("searchInput");
const makeSelect = document.getElementById("makeSelect");
const modelSelect = document.getElementById("modelSelect");
const yearSelect = document.getElementById("yearSelect");
const ratingSelect = document.getElementById("ratingSelect");
const sortSelect = document.getElementById("sortSelect");
const goBtn = document.getElementById("goBtn");
const resetBtn = document.getElementById("resetBtn");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
const tryReset = document.getElementById("tryReset");
const modal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

// Populate filter dropdowns
function populateFilters() {
  const makes = [...new Set(cars.map(c => c.make))];
  makes.forEach(make => {
    const opt = document.createElement("option");
    opt.value = make;
    opt.textContent = make;
    makeSelect.appendChild(opt);
  });

  const years = [...new Set(cars.map(c => c.year))].sort((a, b) => b - a);
  years.forEach(year => {
    const opt = document.createElement("option");
    opt.value = year;
    opt.textContent = year;
    yearSelect.appendChild(opt);
  });
}
populateFilters();

// ============= RENDER FUNCTION =============
function renderCars(list) {
  carGrid.innerHTML = "";
  if (list.length === 0) {
    noResults.hidden = false;
    resultsCount.textContent = "0 results";
    return;
  }
  noResults.hidden = true;
  resultsCount.textContent = `${list.length} result${list.length > 1 ? "s" : ""}`;

  list.forEach(c => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <img src="${c.img}" alt="${c.make} ${c.model}">
      <div class="car-info">
        <h3>${c.make} ${c.model}</h3>
        <p><strong>Year:</strong> ${c.year}</p>
        <p><strong>Price:</strong> ${c.price.toLocaleString()} DZD</p>
        <p class="rating">⭐ ${c.rating}</p>
      </div>
    `;
    card.addEventListener("click", () => showDetails(c));
    carGrid.appendChild(card);
  });
}

// ============= FILTER / SORT LOGIC =============
function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const make = makeSelect.value;
  const model = modelSelect.value;
  const year = yearSelect.value;
  const minRating = parseFloat(ratingSelect.value);
  const sortType = sortSelect.value;

  let filtered = cars.filter(c => {
    return (
      (!make || c.make === make) &&
      (!model || c.model === model) &&
      (!year || c.year == year) &&
      (!minRating || c.rating >= minRating) &&
      (c.make.toLowerCase().includes(searchTerm) ||
        c.model.toLowerCase().includes(searchTerm))
    );
  });

  // Sorting
  switch (sortType) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "year-desc":
      filtered.sort((a, b) => b.year - a.year);
      break;
  }

  renderCars(filtered);
}
function viewDetails(index) {
  const car = cars[index];
  window.location.href = `details.html?name=${encodeURIComponent(car.name)}&price=${encodeURIComponent(car.price)}&rating=${car.rating}&img=${encodeURIComponent(car.img)}&engine=${encodeURIComponent(car.engine)}&year=${car.year}&color=${encodeURIComponent(car.color)}`;
}



makeSelect.addEventListener("change", () => {
  modelSelect.innerHTML = "<option value=''>All models</option>";
  if (!makeSelect.value) {
    modelSelect.disabled = true;
    return;
  }
  modelSelect.disabled = false;
  const models = cars.filter(c => c.make === makeSelect.value).map(c => c.model);
  models.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    modelSelect.appendChild(opt);
  });
});


goBtn.addEventListener("click", applyFilters);
resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  makeSelect.value = "";
  modelSelect.value = "";
  modelSelect.disabled = true;
  yearSelect.value = "";
  ratingSelect.value = "";
  sortSelect.value = "featured";
  renderCars(cars);
});
tryReset.addEventListener("click", () => resetBtn.click());


function showDetails(car) {
  modalBody.innerHTML = `
    <h2 id="modalTitle">${car.make} ${car.model}</h2>
    <img src="${car.img}" alt="${car.make} ${car.model}" style="width:100%;border-radius:10px;margin-top:10px;">
    <p><strong>Year:</strong> ${car.year}</p>
    <p><strong>Price:</strong> ${car.price.toLocaleString()} DZD</p>
    <p><strong>Rating:</strong> ⭐ ${car.rating}</p>
    <p>This ${car.make} ${car.model} is one of the most popular cars on Algerian roads, combining efficiency and comfort.</p>
  `;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});


renderCars(cars);
