const today = new Date();

const thisYear = today.getFullYear();

let footer = document.querySelector('footer'); 

const copyright = document.createElement('p');

copyright.innerHTML = `&copy; ${thisYear} Francine D. McLaurin`

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

const messageForm = document.querySelector('form[name=leave_message]')
messageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const message = event.target.message.value
    console.log('name');
    console.log('email');
    console.log('message');
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
        newMessage.innerHTML = '<a href="mailto:' + email + '">'+ name + '</a> <span>' + message + '</span>';

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
      const entry = e.target.parentNode;
      entry.remove();
   });
   newMessage.appendChild(removeButton);
   messageList.appendChild(newMessage);
   messageForm.reset();
   
});





