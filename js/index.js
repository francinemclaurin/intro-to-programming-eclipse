const today = new Date();

const thisYear = today.getFullYear();

let footer = document.querySelector('footer'); 

const copyright = document.createElement('p');

copyright.innerHTML = `Francine D. McLaurin &copy; ${thisYear}`

footer.appendChild(copyright)

const skills = [
    'Project Management',
    'Use of electronic medical record system to     record patient data',
    'Effective Communicator',
    'Collaboration',
    'Critical Thinking and Problem Solving'
]

const skillsSection = document.getElementById('skills')

const skillsList = skillsSection.querySelector('ul')

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)

   
}


console.log(skillsSection);



