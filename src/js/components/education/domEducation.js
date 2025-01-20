const educationList = [
    {
      year: "2024 - Andamento",
      course: "MBA em Gestão da Qualidade em Software",
      degree: "Pós-Graduação",
      institution: "Faculdade Venda Nova do Imigrante - FAVENI",
      dataI18n: {
        year: "status_progress",
        course: "course_pos",
        degree: "title_pos_gradu",
        institution: "faveni",
      },
    },
    {
      year: "2018 - 2021 - Concluída",
      course: "Sistema de Informação",
      degree: "Graduação",
      institution: "Centro Universitário do Norte - UNINORTE",
      dataI18n: {
        year: "completed",
        course: "course_grad",
        degree: "title_gradu",
        institution: "uninorte",
      },
    },
    {
      year: "2025 - Andamento",
      course: "Testes de Aplicações Modernas com Cypress",
      degree: "Curso",
      institution: "Udemy",
      dataI18n: {
        year: "status_progress_2",
        course: "title_desc_course_10",
        degree: "title_course",
      },
    },
    {
      year: "2025 - Concluído",
      course: "Automação Web - Cypress e Cucumber",
      degree: "Curso",
      institution: "Udemy",
      dataI18n: {
        year: "course_completed",
        course: "title_desc_course_9",
        degree: "title_course",
      },
    },
    {
      year: "2025 - Concluído",
      course: "Testes End-To-End com Cypress",
      degree: "Curso",
      institution: "Udemy",
      dataI18n: {
        year: "course_completed",
        course: "title_desc_course_8",
        degree: "title_course",
      },
    },
    {
      year: "2024 - Concluído",
      course: "Dual Experience com Cypress e CodeceptJS",
      degree: "Curso",
      institution: "Udemy",
      dataI18n: {
        year: "course_completed_4",
        course: "title_desc_course_4",
        degree: "title_course",
      },
    },
    {
      year: "2024 - Concluído",
      course: "Testes Contínuo em Cypress no Github Actions",
      degree: "Curso",
      institution: "Udemy",
      dataI18n: {
        year: "course_completed_4",
        course: "title_desc_course_2",
        degree: "title_course",
      },
    },
    {
      year: "2024 - Concluído",
      course: "Testando API Rest com Rest-Assured",
      degree: "Curso",
      institution: "Udemy",
      dataI18n: {
        year: "course_completed_4",
        course: "title_desc_course_3",
        degree: "title_course",
      },
    },
    {
      year: "2024 - Concluído",
      course: "Playwright eXpress",
      degree: "Curso",
      institution: "Udemy",
      dataI18n: {
        year: "course_completed_4",
      }
    },
    {
      year: "2023",
      course: "Testando API REST com MongoDb e RabbitMQ em Cypress",
      degree: "Curso",
      institution: "Udemy",
      dataI18n: {
        year: "course_completed_3",
        course: "title_desc_course_5",
        degree: "title_course",
      },
    },
    {
      year: "2022 - Concluído",
      course: "Teste de Software",
      degree: "Curso",
      institution: "Gokurso",
      dataI18n: {
        year: "course_completed_2",
        course: "title_desc_course_6",
        degree: "title_course",
      },
    },
    {
      year: "2022 - Concluído",
      course: "Javacript para QA",
      degree: "Curso",
      institution: "QAxperience",
      dataI18n: {
        year: "course_completed_2",
        course: "title_desc_course_7",
        degree: "title_course",
      },
    },
];

const educationContainer = document.getElementById("education-container");

educationList.forEach((item) => {
  const educationItem = document.createElement("div");
  educationItem.className = "tab-item resume-item";

  educationItem.innerHTML = `
    <h4 data-i18n="${item.dataI18n?.year || ''}">${item.year}</h4>
    <h4 data-i18n="${item.dataI18n?.course || ''}">${item.course}</h4>
    <h4 data-i18n="${item.dataI18n?.degree || ''}">${item.degree}</h4>
    <p data-i18n="${item.dataI18n?.institution || ''}">${item.institution}</p>
  `;

  educationContainer.appendChild(educationItem);
});
