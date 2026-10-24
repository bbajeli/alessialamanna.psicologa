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
