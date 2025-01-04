const experienceList = [
    {
      period: "2021 - 2024",
      role: "Analista de Teste QA",
      company: "Grupo ICTS",
      description: `Analista de Teste QA: Minha experiência em testes automatizados de API com Cypress, Robot, K6, JMeter,
      Insomnia e Swagger para documentação de API. Realização de testes automatizados no frontend usando
      Cypress e Playwright, além de testes manuais para aplicações mobile. Gerenciamento de falhas utilizando
      QASE, Trello e GitLab, com aplicação de metodologias ágeis (Scrum e Kanban) para otimização de
      processos.`,
      dataI18n: {
        role: "profession",
        company: "company",
        description: "job_desc_QA",
      },
    },
    {
      period: "2020 - 2021",
      role: "Estagiário",
      company: "Grupo ICTS",
      description: `Desenvolvimento web Frontend: Criação de interfaces responsivas com HTML5, CSS3, Javacript,
      Typescript e Angular 10, Linux. Execução de testes unitários durante o desenvolvimento da aplicação.`,
      dataI18n: {
        role: "intern",
        company: "company",
        description: "job_desc_intern_dev",
      },
    },
    {
      period: "2018 - 2020",
      role: "Estagiário",
      company: "INDT",
      description: `Desenvolvimento web Frontend: Criação de interfaces responsivas com HTML5, CSS3, Javacript,
      Typescript e Angular 6, Linux. Execução de testes unitários durante o desenvolvimento da aplicação.
      Teste de Software: Execução de testes manuais e documentação detalhada de não
      conformidades. Colaboração com equipes de desenvolvimento para definição de cenários de teste.`,
      dataI18n: {
        role: "intern",
        description: "job_desc_intern_dev_test",
      },
    },
    {
      period: "2018 - 2028",
      role: "Programador",
      company: "Tarkuss",
      description: `Desenvolvimento Frontend: Suporte no desenvolvimento de interfaces frontend utilizando
      Bootstrap. Criação de layouts responsivos e otimização de desempenho em aplicações web.`,
      dataI18n: {
        role: "programmer",
        description: "job_desc_intern_programmer",
      },
    },
];

const experienceContainer = document.getElementById("experience-container");

experienceList.forEach((item) => {
  const experienceItem = document.createElement("div");
  experienceItem.className = "tab-item resume-item";

  experienceItem.innerHTML = `
    <h4>${item.period}</h4>
    <h4 data-i18n="${item.dataI18n.role || ''}">${item.role}</h4>
    <h4 data-i18n="${item.dataI18n.company || ''}">${item.company}</h4>
    <p data-i18n="${item.dataI18n.description || ''}">${item.description}</p>
  `;

  experienceContainer.appendChild(experienceItem);
});

  