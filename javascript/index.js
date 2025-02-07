document.addEventListener("DOMContentLoaded", function() {
    function highlightActiveLinks(selector, activeClass, isNav) {
        const links = document.querySelectorAll(selector);
        const currentPath = window.location.pathname;

        links.forEach(link => {
            if (link.getAttribute("href") && currentPath.includes(link.getAttribute("href"))) {
                // Para a navegação, adicione a classe no item de lista (<li>)
                if (isNav) {
                    const listItem = link.parentElement;
                    listItem.classList.add(activeClass);
                } else {
                    // Para o carrossel, adicione a classe diretamente no link
                    link.classList.add(activeClass);
                }
            }
        });
    }

    // Chamada para o menu de navegação
    highlightActiveLinks(".navbar-list li a", "active", true); // Para a navegação, usa o <li>

    // Chamada para os links dos carrosséis
    highlightActiveLinks(".carousel-link", "actived", false); // Para o carrossel 1
    highlightActiveLinks(".CarouselLink", "clicked", false); // Para o carrossel 2
});
