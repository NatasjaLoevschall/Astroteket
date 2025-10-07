document.addEventListener('DOMContentLoaded', function() {
    const blackholeVideo = document.getElementById('blackhole');
    const playBtn = document.getElementById('playBlackhole');

    playBtn.addEventListener('click', function() {
        blackholeVideo.muted = false; // Play with sound
        blackholeVideo.play();
        playBtn.style.display = 'none'; // Hide button after play
    });

    // Redirect to index.html when video ends
    blackholeVideo.addEventListener('ended', function() {
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blackholeVideo = document.getElementById('blackhole');
    let hasPlayed = false;

    function playIfAtBottom() {
        // Check if user is at (or very near) the bottom of the page
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;
        const atBottom = (scrollY + windowHeight) >= (bodyHeight - 2); // 2px tolerance

        if (atBottom && !hasPlayed) {
            blackholeVideo.play();
            hasPlayed = true;
        } else if (!atBottom && !blackholeVideo.paused) {
            blackholeVideo.pause();
            hasPlayed = false;
        }
    }

    window.addEventListener('scroll', playIfAtBottom);
    window.addEventListener('resize', playIfAtBottom);
    playIfAtBottom();
});


 

