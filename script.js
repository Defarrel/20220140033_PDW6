function togglePlayPause(audioId) {
    var audio = document.getElementById(audioId);
    var button = document.querySelector(`#${audioId} + .audio-controls button`);
    var icon = button.querySelector('svg');

    if (audio.paused) {
        audio.play();
        icon.innerHTML = '<path fill="#ffffff" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; 
    } else {
        audio.pause();
        icon.innerHTML = '<path fill="#ffffff" d="M8 5v14l11-7z" />'; 
    }
}

var audio1 = document.getElementById('audio1');
var audio1Slider = document.getElementById('audio1-slider');
var audio1SliderValue = document.getElementById('audio1-slider-value');

audio1.addEventListener('timeupdate', function() {
    var currentTime = audio1.currentTime;
    var duration = audio1.duration;
    var progress = (currentTime / duration) * 100;
    audio1Slider.value = progress;
    
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    audio1SliderValue.innerHTML = minutes + ":" + seconds;
});

audio1Slider.addEventListener('input', function() {
    var progress = audio1Slider.value;
    var duration = audio1.duration;
    var currentTime = (progress / 100) * duration;
    audio1.currentTime = currentTime;
});

var audio2 = document.getElementById('audio2');
var audio2Slider = document.getElementById('audio2-slider');
var audio2SliderValue = document.getElementById('audio2-slider-value');

audio2.addEventListener('timeupdate', function() {
    var currentTime = audio2.currentTime;
    var duration = audio2.duration;
    var progress = (currentTime / duration) * 100;
    audio2Slider.value = progress;
    
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    audio2SliderValue.innerHTML = minutes + ":" + seconds;
});

audio2Slider.addEventListener('input', function() {
    var progress = audio2Slider.value;
    var duration = audio2.duration;
    var currentTime = (progress / 100) * duration;
    audio2.currentTime = currentTime;
});

function showSwal() {
    Swal.fire({
        title: "Terima Kasih!",
        text: "Ini adalah section video",
        icon: "success"
    });
}

function showSwal1() {
    Swal.fire({
        title: "Terima Kasih!",
        text: "Ini adalah section foto",
        icon: "success"
    });
}

function showSwal2() {
    Swal.fire({
        title: "Terima Kasih!",
        text: "Ini adalah section audio",
        icon: "success"
    });
}

