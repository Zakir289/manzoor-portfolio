(function () {
  var placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  var activePage = placeholder.getAttribute('data-active');

  fetch('partials/nav.html')
    .then(function (res) { return res.text(); })
    .then(function (html) {
      placeholder.outerHTML = html;

      if (activePage) {
        var link = document.querySelector('.nav__link[data-nav="' + activePage + '"]');
        if (link) link.classList.add('nav__link--active');
      }
    });
})();
