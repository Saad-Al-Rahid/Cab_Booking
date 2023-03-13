let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList[this.window.scrollY > 400 ? "add" : "remove"]("active");
});
