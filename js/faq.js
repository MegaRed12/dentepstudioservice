document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach((button, index) => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');

      // Actualizar aria-expanded para accesibilidad
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
    });

    // Abrir la primera pregunta por defecto
    if (index === 0) {
      button.parentElement.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
