const portfolioProjects = [
    {
      imgSrc: "src/assets/img/teste_api.webp",
      imgAlt: "img",
      title: {
        text: "Teste de API com Cypress",
        dataI18n: "test_api",
      },
      description: {
        text: "Workflow de testes contínuos em Cypress de API no Github Actions",
        dataI18n: "desc_work",
      },
      techUsed: "Cypress, JavaScript, Node.js",
      link: {
        href: "https://github.com/ErictonFelicidade86/Testando-API-com-Cypress",
        tooltip: "Github",
      },
    },
    {
      imgSrc: "src/assets/img/portfolio.png",
      imgAlt: "img",
      title: {
        text: "Meu Portfólio",
        dataI18n: "my_portfolio",
      },
      description: {
        text: "Meu portfólio é uma aplicação interativa desenvolvida com HTML5, CSS3 e JavaScript, projetada para apresentar minhas habilidades, projetos e experiência profissional de forma criativa e funcional.",
        dataI18n: "desc_work_2",
      },
      techUsed: "HTML5, CSS3, JavaScript, Vercel",
      link: {
        href: "https://github.com/ErictonFelicidade86/portfolio",
        tooltip: "Github",
      },
    },
];

const portfolioContainer = document.getElementById("portfolio-container");

portfolioProjects.forEach((project) => {
  // Cria o contêiner principal do projeto
  const portfolioItem = document.createElement("div");
  portfolioItem.className = "tab-item portfolio-item";

  // Cria a imagem
  const workImg = document.createElement("div");
  workImg.className = "work-img";
  const img = document.createElement("img");
  img.src = project.imgSrc;
  img.alt = project.imgAlt;
  workImg.appendChild(img);

  // Cria a seção de informações do projeto
  const workInfo = document.createElement("div");
  workInfo.className = "work-info";

  const title = document.createElement("h4");
  title.setAttribute("data-i18n", project.title.dataI18n);
  title.textContent = project.title.text;

  const description = document.createElement("p");
  description.setAttribute("data-i18n", project.description.dataI18n);
  description.textContent = project.description.text;

  const techUsed = document.createElement("div");
  techUsed.className = "tech-used";
  techUsed.innerHTML = `<p>${project.techUsed}</p>`;

  // Cria o link do Github
  const portfolioIcon = document.createElement("div");
  portfolioIcon.className = "portfolio-icon work-icon";
  const link = document.createElement("a");
  link.href = project.link.href;
  link.target = "_blank";
  link.innerHTML = `
    <i class="bx bxl-github"></i>
    <span class="tooltip">${project.link.tooltip}</span>
  `;
  portfolioIcon.appendChild(link);

  // Junta todas as partes no contêiner principal
  workInfo.appendChild(title);
  workInfo.appendChild(description);
  workInfo.appendChild(techUsed);
  workInfo.appendChild(portfolioIcon);

  portfolioItem.appendChild(workImg);
  portfolioItem.appendChild(workInfo);

  portfolioContainer.appendChild(portfolioItem);
});
