    // tager fat i knappen
    const stjernehobknap = document.querySelector("#stjernehobBtn");
    const supernovaknap = document.querySelector("#supernovaBtn");
    const taageknap = document.querySelector("#taageBtn");
    const stjernemotion = document.getElementById("stjernemotion");

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
        const supernovaTaage = document.getElementById("supernovataageknap");
    
        btn.addEventListener("click", function () {
            videoContainer.style.display = "block"; // viser videoen
            kryds.style.display = "block"; // viser krydset
            stjernehobknap.style.display = "none"; // skjuler knappen
        });
    
    //når man klikker på krydset forsvinder både video,stjernehob og krydset
        kryds.addEventListener("click", function () {
            videoContainer.style.display = "none"; // skjuler videoen
            kryds.style.display = "none"; // skjuler krydset
            supernovaTaage.style.display = "block"; // vis nye knapper + videoer
            stjernemotion.style.display = "flex"; // gør container synlig

             // Lad browseren registrere ændringen
     // Fade knapper og videoer
     setTimeout(() => {
        supernovaknap.style.opacity = "1";
        taageknap.style.opacity = "1";
    }, 3000); // lille delay for fade-
    
        setTimeout(() => {
        stjernemotion.style.opacity = "1";
    }, 100); // lille delay for fade-effekt
    
});
    });

    document.addEventListener("click", function () {
        const lyd = document.querySelector("audio");
        lyd.play();
    });
