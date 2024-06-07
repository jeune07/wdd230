document.addEventListener('DOMContentLoaded', (event) => {

    // Update current year
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
    } else {
        console.warn("Hamburger menu or nav element not found.");
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
    } else {
        console.warn("Visits display element not found.");
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
    } else {
        console.warn("Dark mode button not found.");
    }

    // Form
    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("ratingRange");

    if (range && rangevalue) {
        // RANGE event listener
        range.addEventListener('change', displayRatingValue);
        range.addEventListener('input', displayRatingValue);

        function displayRatingValue() {
            rangevalue.innerHTML = range.value;
        }
    } else {
        console.warn("Range or range value element not found.");
    }

    const kp1 = document.querySelector("#userPassword");
    const kp2 = document.querySelector("#userPasswordConfirmation");
    const message = document.querySelector("#errorMessage");

    if (kp1 && kp2 && message) {
        kp2.addEventListener("focusout", checkSame);

        // This should be refactored.
        function checkSame() {
            if (kp1.value !== kp2.value) {
                message.textContent = "❗PASSWORD DO NOT MATCH!";
                message.style.color = "red";
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
    } else {
        console.warn("Password elements or error message element not found.");
    }
});


/*feching data from  */
const lat = 19.2833;
const lon = -72.5;
const APIKey = "3d555765cff0e11f2bab03921ea9488d";
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
let temperature = "No data";
let weatherIcon = "";
let alternativeText = ""

const fetchingData = async () => {
    try {
        const gettingData = await fetch(URL);
        const dataToJson = await gettingData.json();
        temperature = dataToJson.main.temp;
        weatherIcon = dataToJson.weather[0].icon;
        alternativeText = dataToJson.weather[0].description;
        displayingData()


    } catch (error) {
        console.log('something is going wrong please see', error)

    }
}

fetchingData();

//Select element form the DOM
let currentTemperature = document.getElementById("temperatureDisplay");
let currentWeatherIcon = document.getElementById("weather-icon");
let iconPath = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`

function displayingData() {
    currentTemperature.innerHTML = temperature + " °C";
    currentWeatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
    currentWeatherIcon.setAttribute("alt", alternativeText)
    // console.log("I am here",temperature)

}

displayingData()

//Displaying data form the json file

// let titleUrl = getElementById("titleUrl");


//Fetching class data

const classDataUrl = "https://raw.githubusercontent.com/jeune07/wdd230/main/data/links.json";

const fetchingClassInfo = async () => {
    try {
        let response = await fetch(classDataUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let classInfoData = await response.json();

        classInfoData.forEach((infon) => {
            let titleUl = document.getElementById("titleUrl");
            
            // Create a list item for the week
            let li = document.createElement("li");
            li.innerText = infon.week;
            
            // Create a span to hold the links
            let span = document.createElement("span");

            infon.links.forEach((link) => {
                let anchor = document.createElement("a");
                anchor.href = link.URL;
                anchor.innerText = link.title;
                anchor.style.marginRight = "10px"; // Adding some space between links
                span.appendChild(anchor);
            });

            li.appendChild(span);
            titleUl.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching class information:', error);
    }
};

fetchingClassInfo();


