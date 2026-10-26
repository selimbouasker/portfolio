// Smooth in-page scrolling for the header nav (CSS scroll-behavior covers
// modern browsers; this keeps focus landing on the right section for a11y).
document.querySelectorAll('.head-nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
});
