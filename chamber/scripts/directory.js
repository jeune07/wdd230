const fetchingData = async () => {
    const cardContainer = document.getElementById("card-container");
  
    try {
      const response = await fetch("https://jeune07.github.io/wdd230/chamber/data/members.json");
      if (!response.ok) {
        throw new Error("Something went wrong with the fetch.");
      }
      
      const jsonData = await response.json();
      console.log(jsonData);
  
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
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchingData();
  