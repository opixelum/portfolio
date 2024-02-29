/**
 * @file main.js
 * @brief Script for index.html.
 *
 * This script builds the website dynamically, by adding HTML content and
 * making effect. It permits to be an interactive website.
 *
 * @author Anto Benedetti (Opixelum)
 * @bug No known bugs.  */


// <###################### F U N C T I O N N A L I T Y #######################>

// <------------------------ C O N T A C T   F O R M ------------------------->

const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")


// <####################### I N T E R A C T I V I T Y ########################>

// <------------------- M A I N   M E N U   B U T T O N S -------------------->

// Get all main menu buttons
const aboutBtn = document.getElementById("about-btn")
const jobExperiencesBtn = document.getElementById("job-experiences-btn")
const diplomasBtn = document.getElementById("diplomas-btn")
const skillsBtn = document.getElementById("skills-btn")
const projectsBtn = document.getElementById("projects-btn")

// Group all divisions in a single array
const mainMenuBtns = [
  aboutBtn,
  jobExperiencesBtn,
  diplomasBtn,
  projectsBtn,
  skillsBtn
]

// Add event listeners to all main menu buttons
for (let i = 0; i < mainMenuBtns.length; i++) {
  mainMenuBtns[i].addEventListener("click", function() {
    hideAllDivisions()
    showDivision(divsContent[i])
  })
}


// <--------------------------- D I V I S I O N S ---------------------------->

// Get all divisions
const aboutDiv = document.getElementById("about-div")
const jobExperiencesDiv = document.getElementById("job-experiences-div")
const diplomasDiv = document.getElementById("diplomas-div")
const projectsDiv = document.getElementById("projects-div")
const skillsDiv = document.getElementById("skills-div")

// Group all divisions in a single array
const divsContent = [
  {
    button: "about-btn",
    id: "about-div",
    content: aboutDiv,
  },
  {
    button: "job-experiences-btn",
    id: "job-experiences-div",
    content: jobExperiencesDiv,
  },
  {
    button: "diplomas-btn",
    id: "diplomas-div",
    content: diplomasDiv,
  },
  {
    button: "projects-btn",
    id: "projects-div",
    content: projectsDiv,
  },
  {
    button: "skills-btn",
    id: "skills-div",
    content: skillsDiv,
  },
]

// Hide all divisions by setting their display to "none"
function hideAllDivisions() {
  for (let i = 0; i < divsContent.length; i++) {
    divsContent[i].content.style.display = "none"
  }
}
// Call above function to hide divisions when opening page
hideAllDivisions()


// When button clicked, hide menu, display "Go back" button & change page title
function showDivision(division) {
  // Swipe animation when main button clicked
  const swipe = anime.timeline({
    easing: "easeInQuad",
    duration: 200,
  })

  swipe
    .add({
      targets: `#${division.button}:not(#go-back-btn)`,
      opacity: 0
    })
    .add({
      targets: `button:not(#go-back-btn), #social-medias`,
      opacity: 0
    }, 200)
    .add({
      targets: `#${division.id}, #go-back-btn`,
      opacity: 1
    }, 700)

  setTimeout(function() {
    division.content.style.display = "block"
    goBackBtn.style.display = "block"
    mainMenu.style.display = "none"
    socialMedias.style.display = "none"
  }, 600)
}


// <------------------------------- O T H E R -------------------------------->

const mainMenu = document.getElementById("main-menu")
const socialMedias = document.querySelector("#social-medias")

// Get & configure the go back button
const goBackBtn = document.getElementById("go-back-btn")
goBackBtn.addEventListener("click", function() {
  const swipe = anime.timeline({
    easing: "easeInQuad",
    duration: 200,
  })

  swipe
    .add({
      targets: `#go-back-btn`,
      opacity: 0
    })
    .add({
      targets: `div`,
      opacity: 0
    }, 350)
    .add({
      targets: `#main-menu, button:not(#go-back-btn), #social-medias`,
      opacity: 1
    }, 700)

  setTimeout(function() {
    goBackBtn.style.display = "none"
    mainMenu.style.display = "block"
    for (let i = 0; i < divsContent.length; i++) {
      divsContent[i].content.style.display = "none"
    }
    socialMedias.style.display = "flex"
  }, 600)
})


