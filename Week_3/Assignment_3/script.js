// Data to be used
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// Variables 
const buttons = document.querySelector(".btn-container");
const listMenu = document.querySelector(".section-center");


// Arrow Function (ES6 Feature) for creating buttons dynamically
const createButtons = () => {
  // template literals (ES6 Feature)
  let allButtons = `
  <button id="all" type="button" class="btn btn-outline-dark btn-item" >All</button>
  <button id="korea" type="button" class="btn btn-outline-dark btn-item" >Korea</button>
  <button id="japan" type="button" class="btn btn-outline-dark btn-item" >Japan</button>
  <button id="china" type="button" class="btn btn-outline-dark btn-item" >China</button>
  `;
  // DOM & UI (User Interface) Management
  buttons.innerHTML = allButtons;
};
// callback
createButtons();


// Arrow Function (ES6 Feature) for generating menu dynamically
const createMenu = (dish) => {
    // template literals (ES6 Feature)
  let menu = `
  <div class="menu-items col-lg-6 col-sm-12">
    <img class="photo" src="${dish.img}" alt="${dish.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${dish.title}</h4>
          <h4>${dish.price}</h4>
        </div>
        <div class="menu-text">${dish.desc}</div>
      </div>
  </div>
  `;
  return menu;
};


// Arrow Function (ES6 Feature) for generating food list dynamically
const allFoodsList = () => {
  let allFoods = "";
  // Creating a shallow copy via map
  menu.map((item) => {
    allFoods += createMenu(item);
  });
  // DOM & UI (User Interface) Management
  listMenu.innerHTML = allFoods;
};
document.addEventListener("DOMContentLoaded", allFoodsList);



// Arrow Function (ES6 Feature) for Korean food list list dynamically
const koreaFoodsList = () => {
  let koreaFoods = "";
  menu.map((item) => {
    // Creating a shallow copy via map
    if (item.category === "Korea") {
      koreaFoods += createMenu(item);
    }
  });
  // DOM & UI (User Interface) Management
  listMenu.innerHTML = koreaFoods;
};

// Arrow Function (ES6 Feature) for Japanese food list list dynamically
const japanFoodsList = () => {
  let japanFoods = "";
  // Creating a shallow copy via map
  menu.map((item) => {
    if (item.category === "Japan") {
      japanFoods += createMenu(item);
    }
  });
  // DOM & UI (User Interface) Management
  listMenu.innerHTML = japanFoods;
};

// Arrow Function (ES6 Feature) for Chinese food list list dynamically
const chinaFoodsList = () => {
  let chinaFoods = "";
  // Creating a shallow copy via map
  menu.map((item) => {
    if (item.category === "China") {
      chinaFoods += createMenu(item);
    }
  });
  // DOM & UI (User Interface) Management
  listMenu.innerHTML = chinaFoods;
};


// Event listeners & Callback functions
document.querySelector("#all").addEventListener("click", allFoodsList);
document.querySelector("#korea").addEventListener("click", koreaFoodsList);
document.querySelector("#japan").addEventListener("click", japanFoodsList);
document.querySelector("#china").addEventListener("click", chinaFoodsList);
