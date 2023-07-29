// Replace these variables with your actual data
const email = 'akshit2022@outlook.com';
const telegramUsername = 'godfather_2606';

// Update the email and Telegram link dynamically
document.getElementById('email').innerText = email;
document.getElementById('telegram-link').href = `https://t.me/${telegramUsername}`;

// Sample project data (replace with your actual projects)
const projectsData = [
  {
    name: 'Obito Management bot',
    description: 'Management bot which can manage your groups and channels',
    technologies: 'Python, pyrogram telethon ptb',
    liveDemo: 'https://github.com/darkphoenix2601/Obito',
    thumbnail: 'Obito.jpg'
  },
  {
    name: 'Project 2',
    description: 'Question AI telegram bot with the help of openai.',
    technologies: 'Python , REPO IS PVT OF SOME ISSUES',
    liveDemo: 'https://github.com/darkphoenix2601/Question_AI/tree/main',
    thumbnail: 'project2-thumbnail.jpg'
  }
  // Add more project data objects as needed
];

// Dynamically populate the projects section
const projectsList = document.getElementById('projects-list');

projectsData.forEach(project => {
  const projectHTML = `
    <div class="project-card">
      <img src="${project.thumbnail}" alt="${project.name}" style="width: 120px;"> <!-- Changed thumbnail width here -->
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <p><strong>Technologies:</strong> ${project.technologies}</p>
      <a href="${project.liveDemo}" target="_blank">Live Demo</a>
    </div>
  `;

  projectsList.innerHTML += projectHTML;
});
