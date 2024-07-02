// Get references to buttons and the audio element
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const stopButton = document.getElementById('stop-btn');

// Play audio
playButton.addEventListener('click', () => {
    audioPlayer.play();
});

// Pause audio
pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});

// Stop audio
stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});
