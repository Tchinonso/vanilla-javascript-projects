const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "i'm a baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "i'm a baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "i'm a baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "i'm a baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
];

//select items
const img = document.getElementById('person-img')
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0

//load initial item
window.addEventListener('DOMContentLoaded', function () {
	showPerson(currentItem)
})

//show person based on item
function showPerson(person) {
  const items = reviews[person];
  img.src = items.img;
  author.textContent = items.name;
  job.textContent = items.job;
  info.textContent = items.text;
}

//show next
nextBtn.addEventListener('click', function () {
	currentItem++
	if (currentItem > reviews.length - 1) {
		currentItem = 0
	}
	showPerson(currentItem)
})
//show prev
prevBtn.addEventListener('click', function () {
	currentItem--
	if (currentItem < 0) {
		currentItem = reviews.length - 1
	}
	showPerson(currentItem)
})

//RANDOM BTN
randomBtn.addEventListener('click', function () {
	currentItem = getRandomBtn()
	showPerson(currentItem)
	console.log(currentItem);
})

function getRandomBtn() {
	return Math.floor(Math.random() * reviews.length)
}