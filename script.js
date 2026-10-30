const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const form = document.getElementById("enquiryForm");
const toast = document.getElementById("toast");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  toast.classList.add("show");
  form.reset();
  setTimeout(() => toast.classList.remove("show"), 3000);
});
