// Created JavaScript file
// Insert Copyright Text in Footer

const today = new Date();

const thisYear = today.getFullYear();

let footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `&copy; ${thisYear} Francine D. McLaurin`;

footer.appendChild(copyright);

// Create List of Skills
const skills = [
  "Project Management",
  "Use of electronic medical record system to  record patient data",
  "Effective Communicator",
  "Collaboration (Team Work)",
  "Critical Thinking and Problem Solving",
];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Handle Message Form Submit
const messageForm = document.querySelector("form[name=leave_message]");

// Add event Listener to Message Form
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  console.log("name");
  console.log("email");
  console.log("message");
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML =
    '<a href="mailto:' +
    email +
    '">' +
    name +
    "</a> <span>" +
    `wrote: ` +
    message +
    "</span>&nbsp";

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", (e) => {
    const entry = e.target.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});


// GitHub API url. Fetch function

const GITHUB_USERNAME = "francinemclaurin";
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");


fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then((repos) => repos.json())
  .then((repositories) => {
    repositories.forEach((repo) => {
      const project = document.createElement("li");
      project.innerText = repo.name;
      projectList.appendChild(project);
    });
  });
