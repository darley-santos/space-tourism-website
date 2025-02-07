document.addEventListener("DOMContentLoaded", function() {
    function highlightActiveLinks(selector, activeClass) {
        const links = document.querySelectorAll(selector); 
        const currentPath = window.location.pathname;

        links.forEach(link => {
            const listItem = link.parentElement; // Pega o item de lista (li)

            // Remove a classe ativa do item de lista antes de adicionar novamente
            listItem.classList.remove(activeClass);

            // Verifica se o link corresponde ao caminho atual
            if (link.getAttribute("href") && currentPath.includes(link.getAttribute("href"))) {
                listItem.classList.add(activeClass); // Adiciona a classe no item de lista
            }
        });
    }

    highlightActiveLinks(".navbar-list li a", "active"); // Para os links no menu de navegação
    highlightActiveLinks(".carousel-link", "actived");   // Para os links do carrossel
    highlightActiveLinks(".CarouselLink", "clicked");    // Para outros links do carrossel
});
