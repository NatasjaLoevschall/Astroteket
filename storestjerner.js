// tager fat i knappen
const stjernehobknap = document.querySelector("#stjernehobBtn");

window.onload = function() {
    // Fade ind på knap
    setTimeout(() => { 
      stjernehobknap.style.opacity = 1;
    }, 3500); // 0,5 sekund
}
