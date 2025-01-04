const services = [
    {
      icon: "bx bx-code-alt icon",
      title: {
        text: "Desenvolvedor FULL Frontend",
        dataI18n: "title_frontend",
      },
      description: {
        text: `Tenho experiência no desenvolvimento de sites e aplicações web utilizando Angular, 
                JavaScript, TypeScript e SCSS, garantindo interfaces modernas e responsivas.`,
        dataI18n: "desc_frontend",
      },
    },
    {
      icon: "bx bx-bug-alt icon",
      title: {
        text: "Testes Automatizados de APIs",
        dataI18n: "title_automated_api",
      },
      description: {
        text: `Possuo experiência em testes manuais e automatizados, abrangendo usabilidade,
                performance, stress, funcionais e não funcionais. Utilizo ferramentas como
                Cypress, Robot Framework, Rest-Assured, Insomnia, Postman e K6, além de elaborar e documentar planos de teste.`,
        dataI18n: "desc_automated_api",
      },
    },
    {
      icon: "bx bx-food-menu icon",
      title: {
        text: "Testes Automatizados E2E",
        dataI18n: "title_e2e",
      },
      description: {
        text: `Realizo testes manuais e automatizados ponta a ponta, cobrindo usabilidade, performance, stress, 
                funcionais, não funcionais e exploratórios. Trabalho com ferramentas como 
                Cypress, Playwright e Robot Framework para garantir a qualidade total do produto.`,
        dataI18n: "desc_e2e",
      },
    },
];

const servicesContainer = document.getElementById("services-container");

services.forEach((service) => {
  // Criação do contêiner do serviço
  const serviceItem = document.createElement("div");
  serviceItem.classList.add("tab-item", "portfolio-item");

  // Criação do ícone
  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("portfolio-icon", "service-icon");
  const icon = document.createElement("i");
  icon.className = service.icon;
  iconWrapper.appendChild(icon);

  // Criação do título
  const title = document.createElement("h4");
  title.setAttribute("data-i18n", service.title.dataI18n);
  title.textContent = service.title.text;

  // Criação da descrição
  const description = document.createElement("p");
  description.setAttribute("data-i18n", service.description.dataI18n);
  description.textContent = service.description.text;

  // Adicionando elementos ao item do serviço
  serviceItem.append(iconWrapper, title, description);

  // Adicionando o item ao contêiner principal
  servicesContainer.appendChild(serviceItem);
});
