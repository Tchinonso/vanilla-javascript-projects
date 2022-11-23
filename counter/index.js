//set initial count
let count = 0

//select value and buttons
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')
console.log(btns);

btns.forEach(function (item) {
	item.addEventListener('click', function (e) {
		const style = e.currentTarget.classList
		if (style.contains('decrease')) {
			count--
		} else if(style.contains('increase')){
			count++
		} else {
			count = 0
		}
		if (count > 0) {
			value.style.color = 'blue'
		}
		if (count < 0) {
			value.style.color = 'red'
		}
		if (count === 0) {
			value.style.color = 'black'
		}
		value.textContent = count
	})
	
})