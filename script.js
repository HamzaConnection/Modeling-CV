const hamburger = document.querySelector(".hamburger")
const navUl = document.querySelector(".nav-ul")
const navLinks = document.querySelectorAll(".nav-ul li a");

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show')
})

const year = document.getElementById("year")
year.innerHTML = new Date().getFullYear()


navLinks.forEach(element => {
    element.addEventListener("click", () => {

        if (navUl.classList.contains('show')) {
            console.log("Hello");
            navUl.classList.toggle('show')
        }

    })
});

