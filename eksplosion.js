document.addEventListener('DOMContentLoaded', function() {
    const blackholeVideo = document.getElementById('blackhole');
    const playBtn = document.getElementById('playBlackhole');
    const blackholeAudio = document.getElementById('blackhole-audio');
    let audioTimeout = null;

    // Play video (with sound) and schedule audio after 5s on button click
    playBtn.addEventListener('click', function() {
        blackholeVideo.muted = false;
        blackholeVideo.play();
        playBtn.style.display = 'none';

        if (audioTimeout) clearTimeout(audioTimeout);
        audioTimeout = setTimeout(() => {
            blackholeAudio.play();
        }, 5000);
    });

    // Redirect to index.html when video ends
    blackholeVideo.addEventListener('ended', function() {
        window.location.href = 'index.html';
    });

    // Pause and reset audio if video is paused
    blackholeVideo.addEventListener('pause', () => {
        if (audioTimeout) clearTimeout(audioTimeout);
        blackholeAudio.pause();
        blackholeAudio.currentTime = 0;
    });
});

    // Optional: Pause video when not visible
    function playIfVisible() {
        const rect = blackholeVideo.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Only play if not paused and button is hidden
            if (playBtn.style.display === 'none' && blackholeVideo.paused) {
                blackholeVideo.play();
            }
        } else {
            if (!blackholeVideo.paused) {
                blackholeVideo.pause();
            }
        }
    }

    document.getElementById('forside').addEventListener('scroll', playIfVisible);
    window.addEventListener('resize', playIfVisible);

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


