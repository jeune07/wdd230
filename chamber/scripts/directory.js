
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}


// fetching data


const grid = document.querySelector(".grid");
const businessURL = "http://127.0.0.1:5500/data/members.json";

let fetchDirectoryData = async () => {
    try {
        let fetchingDataBusiness = await fetch(businessURL);

        if (!fetchingDataBusiness.ok) {
            throw new Error("Something is going wrong, sorry.");
        } else {
            let data = await fetchingDataBusiness.json(); // Correctly parse JSON
            console.log(data);

            data.forEach((company) => {
                let section = document.createElement('section');
                let img = document.createElement('img');
                let h3 = document.createElement('h3');
                let p = document.createElement('p');
                let a = document.createElement('a');

                // Set attributes and innerHTML/textContent
                img.src = company.image;
                img.alt = company.names;
                h3.textContent = company.names;
                p.textContent = company.membershipLevel;
                a.href = company.websiteURLs;
                a.textContent = "Visit Website";

                // Append elements to section
                section.appendChild(h3);
                section.appendChild(img);
                section.appendChild(p);
                section.appendChild(a);

                // Append section to grid
                grid.appendChild(section);
            });
        }
    } catch (error) {
        console.log(error);
    }
};

fetchDirectoryData();
