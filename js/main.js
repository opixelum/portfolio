/**
 * @file main.js
 * @brief Script for index.html.
 *
 * This script builds the website dynamically, by adding HTML content and
 * making effect. It permits to be an interactive website.
 *
 * @author Anto Benedetti (Opixelum)
 * @bug No known bugs.  */

// <####################### I N T E R A C T I V I T Y ########################>

// <------------------- M A I N   M E N U   B U T T O N S -------------------->

// Get all main menu buttons
const aboutMeBtn = document.getElementById("about-me-btn")
const jobExperiencesBtn = document.getElementById("job-experiences-btn")
const diplomasBtn = document.getElementById("diplomas-btn")
const skillsBtn = document.getElementById("skills-btn")
const personalProjectsBtn = document.getElementById("personal-projects-btn")

// Group all divisions in a single array
const mainMenuBtns = [
  aboutMeBtn,
  jobExperiencesBtn,
  diplomasBtn,
  personalProjectsBtn,
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
const aboutMeDiv = document.getElementById("about-me-div")
const jobExperiencesDiv = document.getElementById("job-experiences-div")
const diplomasDiv = document.getElementById("diplomas-div")
const personalProjectsDiv = document.getElementById("personal-projects-div")
const skillsDiv = document.getElementById("skills-div")

// Group all divisions in a single array
const divsContent = [
  {
    button: "about-me-btn",
    id: "about-me-div",
    content: aboutMeDiv,
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
    button: "personal-projects-btn",
    id: "personal-projects-div",
    content: personalProjectsDiv,
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
    title: "Founder & CEO (for freelancing)",
    company: "AIO",
    place: "Paris",
    date: "03/2025 - present",
    tasks: [
      "AI-powered virtual companion assisting elderly users in nursing homes, in their medications schedule, communication with their family, save memories and more. Medical staff can follow the medications schedule registered by the AI assistant of the patients"
    ]
  },
  {
    title: "Data Scientist (apprenticeship)",
    company: "BNP Paribas Personal Finance",
    place: "Paris",
    date: "09/2024 - present",
    tasks: [
      "AI model for predicting when a client is most likely to cancel his insurance or card contract",
      "Data analysis for inclusive finance",
      "Prediction on which client to contact for marketing campaigns"
    ]
  },
  {
    title: "Blockchain Engineer & Researcher (apprenticeship)",
    company: "CEA",
    place: "Paris",
    date: "09/2022 - 09/2024",
    tasks: [
      "Scientific paper on the computational resource consumption of several smart contract proxy patterns",
      "Blockchain-based data traceability solutions",
      "Interactive map to simulate a network of blockchain nodes & weather sensors and calculate its energy consumption",
      "Experimentation with tools and working methods to establish a common laboratory library"
    ]
  },
  {
    title: "Web3 Developer (internship)",
    company: "Neofacto",
    place: "Paris",
    date: "05/2022 - 08/2022",
    tasks: [
      "Decentralized application for automatic DCA investments in decentralized finance"
    ]
  },
  {
    title: "Software Developer",
    company: "Feature",
    place: "Paris",
    date: "03/2022 - 07/2022",
    tasks: [
        "Smart contract optimization",
        "Smart contract tests",
        "CI/CD on GitHub"
    ]
  }
]

// Taking container from the DOM
const jobExperiencesUl = document.getElementById("job-experiences-ul")

// Reset jobs list
let jobExperiencesUlContent = ""

// Build tasks lists for each job
let tasksPerJob = []

for (let i = 0; i < jobExperiences.length; i++) {
  let tasks = ""
  const length = jobExperiences[i].tasks.length
  for (let j = 0; j < length; j++) {
    tasks += `<li>${jobExperiences[i].tasks[j]}${j === length - 1 ? "." : ";"}</li>`
  }
  tasksPerJob.push(tasks)
}

// Add jobs to the list
for (let i = 0; i < jobExperiences.length; i++) {
  jobExperiencesUlContent += `
    <li id="job-experience-li">
      <h3>${jobExperiences[i].title}</h3>
      <p>${jobExperiences[i].company}<br>
      ${jobExperiences[i].place}<br>
      ${jobExperiences[i].date}</p>
      <ul>${tasksPerJob[i]}</ul>
    </li>`
}

// Modify HTML with new jobs list
jobExperiencesUl.innerHTML = jobExperiencesUlContent


// <---------------------------- D I P L O M A S ----------------------------->

const diplomas = [
  {
    title: 'Master of Computer Science - Artificial Intelligence Program (ongoing)',
    school: "ESGI Paris",
    date: "09/2024 - 09/2026"
  },
  {
    title: "Bachelor of Computer Science - Artificial Intelligence Program",
    school: "ESGI Paris",
    date: "2021 - 2024"
  },
  {
    title: "High School Diploma (specialized in computer science, maths & economics)",
    school: "LGT Robert Weinum Saint Martin",
    date: "09/2018 - 07/2021"
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
      <p>${diplomas[i].school}<br>${diplomas[i].date}</p>
    </li>`
}

// Modify HTML with new diplomas list
diplomasUl.innerHTML = diplomasUlContent


// <---------------------------- P R O J E C T S ----------------------------->

const personalProjects = [
  {
    title: "Atamai",
    brief: "Librairie de machine learning en Rust avec interface Python.",
    date: "07/2024 - Présent",
    url: "https://github.com/opixelum/atamai",
  },
  {
    title: "Opixelib",
    brief: "Librairie multi-langages comprenant des modules de tri et de maths.",
    date: "10/2023 - Présent",
    url: "https://github.com/opixelum/opixelib",
  },
  {
    title: "ALIA",
    brief: "Application de classiﬁcation d’arachnides avec notre propre librairie de machine learning en Rust et interface Python.",
    date: "03/2024 - 07/2024",
    url: "https://github.com/alia-team/ai",
  },
  {
    title: "Kaggle",
    brief: "Divers projets de machine learning (régression, classification, ...).",
    date: "01/2024 - Présent",
    url: "https://kaggle.com/antobenedetti",
  },
]

// Taking container from the DOM
const personalProjectsUl = document.getElementById("personal-projects-ul")

// Reset projects container content
let personalProjectsUlContent = ""

// Add projects to the container
for (let i = 0; i < personalProjects.length; i++) {
  personalProjectsUlContent += `
    <li>
      <h3>${personalProjects[i].title}</h3>
      <p>${personalProjects[i].brief}<br><br>${personalProjects[i].date}<br><br>
      <a href="${personalProjects[i].url}" target="_blank">Click here to learn more</a>
      </p>
    </li>`
}

// Modify HTML with new projects list
personalProjectsUl.innerHTML = personalProjectsUlContent


// <------------------------------ S K I L L S ------------------------------->

const skills = [
  "Python",
  "Rust",
  "C",
  "Solidity",
  "JavaScript",
  "TypeScript",
  "TensorFlow",
  "PyTorch",
  "SQL",
  "Cassandra",
  "Hadoop",
  "PySpark",
  "Neo4J",
  "PowerBI",
  "Excel",
  "Linux",
  "Windows",
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
