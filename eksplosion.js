document.addEventListener('DOMContentLoaded', function() {
    const blackholeVideo = document.getElementById('blackhole');
    const blackholeAudio = document.getElementById('blackhole-audio');
    let hasPlayed = false;

    // Play video and sound when scrolled to bottom
    function playIfAtBottom() {
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

    // Play sound when video starts
    blackholeVideo.addEventListener('play', function() {
        blackholeAudio.play();
    });

    // Pause and reset audio if video is paused
    blackholeVideo.addEventListener('pause', function() {
        blackholeAudio.pause();
        blackholeAudio.currentTime = 0;
    });

    // Redirect to index.html when video ends
    blackholeVideo.addEventListener('ended', function() {
        window.location.href = 'index.html';
    });

    window.addEventListener('scroll', playIfAtBottom);
    window.addEventListener('resize', playIfAtBottom);
    playIfAtBottom();
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


 

