function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const tombol = document.querySelector(".menu-toggle");

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !tombol.contains(event.target)
    ) {
        menu.classList.remove("active");
    }
});