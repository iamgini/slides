var LAST_UPDATED = '2026-09-17';

window.addEventListener('load', function () {
  if (window.RevealSearch && window.Reveal) {
    Reveal.registerPlugin(RevealSearch);
  }

  var footer = document.createElement('div');
  footer.className = 'global-footer';
  footer.textContent = 'Last updated: ' + LAST_UPDATED;
  document.body.appendChild(footer);
});
