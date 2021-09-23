data = [
  {
    name: "telur",
    img: "telur.png",
    price: 16500,
  },
  {
    name: "jahe",
    img: "jahe.png",
    price: 9500,
  },
  {
    name: "jamur",
    img: "jamur.png",
    price: 12850,
  },
  {
    name: "kacang",
    img: "kacang.png",
    price: 8000,
  },
  {
    name: "ikan",
    img: "ikan.png",
    price: 17300,
  },
  {
    name: "kunir",
    img: "kunir.png",
    price: 7400,
  },
  {
    name: "temulawak",
    img: "temulawak.png",
    price: 5600,
  },
];

// get items from data
function getItems(...items) {
  const el = [];
  for (let i of items) {
    for (let j of data) {
      if (i == j.name) el.push(j);
    }
  }
  return el;
}

function diskon(val, dis) {
  return val * (1 - dis / 100);
}

function createCard(items, dis) {
  let el = ``;
  console.log(items);
  items.forEach((item) => {
    el += `
      <div class="col">
      <div class="card" style="width: 16rem;">
        <img src="img/promo/${item.img}" class="card-img-top" alt="${item.img}">
        <div class="card-body">
          <div class="left">
            <p class="name">${item.name}</p>
            <p class="diskon">Rp. ${item.price}/kg</p>
            <p class="price">Rp. ${diskon(item.price, dis)}/kg</p>
          </div>
          <div class="right">
            <a href="#" class="link">
              <ion-icon name="arrow-round-forward"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>`;
  });
  return el;
}
// deklarasi

let diskon10 = document.querySelector(".diskon10");
let diskon15 = document.querySelector(".diskon15");

function fillDiskon10() {
  let items = getItems("jahe", "jamur", "telur", "kacang", "ikan", "temulawak");
  let cards = createCard(items, 10);
  diskon10.innerHTML = cards;
}
function fillDiskon15() {
  let items = getItems("jamur", "jahe", "telur", "ikan", "temulawak", "kunir");
  let cards = createCard(items, 15);
  diskon15.innerHTML = cards;
}

fillDiskon10();
fillDiskon15();
