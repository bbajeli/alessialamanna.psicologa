// Menu su telefono: apre e chiude l'elenco dei link
var toggle = document.querySelector('.nav-toggle');
var menu = document.getElementById('menu');
toggle.addEventListener('click', function () {
  var open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Modulo di contatto: GitHub Pages non ha un server, quindi il modulo
// prepara un'email già compilata nell'app di posta di chi scrive.
var EMAIL = 'dott.lamanna.psicologa@gmail.com';

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var f = e.target;
  var corpo =
    'Nome e cognome: ' + f.nome.value + '\n' +
    'Email: ' + f.email.value + '\n' +
    'Telefono: ' + f.telefono.value + '\n' +
    'Richiesta per: ' + f.per_chi.value + '\n' +
    'Modalità preferita: ' + f.modalita.value + '\n\n' +
    f.messaggio.value;
  window.location.href =
    'mailto:' + EMAIL +
    '?subject=' + encodeURIComponent('Richiesta di prima consulenza') +
    '&body=' + encodeURIComponent(corpo);
});

// Intestazione: una leggera ombra quando si scorre la pagina
var header = document.querySelector('.site-header');
function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Scorrimento: gli elementi compaiono man mano che entrano nello schermo.
// Se qualcosa non funziona, il contenuto resta visibile.
try {
  var items = document.querySelectorAll(
    '.hero > *, .section > :not(.cards):not(.steps):not(.faq), .cards article, .steps li, .faq details'
  );
  if ('IntersectionObserver' in window && items.length) {
    document.documentElement.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) {
      el.classList.add('reveal');
      var group = el.parentNode.querySelectorAll(':scope > .reveal');
      var i = Array.prototype.indexOf.call(group, el);
      if (el.matches('.cards article, .steps li, .faq details')) {
        el.style.transitionDelay = Math.min(i, 4) * 90 + 'ms';
      }
      io.observe(el);
    });
  }
} catch (e) {
  document.documentElement.classList.remove('js');
}
