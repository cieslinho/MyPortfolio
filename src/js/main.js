const navBtn = document.querySelector('.nav__btn')
const navMobile = document.querySelector('.nav__mobile')
const body = document.body
const sliderBox = document.querySelector('.freelance__slider-box')
const sliderLeftBtn = document.querySelector('.freelance__btn-left')
const sliderRightBtn = document.querySelector('.freelance__btn-right')
const sliderImages = document.querySelectorAll('.freelance__img')
const sliderWidth = 100
const sliderSpeed = 3000
let index = 0

const handleSlider = () => {
	index++
	changeImages()
}

let startSlider = setInterval(handleSlider, sliderSpeed)

const changeImages = () => {
	if (index > sliderImages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = sliderImages.length - 1
	}
	sliderBox.style.transform = `translateX(${-index * sliderWidth}%)`
}

const handleRightArrow = () => {
	index++
	resetInterval()
}
const handleLeftArrow = () => {
	index--
	resetInterval()
}

const resetInterval = () => {
	changeImages()
	clearInterval(startSlider)
	startSlider = setInterval(handleSlider, sliderSpeed)
}

const handleNav = () => {
	navBtn.classList.toggle('active-btn')
	if (navBtn.classList.contains('active-btn')) {
		navMobile.classList.add('active-menu')
		body.classList.add('disable-scroll')
	} else {
		navMobile.classList.remove('active-menu')
		body.classList.remove('disable-scroll')
	}
}

navBtn.addEventListener('click', handleNav)
sliderRightBtn.addEventListener('click', handleRightArrow)
sliderLeftBtn.addEventListener('click', handleLeftArrow)
