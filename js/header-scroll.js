document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const header = document.getElementById('header');
  const menu = document.getElementById('menu');
  const iconMenu = document.getElementById('icon-menu');

  // Scroll: ocultar o mostrar header
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolldown: oculta header
      header.style.top = "-80px";
    } else {
      // Scrollup: muestra header
      header.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Toggle menú móvil
  iconMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Opcional: permitir toggle con tecla Enter (accesibilidad)
  iconMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menu.classList.toggle('show');
    }
  });

  // Cerrar menú al hacer click en un enlace (mejora UX)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      }
    });
  });
});



