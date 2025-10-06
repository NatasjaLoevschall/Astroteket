// tager fat i knappen
const stjernehobknap = document.querySelector("#stjernehobBtn");

window.onload = function() {
    // Fade ind på knap
    setTimeout(() => { 
      stjernehobknap.style.opacity = 1;
    }, 3500); // 0,5 sekund
}

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("stjernehobBtn");
    const videoContainer = document.getElementById("motion1");

    btn.addEventListener("click", function () {
        if (videoContainer.style.display === "none") {
            videoContainer.style.display = "block";
        } else {
            videoContainer.style.display = "none";
        }
    });
});