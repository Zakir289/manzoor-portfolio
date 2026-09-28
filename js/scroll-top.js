(function () {
  var btn = document.querySelector('.scroll-top');
  if (!btn) return;

  function toggle() {
    if (window.scrollY > window.innerHeight * 0.8) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
