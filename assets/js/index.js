const data = [
  {
    title: "Apple",
    owner: "Pak budi",
    img: "apple.png",
    rate: 5,
    sale: 10,
    price: 10000,
    type: "fruits",
    address: "jl. Kapten Tendean No.28 Kota Kediri Jawa timur",
  },
  {
    title: "Bayam",
    owner: "Pak budi",
    img: "apple.png",
    rate: 3,
    sale: 10,
    price: 2000,
    type: "vegetables",
    address: "jl. Kapten Tendean No.28 Kota Kediri Jawa timur",
  },
  {
    title: "Cabai",
    owner: "Pak budi",
    img: "apple.png",
    rate: 4,
    sale: 10,
    price: 18500,
    type: "vegetables",
    address: "jl. Kapten Tendean No.28 Kota Kediri Jawa timur",
  },
];

// ====== Declaration Varaiable =====
const recomendedSection = document.querySelector(".items.recomended");
const closestSection = document.querySelector(".items.closest");

// get items from data
function getItems(...items) {
  const el = [];
  for (let i of items) {
    for (let j of data) {
      if (i == j.title) el.push(j);
    }
  }
  return el;
}
// create card
function createCard(items) {
  let el = ``;
  items.forEach((item) => {
    el += ` 
      <div class="col col-4 align-self-start">
          <a href="#" class="card" style="width: 18rem">
              <img class="card-img-top" src="img/${item.img}" alt="${item.img}" />    
              <div class="card-body pt-0">
              <div class="container">
                  <div class="row rate">
                      <div class="col px-0">
                          <div>
                              <span class="star">${getRate(item.rate)}</span>
                              <span class="number">&#47 ${Number(item.rate).toFixed(1)}</span>
                          </div>
                      </div>
                      <div class="col px-0 pt-1 text-right sale">
                          <span class="number-sale">${item.sale}</span> Terjual
                      </div>
                  </div>
              </div>
              <h2 class="my-0">${item.title}</h2>
              <p>${item.owner}</p>
              <h3>Rp ${Number(item.price).toLocaleString("ID")} &#47; <span class="fractions">${item.type == "fruits" ? "buah" : "Kg"}</span></h3>
              <p class="card-text">${item.address}</p>
              </div>
          </a>
      </div>`;
  });
  return el;
}
// get rate from item
function getRate(val) {
  let rate = ``;
  for (let i = 0; i < val; i++) {
    rate += `<ion-icon name="star"></ion-icon>`;
  }
  return rate;
}
// fill section recomended
function fillRecomended() {
  const items = getItems("Apple", "Bayam", "Cabai");
  const el = createCard(items);
  recomendedSection.innerHTML = el;
}
function fillClosest() {
  const items = getItems("Bayam", "Cabai", "Apple");
  const el = createCard(items);
  closestSection.innerHTML = el;
}

fillRecomended();
fillClosest();
