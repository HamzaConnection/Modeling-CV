const hamburger = document.querySelector(".hamburger")
const navUl = document.querySelector(".nav-ul")

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show')
})

const year = document.getElementById("year")
year.innerHTML = new Date().getFullYear()


