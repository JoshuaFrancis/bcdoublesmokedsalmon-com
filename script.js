(() => {
  const nav = document.querySelector("[data-nav]");
  const revealItems = document.querySelectorAll(".reveal");

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  };

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-on");
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.18, rootMargin: "0px 0px -7% 0px" });

  revealItems.forEach((item) => io.observe(item));
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
