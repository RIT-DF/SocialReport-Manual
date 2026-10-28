/* Links para fora do manual abrem em nova aba, sem dar à página aberta acesso a esta. */
(function () {
  'use strict';
  function marcar() {
    Array.prototype.forEach.call(document.querySelectorAll('a[href]'), function (a) {
      if (a.classList.contains('zoom-imagem')) return;
      var url;
      try { url = new URL(a.getAttribute('href'), location.href); } catch (e) { return; }
      if (!/^https?:$/.test(url.protocol) || url.host === location.host) return;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', marcar);
  else marcar();
})();
