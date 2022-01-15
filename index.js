/**
 * @file index.js
 * @brief Script for index.html.
 * 
 * This script build the website dynamically, by adding HTML content and
 * making effect. It permits to be an interactive website.
 * 
 * @author Anto Benedetti (Opixelum)
 * @bug No known bugs.
 */


// <------------- P R O F E S S I O N A L   E X P E R I E N C E -------------->

// Job list
const professionalExperience = [
    {
        title: "Web development assistant",
        company: "Kreoli SARL",
        place: "Saint Martin",
        date: "April 2019"
    },
    {
        title: "Video games sector sales intern",
        company: "FNAC SA",
        place: "Limoges",
        date: "January 2018"
    },
    {
        title: "IT technician",
        company: "Kreoli SARL",
        place: "Saint Martin",
        date: "Mars 2017"
    }
]

// Taking container from the DOM
const professionalExperienceUl = document.getElementById("professional-experience-ul")

// Reset jobs list
let professionalExperienceUlContent = ""

// Add jobs to the list
for (let i = 0; i < professionalExperience.length; i++) {
    professionalExperienceUlContent += `
    <li>
      <h3>${professionalExperience[i].title}</h3>
      <p>${professionalExperience[i].company} | ${professionalExperience[i].place}
      | ${professionalExperience[i].date}</p>
    </li>`
}

// Modify HTML with new job list
professionalExperienceUl.innerHTML = professionalExperienceUlContent
