document.addEventListener("DOMContentLoaded", () => {

  // Sticky Header
  const header = document.querySelector(".main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 50);
    });
  }

  // Hero Animation (only if hero exists)
  const hero = document.querySelector(".hero-section");
  if (hero) {
    hero.classList.add("fade-in");
  }

});
