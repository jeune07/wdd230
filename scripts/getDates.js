currentDate = new Date()
year = currentDate.getFullYear()
document.getElementById("year").innerText=year

document.getElementById("lastModified").innerText=document.lastModified

const hamburger = document.querySelector(".hamburger");
const ulContainer = document.querySelector(".ul-container");
const container = document.querySelector(".container");
const main =document.querySelector(".main")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    ulContainer.classList.toggle("active");
    container.classList.toggle("active")
    main.classList.toggle("active")
    

});
const removeActiveClass=document.querySelectorAll(".nav-link");
removeActiveClass.forEach(a => a.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    ulContainer.classList.remove("active");
    container.classList.remove("active");
}))