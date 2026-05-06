// Sticky-nav background after small scroll.
(() => {
  const nav = document.querySelector('[data-nav]');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('is-stuck', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
