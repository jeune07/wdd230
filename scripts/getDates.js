let  currentYearElement = document.getElementById("currentYear");
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
    
// Get the last modified date of the document
let lastModifiedDate = document.lastModified;
// Access the element with id "LastModified"
let LastModifiedElement = document.getElementById("LastModified");
// Check if lastModifiedDate is valid (not empty or undefined)
if (lastModifiedDate && LastModifiedElement) {
// Update the text content of the element to display the last modified date
LastModifiedElement.textContent = lastModifiedDate;
}
//responsive side
let hamburguer = document.querySelector("#mybutton");
let navElement= document.querySelector(".myLinks");


hamburguer.addEventListener("click",()=>{

    navElement.classList.toggle("open");
    hamburguer.classList.toggle("open");


})

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

//dark mode

// let darkCSSButton= ()=>{
//     let darkContainner= document.querySelector(".cardContainner")
//     darkContainner.classList.toggle("dark-css")
// }

let darkCSSButton = () => {
    let darkContainers = document.querySelectorAll(".card");
    darkContainers.forEach(container => {
        container.classList.toggle("dark-css");
    });
}
