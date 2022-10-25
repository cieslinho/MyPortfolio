const navBtn = document.querySelector('.nav__btn')
const navMobile = document.querySelector('.nav__mobile')

const handleNav = () => {
	navBtn.classList.toggle('active-btn')
	if (navBtn.classList.contains('active-btn')) {
		navMobile.classList.add('active-menu')
	} else {
		navMobile.classList.remove('active-menu')
	}
}

navBtn.addEventListener('click', handleNav)
