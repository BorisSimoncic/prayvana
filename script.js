(function () {
  var heroBg = document.getElementById('heroBg');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      heroBg.style.transform = 'translateY(' + window.scrollY * 0.18 + 'px)';
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  var revealTargets = document.querySelectorAll('[data-reveal]');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(function (el) { observer.observe(el); });
})();
