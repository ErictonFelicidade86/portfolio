const homeContent = {
    introduction: [
      {
        tag: "h3",
        text: "Olá Eu Sou",
        dataI18n: "hello",
      },
      {
        tag: "h1",
        text: "Ericton Brito",
        dataI18n: "name",
      },
      {
        tag: "h3",
        text: "Analista de Teste QA",
        dataI18n: "profession",
      },
      {
        tag: "p",
        text: "Analista de Teste QA especializado em automação de testes com foco em APIs e testes E2E.",
        dataI18n: "description",
        className: "desc",
        strong: true,
      },
    ],
    buttons: [
      {
        tag: "a",
        text: "Baixar CV",
        dataI18n: "download_cv",
        href: "src/files/Ericton_Brito.pdf",
        className: "btn",
        download: "Curriculo_Ericton_Brito.pdf",
      },
    ],
    socialLinks: [
      {
        href: "https://github.com/ErictonFelicidade86",
        icon: "bx bxl-github",
        tooltip: "Github",
      },
      {
        href: "https://www.linkedin.com/in/ericton-brito-1b511b14b/",
        icon: "bx bxl-linkedin",
        tooltip: "Linkedin",
      },
      {
        href: "https://api.whatsapp.com/send/?phone=5592984660806&text&type=phone_number&app_absent=0",
        icon: "bx bxl-whatsapp",
        tooltip: "WhatsApp",
      },
    ],
};

const homeInfo = document.getElementById("home-info");

// Adiciona a introdução
homeContent.introduction.forEach((intro) => {
  const element = document.createElement(intro.tag);
  if (intro.dataI18n) element.setAttribute("data-i18n", intro.dataI18n);
  if (intro.className) element.classList.add(intro.className);

  if (intro.strong) {
    const strong = document.createElement("strong");
    strong.textContent = intro.text;
    element.appendChild(strong);
  } else {
    element.textContent = intro.text;
  }

  homeInfo.appendChild(element);
});

// Adiciona o botão de download
const btnSciWrapper = document.createElement("div");
btnSciWrapper.classList.add("btn-sci");

homeContent.buttons.forEach((button) => {
  const btn = document.createElement(button.tag);
  btn.className = button.className;
  btn.textContent = button.text;
  btn.setAttribute("data-i18n", button.dataI18n);
  btn.href = button.href;
  btn.download = button.download;
  btnSciWrapper.appendChild(btn);
});

// Adiciona os links sociais
const sciWrapper = document.createElement("div");
sciWrapper.classList.add("sci");

homeContent.socialLinks.forEach((link) => {
  const a = document.createElement("a");
  a.href = link.href;
  a.target = "_blank";

  const icon = document.createElement("i");
  icon.className = link.icon;

  const tooltip = document.createElement("span");
  tooltip.className = "tooltip";
  tooltip.textContent = link.tooltip;

  a.appendChild(icon);
  a.appendChild(tooltip);
  sciWrapper.appendChild(a);
});

btnSciWrapper.appendChild(sciWrapper);
homeInfo.appendChild(btnSciWrapper);

  