// <############################# C O N T E N T ##############################>

// <------------- P R O F E S S I O N A L   E X P E R I E N C E -------------->

// Job list
const jobExperiences = [
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
const jobExperiencesUl = document.getElementById("job-experiences-ul")

// Reset jobs list
let jobExperiencesUlContent = ""

// Add jobs to the list
for (let i = 0; i < jobExperiences.length; i++) {
  jobExperiencesUlContent += `
    <li>
      <h3>${jobExperiences[i].title}</h3>
      <p>${jobExperiences[i].company}<br>
      ${jobExperiences[i].place}<br>
      ${jobExperiences[i].date}</p>
    </li>`
}

// Modify HTML with new jobs list
jobExperiencesUl.innerHTML = jobExperiencesUlContent


// <---------------------------- D I P L O M A S ----------------------------->

const diplomas = [
  {
    title: "Computer science european master",
    school: "ESGI Paris",
    result: "Planned",
    date: "2024 - 2026"
  },
  {
    title: "Computer science european bachelor",
    school: "ESGI Paris",
    result: "Ongoing",
    date: "2021 - 2024"
  },
  {
    title: "French high school diploma",
    school: "LGT Robert Weinum Saint Martin",
    result: "Mention Très bien",
    date: "2018 - 2021"
  },
  {
    title: "French junior high school certificate",
    school: "Collège Jean Moulin Ambazac",
    result: "Mention Très bien",
    date: "2017-2018"
  }
]

// Take container from the DOM
const diplomasUl = document.getElementById("diplomas-ul")

// Reset diplomas container content
let diplomasUlContent = ""

// Add diplomas to the container
for (let i = 0; i < diplomas.length; i++) {
  diplomasUlContent += `
    <li>
      <h3>${diplomas[i].title}</h3>
      <p>${diplomas[i].school}<br>${diplomas[i].result}<br>
      ${diplomas[i].date}</p>
    </li>`
}

// Modify HTML with new diplomas list
diplomasUl.innerHTML = diplomasUlContent


// <---------------------------- P R O J E C T S ----------------------------->

const projects = [
  {
    title: "Convopy",
    brief: "Convolutional neural network for image classification.",
    date: "2024",
    url: "https://github.com/opixelum/convopy",
  },
  {
    title: "Opixelib",
    brief: "Personal, independent, multi-language library with sorting, math and artificial intelligence modules.",
    date: "2024",
    url: "https://github.com/opixelum/opixelib",
  },
  {
    title: "Java Simple Neural Network",
    brief: "First implementation of a neural network in Java for easy tasks.",
    date: "2023",
    url: "https://github.com/opixelum/java-simple-neural-network"
  },
  {
    title: "ChatGPT CLI",
    brief: "Command-line interface for ChatGPT.",
    date: "2023",
    url: "https://github.com/opixelum/chatgpt-cli",
  },
  {
    title: "Vault",
    brief: "Password manager developed in C.",
    date: "2023",
    url: "https://github.com/opixelum/vault",
  }
]

// Taking container from the DOM
const projectsUl = document.getElementById("projects-ul")

// Reset projects container content
let projectsUlContent = ""

// Add projects to the container
for (let i = 0; i < projects.length; i++) {
  projectsUlContent += `
    <li>
      <h3>${projects[i].title}</h3>
      <p>${projects[i].brief}<br><br>${projects[i].date}<br><br>
      <a href="${projects[i].url}" target="_blank">Click here to learn more</a>
      </p>
    </li>`
}

// Modify HTML with new projects list
projectsUl.innerHTML = projectsUlContent


// <------------------------------ S K I L L S ------------------------------->

const skills = [
  "Rust",
  "C",
  "Solidity",
  "Python",
  "TypeScript",
  "TensorFlow",
  "Deep Learning"
]

// Taking container from the DOM
const skillsUl = document.getElementById("skills-ul")

// Reset skills container content
let skillsUlContent = ""

// Add skills to the container
for (let i = 0; i < skills.length; i++)
  skillsUlContent += `<li><h3>${skills[i]}</h3></li>`

// Modify HTML with new skills list
skillsUl.innerHTML = skillsUlContent 
