const skills = [
    { icon: "bx bxl-javascript", name: "JavaScript" },
    { icon: "devicon-cypressio-plain", name: "Cypress" },
    { icon: "devicon-cucumber-plain", name: "Cucumber" },
    { icon: "devicon-playwright-plain", name: "Playwright" },
    { icon: "devicon-k6-original", name: "K6" },
    { icon: "devicon-insomnia-plain", name: "Insomnia" },
    { icon: "devicon-postman-plain", name: "Postman" },
    { icon: "bx bxl-typescript", name: "TypeScript" },
    { icon: "bx bxl-git", name: "Git" },
    { icon: "devicon-githubactions-plain", name: "GitHub Action" },
    { icon: "devicon-swagger-plain", name: "Swagger" },
    { icon: "bx bxl-angular", name: "Angular" },
    { icon: "devicon-ubuntu-plain", name: "Ubuntu" },
    { icon: "bx bxl-docker", name: "Docker" },
    { icon: "devicon-junit-plain", name: "JUnit" },
    { icon: "bx bxl-bootstrap", name: "Bootstrap" },
    { icon: "bx bxl-html5", name: "HTML" },
    { icon: "bx bxl-css3", name: "CSS" },
    { icon: "devicon-sass-original", name: "SCSS" },
    { icon: "bx bxl-java", name: "Java" },
    { icon: "bx bxl-nodejs", name: "Node.js" },
    { icon: "bx bxl-mongodb", name: "MongoDB" },
    { icon: "bx bxl-docker", name: "Postgress" },
    { icon: "devicon-yarn-original", name: "Yarn" },
    { icon: "devicon-vscode-plain", name: "Visual Studio Code" },
    { icon: "devicon-vuejs-plain", name: "Vue.js" },
];

const skillsContainer = document.getElementById("skills-container");

skills.forEach(skill => {
  const skillItem = document.createElement("div");
  skillItem.className = "tab-item resume-item";
  skillItem.innerHTML = `
    <i class='${skill.icon}'></i>
    <p>${skill.name}</p>
  `;
  skillsContainer.appendChild(skillItem);
});
