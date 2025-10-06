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
        const kryds = document.getElementById("kryds");
    
        btn.addEventListener("click", function () {
            videoContainer.style.display = "block"; // viser videoen
            kryds.style.display = "block"; // viser krydset
        });
    
    //når man klikker på krydset forsvinder både video,stjernehob og krydset
        kryds.addEventListener("click", function () {
            videoContainer.style.display = "none"; // skjuler videoen
            kryds.style.display = "none"; // skjuler krydset
            stjernehobknap.style.display = "none"; // skjuler knappen
        });
    });