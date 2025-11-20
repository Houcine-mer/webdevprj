

let carData = {
    "Audi" : [
        { "name" :"A4" , "img" :"/images/A4.jpg" , "type" :"both" },
        { "name" :"A6", "img" :"/images/A6.jpg" , "type" :"both" },
        { "name" :"A8" , "img" :"/images/A8.webp" , "type" :"buy" },
        { "name" :"RS7" , "img" :"/images/RS7.webp" , "type" :"buy" },
        { "name" :"RS3" , "img" :"/images/RS3.webp" , "type" :"buy" },
        { "name" :"Q8 e-tron" , "img" :"/images/Q8 etron.jpg" , "type" :"buy" },
        { "name" :"A3" , "img" :"/images/A3.jpg" , "type" :"rent" },
        { "name" :"Q5" , "img" :"/images/Q5.webp" , "type" :"both" },
        { "name" :"A7" , "img" :"/images/A7.jpg" , "type" :"buy" },
        { "name" :"S7", "img" :"/images/S7.avif" , "type" :"buy" },
        { "name" :"S6" , "img" :"/images/S6.jpg" , "type" :"buy" }

    ],
    "Mercedes-benz" : [
        { "name" :"GLA SUV" , "img" :"/images/GlaSuv.jpg" , "type" :"both" },
        { "name" :"GLB SUV", "img" :"/images/GLBSUV.jpg" , "type" :"both" },
        { "name" :"C-Class Sedan" , "img" :"/images/C-class-sedan.avif" , "type" :"buy" },
        { "name" :"GLC SUV" , "img" :"/images/glc-suv.avif" , "type" :"buy" },
        { "name" :"E-Class Sedan" , "img" :"/images/E-class-sedan.webp" , "type" :"buy" },
        { "name" :"GLE SUV" , "img" :"/images/GLESUV.jpg" , "type" :"both" },
        { "name" :"G-Class" , "img" :"/images/G-Class.jpg" , "type" :"buy" },
        { "name" :"AMG GT 43" , "img" :"/images/AMG-gt-43.avif" , "type" :"buy" }
    ],
    "BMW" : [
        { "name" :"M2" , "img" :"/images/M2.webp" , "type" :"buy" },
        { "name" : "X4", "img" :"/images/X4.jpg" , "type" :"both" },
        { "name" :"M3" , "img" :"/images/M3.webp" , "type" :"buy" },
        { "name" :"M4" , "img" :"/images/M4.webp" , "type" :"buy" },
        { "name" :"Z4" , "img" :"/images/Z4.avif" , "type" :"both" }

    ],
    "Toyota" : [
        { "name" :"Corolla" , "img" :"/images/corolla.avif" , "type" :"buy" },
        { "name" : "BZ4X", "img" :"/images/bz4x.jpg" , "type" :"both" },
        { "name" :"Land Cruiser" , "img" :"/images/landCruiser.avif" , "type" :"both" }
    ],
    "Volkswagen" : [
        { "name" :"Tiguan" , "img" :"/images/tiguan.png" , "type" :"both" },
        { "name" : "Golf R", "img" :"/images/GolfR.webp" , "type" :"buy" }

    ]

};          
let currentBrand = null;
let start = 0;

const containers = document.querySelectorAll(".car-container");
const moveBar    = document.getElementById("moveID");
const prevBtn    = document.getElementById("previous");
const nextBtn    = document.getElementById("next");


function getMaxVisibleCount() {
  return Array.from(containers).filter(c => {
    const s = window.getComputedStyle(c);
    return s.display !== "none";  
  }).length;
}

function update() {
  start = 0;
  currentBrand = null;
  moveBar.classList.remove("visible");

}




function showCarList(brand) {
  currentBrand = brand;
  start = 0;
  renderPage();
}


function renderPage() {
  if (!currentBrand || !carData[currentBrand]) return;

  const models       = carData[currentBrand];
  const totalCars    = models.length;
  const visibleCount = getMaxVisibleCount();   


  containers.forEach(c => {
    c.innerHTML = "";
    c.style.visibility = "visible";   
  });


  if (start >= totalCars) {
    start = Math.max(0, totalCars - visibleCount);
  }
  if (start < 0) start = 0;

  
  for (let i = 0; i < visibleCount; i++) {
    const idx = start + i;
    const container = containers[i];

    if (idx >= totalCars) {
      container.style.visibility = "hidden";
      continue;
    }

    const car = models[idx];

    const nameEl = document.createElement("div");
    nameEl.textContent = car.name;
    nameEl.classList.add("car-name");

    const img = document.createElement("img");
    img.src = car.img;
    img.alt = car.name;
    img.classList.add("car-img");
    img.loading = "lazy";

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("car-buttons");

    if (car.type === "buy" || car.type === "both") {
      const b = document.createElement("button");
      b.className = "buy-btn";
      b.innerHTML = "<div>Buy</div><div>></div>";
      btnDiv.appendChild(b);
    }
    if (car.type === "rent" || car.type === "both") {
      const b = document.createElement("button");
      b.className = "rent-btn";
      b.innerHTML = "<div>Rent</div><div>></div>";
      btnDiv.appendChild(b);
    }

    container.appendChild(nameEl);
    container.appendChild(img);
    container.appendChild(btnDiv);
  }


  const hasPrev = start > 0;
  const hasNext = start + visibleCount < totalCars;

  moveBar.classList.toggle("visible", hasPrev || hasNext);
  prevBtn.style.opacity = hasPrev ? "1" : "0";
  prevBtn.style.pointerEvents = hasPrev ? "auto" : "none";
  nextBtn.style.opacity = hasNext ? "1" : "0";
  nextBtn.style.pointerEvents = hasNext ? "auto" : "none";
}


nextBtn.onclick = () => {
  const visibleCount = getMaxVisibleCount();
  if (start + visibleCount < carData[currentBrand].length) {
    start += visibleCount;
    renderPage();
  }
};

prevBtn.onclick = () => {
  const visibleCount = getMaxVisibleCount();
  start = Math.max(0, start - visibleCount);
  renderPage();
};


window.addEventListener("resize", () => {
  if (currentBrand) {
    const visibleCount = getMaxVisibleCount();
    start = Math.floor(start / visibleCount) * visibleCount;
    renderPage();
  }
});
