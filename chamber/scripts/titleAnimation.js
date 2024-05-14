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
    words[currentWordIndex].style.opacity = '1';
  
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
  });
  

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