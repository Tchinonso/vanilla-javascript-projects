//MDN
//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed , without waiting for StyleSheets, images , and subframes to finish loading.

//the load event fires when the whole page has loaded, including all dependent resources such as stylesheets and images



const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', function () {
	if (!btn.classList.contains('slide')) {
		btn.classList.add('slide')
		video.pause()
	} else {
		btn.classList.remove('slide')
		video.play()
	}
})

//preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load', function () {
	preloader.classList.add('hide-preloader')
})