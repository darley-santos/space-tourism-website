document.addEventListener("DOMContentLoaded", function() {
    function highlightActiveLinks(selector, activeClass) {
        const links = document.querySelectorAll(selector); 
        const currentPath = window.location.pathname;

        links.forEach(link => {
            if (link.getAttribute("href") && currentPath.includes(link.getAttribute("href"))) {
                if (selector === ".navbar-list li a") {
                    const listItem = link.parentElement;
                    listItem.classList.add(activeClass);
                } else {
                    link.classList.add(activeClass);
                }
            }
        });
    }

    highlightActiveLinks(".navbar-list li a", "active");
    highlightActiveLinks(".carousel-link", "actived");
    highlightActiveLinks(".CarouselLink", "clicked");
});
