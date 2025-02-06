document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar-list li a, .planets-nav ul li a");
    const currentPagePath = window.location.pathname;
  
    links.forEach(function(link) {
      const linkPath = link.getAttribute("href");
  
      if (currentPagePath.includes(linkPath)) {
        link.parentElement.classList.add("active");
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const currentPathname = window.location.pathname; // Obtém o pathname da página atual
    
    const carouselLinks = document.querySelectorAll('.carousel-link');
    
    // Adiciona a classe "actived" ao link correspondente ao pathname atual
    carouselLinks.forEach(link => {
      if (link.getAttribute('href') === currentPathname) {
        link.classList.add('actived');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const currentPathname = window.location.pathname; // Obtém o pathname da página atual
    
    const carouselLinks = document.querySelectorAll('.CarouselLink');
    
    // Adiciona a classe "actived" ao link correspondente ao pathname atual
    carouselLinks.forEach(link => {
      if (link.getAttribute('href') === currentPathname) {
        link.classList.add('clicked');
      }
    });
  });
  