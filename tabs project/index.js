const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function (e) {
	//console.log(e.target.dataset.id);
	const id = e.target.dataset.id
	if (id) {
		//remove active class from all buttons
		btns.forEach(function (btn) {
			btn.classList.remove('active')
		})
		//hide all article
		articles.forEach(function (article) {
			article.classList.remove('active')
		})
		const element = document.getElementById(id)
		element.classList.add('active')
	}
})