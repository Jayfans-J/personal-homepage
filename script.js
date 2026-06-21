window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const navLinks = Array.from(document.querySelectorAll(".nav a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updateActiveLink = () => {
    const current = sections
      .filter((section) => section.getBoundingClientRect().top < 140)
      .at(-1);

    navLinks.forEach((link) => {
      link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
});
