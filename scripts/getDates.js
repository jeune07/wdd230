currentDate = new Date()
year = currentDate.getFullYear()
document.getElementById("year").innerText=year

document.getElementById("lastModified").innerText=document.lastModified

const menuBtn = document.querySelector(".hamburger");
const menuNav = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    menuNav.classList.toggle("is-active");

});