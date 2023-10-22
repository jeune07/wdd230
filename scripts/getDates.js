const currentDate = new Date(); // Create a Date object to get the current date.
const year = currentDate.getFullYear(); // Get the current year from the date object.
document.getElementById("year").innerText = year; 

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
//images


const images ={
  clear :"../images/clear.png",
  clouds: "../images/clouds.png",
  drizzle :"../images/drizzle.png",
  humidity: "../images/humidity.png",
  mist:"../images/mist.pngg",
  rain: "../images/rain.png",
  snow: "../images/snow.png",

}

const weatherLogo=document.querySelector(".weather-logo");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");

  //weather fetching
  
    const key ="4647c80e8d04948a72cc61a107f47fd4";
  let lat ="-32.944";
  let lon ="-60.6505";
  const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

  const handlerWeatherinfo = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("There is something wrong; please try again");
      }
  
      const responseToJson = await response.json();
  
      console.log(responseToJson);
      temperature.innerHTML = responseToJson.main.temp + "°C";
      description.innerHTML = responseToJson.weather[0].description;
  
      switch (responseToJson.weather[0].main) {
        case "Clear":
          weatherLogo.src = images.clear;
          break;
        case "Clouds":
          weatherLogo.src = images.clouds;
          break;
        case "Drizzle":
          weatherLogo.src = images.drizzle;
          break;
        case "Humidity":
          weatherLogo.src = images.humidity;
          break;
        case "Mist":
          weatherLogo.src = images.mist;
          break;
        case "Rain":
          weatherLogo.src = images.rain;
          break;
        case "Snow":
          weatherLogo.src = images.snow;
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  handlerWeatherinfo(weatherurl);