const aboutContent = [
    {
      tag: "h2",
      className: "title",
      text: "Sobre",
      dataI18n: "about",
    },
    {
      tag: "h3",
      text: "Analista de Teste QA!",
      dataI18n: "job_title",
    },
    {
      tag: "p",
      className: "desc",
      text: `Tenho experiência em garantia da qualidade de software, 
              com foco em testes automatizados de API usando Cypress, Robot Framework e K6. 
              Também implemento fluxos completos de testes E2E com Cypress e Playwright, 
              assegurando desempenho e funcionalidade integrada. Sou proativo, organizado e 
              solucionador de problemas, aplicando metodologias ágeis para planejar e colaborar com o time de 
              desenvolvimento.`,
      dataI18n: "experience_desc",
    },
];

const aboutInfo = document.getElementById("about-info");

aboutContent.forEach((content) => {
  const element = document.createElement(content.tag);
  
  if (content.className) {
    element.className = content.className;
  }
  
  if (content.dataI18n) {
    element.setAttribute("data-i18n", content.dataI18n);
  }
  
  element.textContent = content.text;
  aboutInfo.appendChild(element);
});
