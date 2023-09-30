const responsiveMenu= document.querySelector(".hambuger-menu");
const menuBaground= document.querySelector(".mobile")
// const menuUl= document.querySelector("")

responsiveMenu.addEventListener("click",()=>{
    menuBaground.classList.toggle("is-active-mobile")
    // menuUl.classList.toggle("")
})