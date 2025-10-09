const sorthulknap = document.getElementById("sorthulBtn");
const sorthulvideo = document.getElementById("motion2");
const kryds = document.getElementById("kryds2");
const tilbageContainer = document.getElementById("tilbage");
const tilbageKnap = document.querySelector("#tilbage a");
const sorthul = document.getElementById("sorthul");
const lys = document.getElementById("lys");

window.onload = function() {
  // Fade ind på "SORT HUL"-knap
  setTimeout(() => {
    sorthulknap.style.opacity = 1;
  }, 400);
};

// Når man klikker på knappen vises videoen og krydset, og knappen skjules
sorthulknap.addEventListener("click", function () {
  kryds.style.display = "block"; // viser krydset
  sorthulvideo.style.display = "block"; // viser videoen
  sorthulknap.style.display = "none"; // skjuler knappen
});

// Når man klikker på kryds
kryds.addEventListener("click", function () {
  kryds.style.display = "none"; // skjuler krydset
  sorthulvideo.style.display = "none"; // skjuler videoen

  // vis containeren
  tilbageContainer.style.display = "block";

  // fade selve linket ind
  requestAnimationFrame(() => {
  tilbageKnap.classList.add("visible");
  });
});

tilbageKnap.addEventListener("click", function () {
  tilbageKnap.style.display = "none"; // skjuler knappen
  sorthul.style.display = "none"; // skjuler 
  lys.style.display = "block"; // viser lys video
});

// Når blackhole-videoen slutter → hop til ny side
lys.addEventListener("ended", function () {
window.location.href = "index.html"; // ← ændr dette til din næste side
    });

