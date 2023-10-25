const baseURL = "https://jeune07.github.io/wdd230";
const linksURL ="https://jeune07.github.io/wdd230/data/links.json"

const getdta = async (url)=>{
    const fetchingData = await fetch(url);
    const jsonData = await fetchingData.json();

  const ulWeek = document.querySelector(".ulweek");
jsonData.weeks.forEach((week) => {
  const li = document.createElement("li");
  const weekTitle = document.createElement("span");
  weekTitle.textContent = `${week.week} `;
  li.appendChild(weekTitle);

  week.links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.textContent = link.title;

    li.appendChild(linkElement);
  });

  ulWeek.appendChild(li);
});

}
getdta(linksURL)

//open weather
const climaKey="4647c80e8d07fd4"

climaurl ="https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={climaKey}"
const handlerClima =async (climaurl)=>{

    const response = await fetch(climaurl)

}