// const jsonData ={
//     "weeks": [
//       {
//         "week": "Week 01",
//         "links": [
//           {
//             "url": "week01/learning-activities.html",
//             "title": "Learning Activities"
//           },
//           {
//             "url": "week01/team-activity.html",
//             "title": "Team Activity"
//           },
//           {
//             "url": "week01/project-milestone.html",
//             "title": "Project Milestone"
//           }
//         ]
//       },
//       {
//         "week": "Week 02",
//         "links": [
//           {
//             "url": "week02/learning-activities.html",
//             "title": "Learning Activities"
//           },
//           {
//             "url": "week02/team-activity.html",
//             "title": "Team Activity"
//           },
//           {
//             "url": "week02/project-milestone.html",
//             "title": "Project Milestone"
//           }
//         ]
//       },
//       {
//         "week": "Week 03",
//         "links": [
//           {
//             "url": "week03/learning-activities.html",
//             "title": "Learning Activities"
//           },
//           {
//             "url": "week03/team-activity.html",
//             "title": "Team Activity"
//           },
//           {
//             "url": "week03/project-milestone.html",
//             "title": "Project Milestone"
//           }
//         ]
//       },
//       {
//         "week": "Week 04",
//         "links": [
//           {
//             "url": "week04/learning-activities.html",
//             "title": "Learning Activities"
//           },
//           {
//             "url": "week04/team-activity.html",
//             "title": "Team Activity"
//           },
//           {
//             "url": "week04/project-milestone.html",
//             "title": "Project Milestone"
//           }
//         ]
//       },
//       {
//         "week": "Week 05",
//         "links": [
//           {
//             "url": "week05/learning-activities.html",
//             "title": "Learning Activities"
//           },
//           {
//             "url": "week05/team-activity.html",
//             "title": "Team Activity"
//           },
//           {
//             "url": "week05/project-milestone.html",
//             "title": "Project Milestone"
//           }
//         ]
//       },
//       {
//         "week": "Week 06",
//         "links": [
//           {
//             "url": "week06/project-milestone.html",
//             "title": "Project Milestone"
//           }
//         ]
//       },
//       {
//         "week": "Week 07",
//         "links": [
//           {
//             "url": "week07/chamber-project-description.html",
//             "title": "Chamber Project Description"
//           }
//         ]
//       }
//     ]
//   }
    
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