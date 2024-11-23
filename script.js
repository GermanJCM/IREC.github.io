document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    // Función para manejar las transiciones
    const handleVisibility = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    };

    // Detectar el desplazamiento (scroll)
    window.addEventListener("scroll", handleVisibility);

    // Ejecutar al cargar la página para que las secciones visibles desde el inicio se muestren
    handleVisibility();
});
