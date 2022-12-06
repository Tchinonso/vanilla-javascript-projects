// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editID = ""

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem)
//clear items
clearBtn.addEventListener('click', clearItems)
//load items
window.addEventListener('DOMContentLoaded',setUpItems)

// ****** FUNCTIONS **********
function addItem(e) {
	e.preventDefault()
	const value = grocery.value

	const id = new Date().getTime().toString()

	if (value && !editFlag) {
		createListItem(id,value)
		//display alert
		displayAlert('item added to list', 'success')
		//show container
		container.classList.add('show-container')
		//add to local storage
		addToLocalStorage(id, value)
		//set back to default
		setBackToDefault()
	} else if(value && editFlag){
		editElement.innerHTML = value
		displayAlert('value changed', 'success')
		//edit local storage
		editLocalStorage(editID, value)
		//then set back to default, make sure set back to default is the last thing
		setBackToDefault()
	} else {
		displayAlert("please enter value", 'danger')
	}
}
//display alert
function displayAlert(text, action) {
	alert.textContent = text
	alert.classList.add(`alert-${action}`)

	//remove alert
	setTimeout(function () {
		alert.textContent = ''
		alert.classList.remove(`alert-${action}`);
	},1500)
}
function clearItems() {
	const items = document.querySelectorAll('.grocery-item')

	if (items.length > 0) {
		items.forEach(function (item) {
			list.removeChild(item)
		})
	}
	container.classList.remove('show-container')
	displayAlert('empty', 'danger')
	setBackToDefault()
	localStorage.removeItem('list')
}
//delete function
function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement
	const id = element.dataset.id
	list.removeChild(element)
	if (list.children.length === 0) {
		container.classList.remove('show-container')
	}
	displayAlert('removed', 'danger')
	setBackToDefault()
	//remove from local storage
	removeFromLocalStorage(id)
}
//edit function
function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	//set edit item
	editElement = e.currentTarget.parentElement.previousElementSibling
	//set form value
	grocery.value = editElement.innerHTML
	
	let editFlag = true;
	let editID = element.dataset.id;
	submitBtn.textContent = 'edit' 
  	
}
function setBackToDefault() {
	grocery.value = ''
	editFlag = false
	editID = ''
	submitBtn.textContent = 'submit'
	// console.log('back to default');
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
	const groceryBud = { id: id, value: value }
	//the code above is also same thing as writing
	//* const groceryBud = {id,value}
	//create a function for the varriable items 
	//let items = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]
	let items = getLocalStorage()
	//with the above the functionality won't change
	console.log(items);
	items.push(groceryBud)
	localStorage.setItem('list',JSON.stringify(items))
}
function removeFromLocalStorage(id) {
	let items = getLocalStorage()
console.log(items);
	items = items.filter(function (item) {
		if (item.id !== id) {
			return item
		}
	})
	localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
	let items = getLocalStorage()

	items = items.map(function (item) {
		if (item.id === id) {
			item.value = value
		
		}
		return item
	})
	localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
	return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

//*localStorage API
//*setItem
//*getItem
//*removeItem
// *save as string
//commented for reference
// localStorage.setItem('baala blu', JSON.stringify(['mango', 'apple']))
// const baala = JSON.parse(localStorage.getItem('baala blu'))
// console.log(baala);
// localStorage.removeItem('baala blu')
// ****** SETUP ITEMS **********
function setUpItems() {
	let items = getLocalStorage()

	if (items.length > 0) {
		items.forEach(function (item) {
			createListItem(item.id,item.value)
		})
		container.classList.add('show-container')
	}
}
function createListItem(id, value) {
	const element = document.createElement("article");
  //add class
  element.classList.add("grocery-item");
  //add ID
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
					<div class="btn-container">
						<button type="button" class="edit-btn">
							<i class="fas fa-edit">edit</i>
						</button>
						<button type="button" class="delete-btn">
							<i class="fas fa-trash">delete</i>
						</button>
					</div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  //append child
  list.appendChild(element);
}