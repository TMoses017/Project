const isScrolling = () => {
	const headerEl = document.querySelector('.navbar')
	let windowPosition = window.scrollY > 250
	headerEl.classList.toggle('active', windowPosition)
}
window.addEventListener('scroll', isScrolling)