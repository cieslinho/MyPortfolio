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

const nameInput = document.querySelector('#name')
const mobileInput = document.querySelector('#mobile')
const emailInput = document.querySelector('#email')
const subjectInput = document.querySelector('#subject')
const formLabel = document.querySelector('.contact__label')
const textarea = document.querySelector('#textarea')
const formBtn = document.querySelector('.contact__btn')

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

const showError = input => {
	const formField = input.parentElement
	formField.classList.add('error')
}

const clearError = input => {
	const formField = input.parentElement
	formField.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el)
		} else {
			clearError(el)
			// formLabel.classList.add('active-label')
		}
	})
}

const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(emailInput.value)) {
		clearError(email)
	} else {
		showError(email, `E-mail is not correct`)
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__field')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
		console.log(el)
	})

	console.log(allInputs)
	console.log(errorCount)
}

navBtn.addEventListener('click', handleNav)
sliderRightBtn.addEventListener('click', handleRightArrow)
sliderLeftBtn.addEventListener('click', handleLeftArrow)
formBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([nameInput, mobileInput, emailInput, subjectInput, textarea])
	checkEmail(email)
	checkErrors()
})
