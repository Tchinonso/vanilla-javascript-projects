//traversing the dom method
// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function (btn) {
// 	btn.addEventListener('click', function (e) {
// 		const question = e.currentTarget.parentElement.parentElement
// 		question.classList.toggle('show-text')
// 	})
// })





//lets also see this method
//using selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(function (apple) {
	//console.log(apple);
	const btn = apple.querySelector('.question-btn')
	//console.log(btn);
	btn.addEventListener('click', function (e) {
		questions.forEach(function (orange) {
			if (orange !== apple) {
				orange.classList.remove('show-text')
			}
		})
		apple.classList.toggle('show-text')
	})
})