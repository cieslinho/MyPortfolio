const navBtn = document.querySelector('.nav__btn')
const navMobile = document.querySelector('.nav__mobile')
const navItems = document.querySelectorAll('.nav__mobile-item')
const body = document.body
const sliderBox = document.querySelector('.freelance__slider-box')
const sliderLeftBtn = document.querySelector('.freelance__btn-left')
const sliderRightBtn = document.querySelector('.freelance__btn-right')
const sliderImages = document.querySelectorAll('.freelance__img')
const sliderWidth = 100
const sliderSpeed = 3000
let index = 0
const headerBox = document.querySelector('.header__info')
const headerGreetings = document.querySelector('.header__greetings')
const headerTitle = document.querySelector('.header__title')
const headerSubtitle = document.querySelector('.header__subtitle')
const headerDescription = document.querySelector('.header__description')
const nameInput = document.querySelector('#name')
const mobileInput = document.querySelector('#mobile')
const emailInput = document.querySelector('#email')
const subjectInput = document.querySelector('#subject')
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
		navItems.forEach(navItem => {
			if (navMobile.classList.contains('active-menu')) {
				navItem.addEventListener('click', () => {
					navMobile.classList.remove('active-menu')
					navBtn.classList.remove('active-btn')
					body.classList.remove('disable-scroll')
				})
			}
		})
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
			el.value = ''
			clearError(el)
		}
	})
}

const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(emailInput.value)) {
		clearError(email)
	} else {
		showError(email)
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__field')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})
}

const headerAnimation = () => {
	let greetings = 'Hi, my name is'
	let title = 'Szymon Cieśla'
	let subtitle = 'Front-end Developer.'
	let description = `"A future junior frontend developer who does not give up on resolving new issues and loves to expand in world of web development."`
	let timeout
	let index = 1
	let speed = 70
	const writingAnimation = () => {
		headerGreetings.innerHTML = greetings.slice(0, index)
		headerTitle.innerHTML = title.slice(0, index)
		headerSubtitle.innerHTML = subtitle.slice(0, index)
		headerDescription.innerHTML = description.slice(0, index)
		index++
		if ((index > greetings.length, index > title.length, index > subtitle.length, index > description.length)) return
		timeout = setTimeout(writingAnimation, speed)
	}
	writingAnimation()
}

navBtn.addEventListener('click', handleNav)
sliderRightBtn.addEventListener('click', handleRightArrow)
sliderLeftBtn.addEventListener('click', handleLeftArrow)
headerAnimation()
formBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([nameInput, mobileInput, emailInput, subjectInput, textarea])
	checkEmail(emailInput)
	checkErrors()
})
