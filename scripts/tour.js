
const tours = [
  {
    city: "Algiers",
    car: "Renault Clio 5",
    image: "images/renault.jpeg",
    duration: "4 hours",
    price: 7500,
  },
  {
    city: "Algiers",
    car: "Peugeot 208",
    image: "images/peugeot 208.jpeg",
    duration: "6 hours",
    price: 9500,
  },
  {
    city: "Oran",
    car: "Seat Ibiza",
    image: "images/seat ibiza.jpeg",
    duration: "Full Day (10h)",
    price: 12000,
  },
  {
    city: "Constantine",
    car: "Hyundai i10",
    image: "images/hyu.avif",
    duration: "4 hours",
    price: 8000,
  },
  {
    city: "Tizi Ouzou",
    car: "Dacia Logan",
    image: "images/dacia logan.jpeg",
    duration: "6 hours",
    price: 8700,
  },
  {
    city: "Annaba",
    car: "Volkswagen Golf 7",
    image: "images/golfi.jpeg",
    duration: "Full Day (10h)",
    price: 13000,
  },
  {
    city: "Oran",
    car: "Toyota Yaris",
    image: "images/toyota.jpeg",
    duration: "2 hours",
    price: 6000,
  },
  {
    city: "Algiers",
    car: "Citroën C3",
    image: "images/citron.jpeg",
    duration: "4 hours",
    price: 7200,
  },
];


const tourGrid = document.getElementById("tourGrid");

function displayTours(list) {
  tourGrid.innerHTML = "";

  if (list.length === 0) {
    tourGrid.innerHTML = `<p style="text-align:center;color:#777;">No tours available for your selection.</p>`;
    return;
  }

  list.forEach((t) => {
    const card = document.createElement("div");
    card.classList.add("tour-card");
    card.innerHTML = `
      <img src="${t.image}" alt="${t.car}">
      <div class="tour-info">
        <h3>${t.city} - ${t.car}</h3>
        <p>Duration: ${t.duration}</p>
        <p class="price">${t.price} DZD</p>
      </div>
    `;
    tourGrid.appendChild(card);
  });
}

displayTours(tours);


const tourForm = document.getElementById("tourForm");

tourForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = document.getElementById("city").value;
  const car = document.getElementById("car").value;
  const date = document.getElementById("date").value;
  const hours = document.getElementById("hours").value;
  const extras = document.getElementById("extras").value;

  if (!city || !car || !date || !hours) {
    alert("Please fill all required fields!");
    return;
  }

  alert(
    `✅ Booking Confirmed!\n\nCity: ${city}\nCar: ${car}\nDate: ${date}\nDuration: ${hours}\nExtras: ${extras || "None"}`
  );

  tourForm.reset();
});

ELECTION

document.getElementById("city").addEventListener("change", filterTours);
document.getElementById("car").addEventListener("change", filterTours);

function filterTours() {
  const selectedCity = document.getElementById("city").value;
  const selectedCar = document.getElementById("car").value;

  const filtered = tours.filter(
    (t) =>
      (selectedCity === "" || t.city === selectedCity) &&
      (selectedCar === "" || t.car === selectedCar)
  );

  displayTours(filtered);
}
