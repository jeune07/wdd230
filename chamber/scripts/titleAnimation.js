// import {APIKEY}  from "./config"

document.addEventListener('DOMContentLoaded', () => {
  let words = document.querySelectorAll('.word');

  words.forEach(word => {
    let letters = word.textContent.trim().split('');
    word.textContent = '';
    letters.forEach(letter => {
      let span = document.createElement('span');
      span.textContent = letter;
      span.className = 'letter';
      word.append(span);
    });
  });

  let currentWordIndex = 0;
  let maxWordIndex = words.length - 1;
  // words[currentWordIndex].style.opacity = '1';

  let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.add('out');
      }, i * 80);
    });

    nextWord.style.opacity = '1';
    Array.from(nextWord.children).forEach((letter, i) => {
      letter.classList.remove('out');
      letter.classList.add('behind');
      setTimeout(() => {
        letter.classList.remove('behind');
        letter.classList.add('in');
      }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  };

  rotateText();
  setInterval(rotateText, 4000);
;


//last Modified

// Get the last modified date of the document
let lastModifiedDate = document.lastModified;
// Access the element with id "LastModified"
let LastModifiedElement = document.getElementById("LastModified");
// Check if lastModifiedDate is valid (not empty or undefined)
if (lastModifiedDate && LastModifiedElement) {
  // Update the text content of the element to display the last modified date
  LastModifiedElement.textContent = lastModifiedDate;
}


/* Date and time for last  visit*/
let getVisitMessage = document.querySelector(".visitMessage");

function getdaysDifference(date1, date2) {
  const diffTime = Math.abs(date1 - date2);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays
}

function displayMessage() {

  const lastVisiString = localStorage.getItem("lastvisit");
  if (!lastVisiString) {
    getVisitMessage.innerHTML = "Welcome! Let us kow if you have any "

  } else {
    const lastVisitedDate = new Date(lastVisiString);
    const currentDate = new Date();
    const DaysDifference = getdaysDifference(lastVisitedDate, currentDate);

    if (DaysDifference === 1) {
      getVisitMessage.innerHTML = "Back so soon! Awesome!"

    } else if (DaysDifference < 1) {
      getVisitMessage.innerHTML = "Back so soon! Awesome!"
    } else {
      getVisitMessage.innerHTML = `Your last visit ${DaysDifference} days ago`
    }
  }
}

displayMessage();
localStorage.setItem("lastvisit", new Date().toString())

document.querySelectorAll('.hide-button').forEach(button => {
  button.addEventListener('click', function () {
    hideParentElement(this);
  });
});

function hideParentElement(element) {
  element.parentElement.style.display = 'none';
}

/* API Calls */


//  const APIKEY =APIKEY;
//  const lon= -72.5;
//  const lat =  19.2833;
//  const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

//  const  temperarature = async ()=>{
//   try {

//   let fechingData =await fetch(URL);
//   let response = await fechingData.json()
//   console.log(response)

//   } catch (error) {
//     console.log("Something is going wrong while fetching the data", error)    
//   }
//  }

//  temperarature()



/* Directory  */

// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
//   // example using arrow function
//   display.classList.add("grid");
//   display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
//   display.classList.add("list");
//   display.classList.remove("grid");
// }
})