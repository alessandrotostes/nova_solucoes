// galeria.js
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightboxModal = new bootstrap.Modal(
    document.getElementById("lightboxModal")
  );
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxModalLabel = document.getElementById("lightboxModalLabel");

  // Filtragem da Galeria
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        item.classList.remove("show"); // Primeiro remove a classe show para re-acionar o AOS
        item.style.display = "none"; // Esconde para o AOS funcionar corretamente ao re-mostrar

        if (filter === "all" || item.getAttribute("data-category") === filter) {
          // Um pequeno delay para garantir que o item está "none" antes de mostrar
          setTimeout(() => {
            item.style.display = "block";
            item.classList.add("show");
            // Re-inicializar AOS para este item se necessário ou garantir que a animação ocorra
            // AOS.refreshHard(); // Pode ser muito pesado, verificar necessidade
          }, 50);
        }
      });
    });
  });

  // Funcionalidade Lightbox com Bootstrap Modal
  document.querySelectorAll(".gallery-image").forEach((image) => {
    image.addEventListener("click", function () {
      const itemCard = this.closest(".card");
      const title = itemCard.querySelector(".card-title").textContent;
      lightboxImage.src = this.src;
      lightboxModalLabel.textContent = title || "Visualização do Projeto";
      lightboxModal.show();
    });
  });

  // Ativar o filtro "Todas" inicialmente para mostrar todos os itens
  const initialActiveFilter = document.querySelector(
    '.filter-btn[data-filter="all"]'
  );
  if (initialActiveFilter) {
    // Simula um clique para aplicar o filtro e as animações iniciais
    // É importante que os itens estejam inicialmente com display:none ou similar no CSS
    // para que o AOS funcione na primeira carga com o filtro.
    galleryItems.forEach((item) => (item.style.display = "none")); // Garante que estão escondidos
    initialActiveFilter.click();
  }
});
