async function loadComponent(id, file, callback) {
  const response = await fetch(file);
  const element = document.getElementById(id);

  if (element) {
    element.innerHTML = await response.text();
    if (callback) callback();
  }

  const body = document.querySelector("body");
  body.style.display = "block";
}

loadComponent("header", "../components/header.html");
loadComponent("hero", "../components/hero.html");
loadComponent("sedacion", "../components/sedacion.html");
loadComponent("sedacionC", "../components/sedacionC.html");
loadComponent("sedacionInc", "../components/sedacionInc.html");
loadComponent("objetivo", "../components/objetivo.html");
loadComponent("CasosDeExito", "../components/exito.html");
loadComponent("nosotros", "../components/nosotros.html");
loadComponent("preguntas", "../components/preguntas.html", setupFAQ);
loadComponent("testimonios", "../components/testimonios.html");
loadComponent("ubicacion", "../components/ubicacion.html");
loadComponent("footer", "../components/footer.html");

function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length === 0) return;

  // Abre el primer ítem
  faqItems[0].classList.add("active");
  faqItems[0].querySelector(".faq-question").setAttribute("aria-expanded", "true");

  // Evento de clic para cada pregunta
  faqItems.forEach(item => {
    const questionButton = item.querySelector(".faq-question");

    questionButton.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        questionButton.setAttribute("aria-expanded", "true");
      }
    });
  });
}
