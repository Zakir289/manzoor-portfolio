(function () {
  var section = document.querySelector('.reviews');
  if (!section) return;

  if (!('IntersectionObserver' in window)) {
    section.classList.add('is-inview');
    return;
  }

  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      section.classList.toggle('is-inview', entry.isIntersecting);
    });
  }, { threshold: 0.25 }).observe(section.querySelector('.reviews__viewport'));
})();
