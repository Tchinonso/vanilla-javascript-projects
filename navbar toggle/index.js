//classlist = gets/shows all classes
//contains = checks classlist for specific class
//add = adds class
//remove = remove class
//toggle = toggle class

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
	// console.log(links.classList);
	// console.log(links.classList.contains('random'));
	// console.log(links.classList.contains('links'));
	
	//add and remove method
	// if (links.classList.contains('show-links')) {
	// 	links.classList.remove('show-links')
	// } else {
	// 	links.classList.add('show-links')
	// }

	//toggle method which is simpler with less code
	links.classList.toggle('show-links')
})