burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.left-nav')
rightnav = document.querySelector('.right-nav')

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp')
    leftnav.classList.toggle('v-class-resp')
    rightnav.classList.toggle('v-class-resp')
})