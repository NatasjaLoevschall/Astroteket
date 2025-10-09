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
            supernovaknap.style.display = "none"; // skjuler Supernova-knap
            taageknap.style.display = "block"; // viser kun Tåge-knap

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

    document.addEventListener("DOMContentLoaded", function () {
        const supernovaBtn = document.getElementById("supernovaBtn");
        const taageBtn = document.getElementById("taageBtn");
        const supernovavideo = document.getElementById("supernovavideo");
        const taagevideo = document.getElementById("taagevideo");

    
        // Når man klikker på SUPERNOVA
        supernovaBtn.addEventListener("click", function () {
            supernovavideo.style.display = "block";
            setTimeout(() => {
                supernovavideo.classList.add("show");
            }, 100);
        });
    
        // Når man klikker på TÅGE
        taageBtn.addEventListener("click", function () {
            taagevideo.style.display = "block";
            setTimeout(() => {
                taagevideo.classList.add("show");
            }, 100);
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Find krydsene
        const krydsSupernova = document.getElementById("krydsSupernova");
        const krydsTaage = document.getElementById("krydsTaage");
        const scrollEl = document.getElementById("scroll");
    
        krydsSupernova.addEventListener("click", function () {
            document.getElementById("supernovavideo").style.display = "none";
            document.getElementById("supernovataageknap").style.display = "none";
            document.getElementById("andenVideo").style.display = "block"; // start usynlig
            scrollEl.style.display = "block";
        });
        
       
        krydsTaage.addEventListener("click", function () {
            document.getElementById("taagevideo").style.display = "none";
        });
    });
   
    krydsTaage.addEventListener("click", function () {
        supernovaBtn.style.display = "block"; // skjuler Supernova-knap    
        supernovaBtn.style.opacity = 0; // start usynlig

        setTimeout(() => {
            supernovaBtn.style.transition = "opacity 0"; // fade effekt
            supernovaBtn.style.opacity = 1; // fade ind
        }, 300); // lille delay så browser registrerer ændringen
    
});

//Knapper efter man har fået lov til at scrolle
// ---- Fade ind på overskrift og knap når #andenVideo bliver synlig ----
const andenVideo = document.getElementById("andenVideo");
const overskrift = document.getElementById("eksplosion");
const knap = document.getElementById("detonerBtn");

// Gør klar (skjult fra start)
overskrift.style.opacity = 0;
knap.style.opacity = 0;

// Brug IntersectionObserver til at opdage når man scroller ned
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Når #andenVideo er synlig, fade elementerne ind
      setTimeout(() => { overskrift.style.opacity = 1; }, 200);
      setTimeout(() => { knap.style.opacity = 1; }, 700);
    }
  });
}, {
  threshold: 0.1 // hvor meget af elementet skal være synligt før det tæller (10%)
});

// Sæt observatøren på #andenVideo
observer.observe(andenVideo);

document.addEventListener("DOMContentLoaded", function () {
  const detonerBtn = document.getElementById("detonerBtn");
  const blackhole = document.getElementById("blackhole");
  const musik = document.querySelector("audio"); // <-- tilføjet!

  detonerBtn.addEventListener("click", function () {
    document.getElementById("eksplosion").style.display = "none"; // skjuler overskrift
    detonerBtn.style.display = "none"; // skjuler knappen
    blackhole.classList.add("show");
    blackhole.play(); // starter videoen

        // 🎬 Når blackhole-videoen slutter → hop til ny side
    blackhole.addEventListener("ended", function () {
      window.location.href = "nextpage.html"; // ← ændr dette til din næste side
    });

  });
});

