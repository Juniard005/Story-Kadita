const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const body = document.body;

// Bukan Ini Toggle menu Bangsat
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("show");
    body.classList.toggle("menu-open");
});

// Close menu dan rakit motor2 gak suka motor anjing
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        menu.classList.remove("show");
        body.classList.remove("menu-open");
    });
});

// Close menu ngentod
menu.addEventListener("click", (e) => {
    if (e.target === menu) {
        menuToggle.classList.remove("active");
        menu.classList.remove("show");
        body.classList.remove("menu-open");
    }
});