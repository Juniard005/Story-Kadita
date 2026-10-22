const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const body = document.body;

// Toggle menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("show");
  body.classList.toggle("menu-open");
});

// Close menu when clicking link
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    menu.classList.remove("show");
    body.classList.remove("menu-open");
  });
});

// Close menu when clicking overlay
menu.addEventListener("click", (e) => {
  if (e.target === menu) {
    menuToggle.classList.remove("active");
    menu.classList.remove("show");
    body.classList.remove("menu-open");
  }
});
