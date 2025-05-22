// main.js

document.addEventListener("DOMContentLoaded", function () {
  // Inicializar AOS (Animate On Scroll)
  AOS.init({
    duration: 800, // Duração das animações em ms
    once: true, // Se a animação deve acontecer apenas uma vez
    offset: 50, // Offset (em px) em relação ao ponto original de trigger
  });

  // Efeito de scroll na Navbar
  const mainNavbar = document.getElementById("mainNavbar");
  if (mainNavbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        mainNavbar.classList.add("scrolled");
      } else {
        mainNavbar.classList.remove("scrolled");
      }
    });
  }

  // Atualizar ano no rodapé
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  const currentYearGallerySpan = document.getElementById(
    "current-year-gallery"
  );
  if (currentYearGallerySpan) {
    currentYearGallerySpan.textContent = new Date().getFullYear();
  }
  const currentYearInfoSpan = document.getElementById("current-year-info");
  if (currentYearInfoSpan) {
    currentYearInfoSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll para links internos (opcional, Bootstrap 5 já tem um bom scrollspy)
  // Se quiser um controle mais fino ou animações diferentes, pode adicionar aqui.

  // Lógica para fechar o menu mobile ao clicar num link (se o Bootstrap não fizer por padrão)
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Verifica se o menu está colapsado (visível em mobile)
      if (
        navbarCollapse &&
        navbarCollapse.classList.contains("show") &&
        navbarToggler &&
        getComputedStyle(navbarToggler).display !== "none"
      ) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false, // Para não reabrir se já estiver a fechar
        });
        bsCollapse.hide();
      }
    });
  });
});
