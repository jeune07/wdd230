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

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

//form script

function checkPasswordMatch() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const message = document.getElementById('password-match-message');
  
    if (password.value !== confirmPassword.value) {
      message.textContent = 'Passwords do not match.';
      confirmPassword.focus();
    } else {
      message.textContent = '';
    }
  }
  
  function updateRangeValue() {
    const range = document.getElementById('page-rating');
    const rangeValue = document.getElementById('range-value');
    rangeValue.textContent = range.value;
  }