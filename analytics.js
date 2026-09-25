// Analytics for this site. Put the GA4 measurement ID below (format G-XXXXXXXXXX).
// While GA_ID is empty nothing loads and no network requests are made.
window.GA_ID = '';
(function () {
  var id = window.GA_ID;
  if (!id || !/^G-[A-Z0-9]{6,}$/.test(id)) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id);
})();
