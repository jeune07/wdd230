const hamburger = document.querySelector(".hamburger");
const ulContainer = document.querySelector(".ul-container");
const container = document.querySelector(".container");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    ulContainer.classList.toggle("active");
    container.classList.toggle("active")
    
    

});
const removeActiveClass=document.querySelectorAll(".nav-link");
removeActiveClass.forEach(a => a.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    ulContainer.classList.remove("active");
    container.classList.remove("active");
}))

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}

//get the time form the form

document.getElementById("timestamp").value = new Date().toLocaleString();


//directory
