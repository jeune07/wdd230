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