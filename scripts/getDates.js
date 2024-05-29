document.addEventListener('DOMContentLoaded', (event) => {
    let currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Get the last modified date of the document
    let lastModifiedDate = document.lastModified;
    let lastModifiedElement = document.getElementById("LastModified");
    if (lastModifiedDate && lastModifiedElement) {
        lastModifiedElement.textContent = lastModifiedDate;
    }

    // Responsive side
    let hamburger = document.querySelector("#mybutton");
    let navElement = document.querySelector(".myLinks");

    if (hamburger && navElement) {
        hamburger.addEventListener("click", () => {
            navElement.classList.toggle("open");
            hamburger.classList.toggle("open");
        });
    }

    // Visits display
    const visitsDisplay = document.querySelector(".visits");
    if (visitsDisplay) {
        let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
        if (numVisits !== 0) {
            visitsDisplay.textContent = numVisits;
        } else {
            visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
        }
        numVisits++;
        localStorage.setItem("numVisits-ls", numVisits);
    }

    // Dark mode
    let darkCSSButton = () => {
        let darkContainers = document.querySelectorAll(".card");
        darkContainers.forEach(container => {
            container.classList.toggle("dark-css");
        });
    };

// Ensure dark mode button exists and add event listener
    let darkModeButton = document.querySelector("#darkModeButton");
    if (darkModeButton) {
        darkModeButton.addEventListener("click", darkCSSButton);
    }
});

// Form

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("ratingRange");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


const kp1 = document.querySelector("#userPassword");
const kp2 = document.querySelector("#userPasswordConfirmation");
const message = document.querySelector("#errorMessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗PASSWORD DO NOT MATCH!";
        message.style.color="red"
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}
