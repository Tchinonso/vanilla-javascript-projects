//items
const menu = [
  {
    id: 1,
    categories: "breakfast",
    title: "buttermilk pancakes",
    price: 15.99,
    img: "./images/edu5.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol`,
  },
  {
    id: 2,
    categories: "lunch",
    title: "buttermilk",
    price: 16.99,
    img: "./images/meet1.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there `,
  },
  {
    id: 3,
    categories: "breakfast",
    title: "pancakes",
    price: 13.99,
    img: "./images/meet4.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take`,
  },
  {
    id: 4,
    categories: "lunch",
    title: "meals",
    price: 10.99,
    img: "./images/met5.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take`,
  },
  {
    id: 5,
    categories: "breakfast",
    title: "cornflakes",
    price: 25.99,
    img: "./images/met8.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take,check for more`,
  },
  {
    id: 6,
    categories: "lunch",
    title: "fried rice",
    price: 59.99,
    img: "./images/rom1.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take,check for more`,
  },
  {
    id: 7,
    categories: "shakes",
    title: "fried chicken",
    price: 43.99,
    img: "./images/rom2.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take,check for more`,
  },
  {
    id: 8,
    categories: "shakes",
    title: "fish",
    price: 40.99,
    img: "./images/rom3.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take,check for more`,
  },
  {
    id: 9,
    categories: "shakes",
    title: "meats",
    price: 39.99,
    img: "./images/rom6.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take,check for more`,
  },
  {
    id: 10,
    categories: "shakes",
    title: "frozen",
    price: 30.99,
    img: "./images/rom8.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take,check for more`,
  },
  {
    id: 11,
    categories: "dinner",
    title: "dinner steak",
    price: 50.99,
    img: "./images/mmm.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take,check for more`,
  },
  {
    id: 12,
    categories: "manner",
    title: "manner from above",
    price: 100.99,
    img: "./images/rom6.jpg",
    desc: `i'm a baby woke adult ,this is just gibberish words lol,it doesnt end there ,give and take,check for more`,
  },
];

const sectionCenter = document.querySelector('.section-center')


//load items
window.addEventListener('DOMContentLoaded', function () {
  // first method , but the second method with function() allows filtering the items
  // let displayMenu = menu.map(function (item) {
  // 	console.log(item);

  // 	return `<article class="menu-item">
  // 			<img src=${item.img} alt=${item.title} class="photo">
  // 			<div class="item-info">
  // 				<header>
  // 					<h4>${item.title}</h4>
  // 					<h4 class="price">$${item.price}</h4>
  // 				</header>
  // 				<p class="item-text">
  // 					${item.desc}
  // 				</p>
  // 			</div>
  // 		</article>`;
  // })
  // displayMenu = displayMenu.join('')
  // sectionCenter.innerHTML = displayMenu;
  displayMenuItems(menu);
  displayMenuButtons()
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item) {
    console.log(item);

    return `<article class="menu-item">
				<img src=${item.img} alt=${item.title} class="photo">
				<div class="item-info">
					<header>
						<h4>${item.title}</h4>
						<h4 class="price">$${item.price}</h4>
					</header>
					<p class="item-text">
						${item.desc}
					</p>
				</div>
			</article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
 
}



//adding a new item dynamically
//get only unique categories
//iterate over categories return button
//make sure to select buttons when they are available
//comment the buttons in html and also comment the articles since we have the items in app js

//the code of getting the items is inside the window.addeventlistener

//the code for my dynamic buttons
//first select the the buttons container from the html(btn-container) example
const dynamicButtonsContainer = document.querySelector('.btn-container')
//then connect the dynamicbuttonscontainer with categorybtns inside the window.addevent---

//new function for cleaner code
function displayMenuButtons() {
	const newCategories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.categories)) {
        values.push(item.categories);
      }
      return values;
    },
    ["all"]
  );
  //console.log(newCategories);
  const categoryBtns = newCategories
    .map(function (categories) {
      return `<button class="filter-btn" type="button"  data-id=${categories}>${categories}</button>`;
    })
    .join("");
  //console.log(categoryBtns);
  dynamicButtonsContainer.innerHTML = categoryBtns;
  //filter items
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const categories = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (newMenu) {
        //console.log(newMenu.categories);
        if (newMenu.categories === categories) {
          return newMenu;
        }
      });
      //console.log(menuCategory);
      if (categories === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}