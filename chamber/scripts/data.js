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

const fetchingData =async()=>{
  const response =await fetch("../data/members.json")
  try {
    if (!response.ok){
      throw new Error("something bag happened");
    }
    jsonData =await response.json()

    document.addEventListener("DOMContentLoaded", function () { 

      const cardContainer = document.getElementById("card-container");
    
      jsonData.members.forEach((company) => {
          const card = document.createElement("div");
          card.classList.add("card");
    
          const image = document.createElement("img");
          image.src = company.image;
          image.alt = company.name;
    
          const name = document.createElement("h2");
          name.textContent = company.name;
    
          const address = document.createElement("p");
          address.textContent = `Address: ${company.address}`;
    
          const phone = document.createElement("p");
          phone.textContent = `Phone: ${company.phone}`;
    
          const website = document.createElement("a");
          website.href = company.website;
          website.textContent = "Website";
    
          const membershipLevel = document.createElement("p");
          membershipLevel.textContent = `Membership Level: ${company.membershipLevel}`;
    
          const otherInfo = document.createElement("p");
          otherInfo.textContent = `Other Info: ${company.otherInfo}`;
    
          card.appendChild(image);
          card.appendChild(name);
          card.appendChild(address);
          card.appendChild(phone);
          card.appendChild(website);
          card.appendChild(membershipLevel);
          card.appendChild(otherInfo);
    
          cardContainer.appendChild(card);
      });
    });
    
    
  } catch (error) {
    console.error("errro", error)
  }
}