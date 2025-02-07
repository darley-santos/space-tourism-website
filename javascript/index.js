document.addEventListener("DOMContentLoaded", function() {
    function highlightActiveLinks(selector, activeClass) {
        const links = document.querySelectorAll(selector);
        const currentPath = window.location.pathname;

        links.forEach(link => {
            if (link.getAttribute("href") && currentPath.includes(link.getAttribute("href"))) {
                link.classList.add(activeClass);
            }
        });
    }

    // Aplicar a lógica para diferentes seletores
    highlightActiveLinks(".navbar-list li a, .planets-nav ul li a", "active");
    highlightActiveLinks(".carousel-link", "actived");
    highlightActiveLinks(".CarouselLink", "clicked");
});
