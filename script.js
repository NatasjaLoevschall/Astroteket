// tager fat i overskriften
const overskrift = document.getElementById("stjernensliv");
// tager fat i knappen
const knap = document.querySelector("#forside a");

window.onload = function() {
  // Fade ind på overskriften
  setTimeout(() => {
    overskrift.style.opacity = 1;
  }, 500); // 0,5 sekund

  // Fade ind på knappen lidt senere
  setTimeout(() => {
    knap.style.opacity = 1;
  }, 1500); // 1,5 sekund
};

  window.addEventListener('click', () => {
    const intro = document.getElementById('intro');
    intro.muted = false;
    intro.play();
  });