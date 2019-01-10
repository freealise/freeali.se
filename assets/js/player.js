var tracks = new Array();
tracks[0] = "/assets/mp3/nightingale_bird.mp3";
tracks[1] = "/assets/mp3/skylark_bird.mp3";

var titles = new Array();
titles[0] = "Nightingale";
titles[1] = "Skylark";

var times = new Array();
times[0] = "3:59";
times[1] = "4:59";

for (var i=0; i<tracks.length; i++) {
    document.getElementById("track"+i).innerHTML = titles[i];
    document.getElementById("time"+i).innerHTML = times[i];
}

var playing = false;
var n = 0;
var move;
var seconds = 0;
var minutes = 0;
var width = 0;

var opened = false;
var video_opened = false;

var bar = document.getElementById('myBar');
var count = document.getElementById('timeCount');
var audio = document.getElementById('audio');
var playlist = document.getElementById('playlist');
var video = document.getElementById('video');

function newTrack() {
seconds = 0;
minutes = 0;
width = 0;
audio.src=tracks[n];
document.getElementsByClassName('currentTrack')[0].className='';
document.getElementById('track'+n).className='currentTrack';
}
function frame() {
    seconds=Math.floor(audio.currentTime);
    width=Math.round(seconds*100/Math.floor(audio.duration));
    bar.style.width = width + '%';
    minutes = Math.floor(seconds/60);
    seconds = seconds - minutes*60;
    if (seconds<10) {seconds = "0" + seconds;}
    count.innerHTML = minutes + ':' + seconds;
}
function play() {
    playing = true;
    audio.play();
    document.getElementById('player-icon').innerText='pause';
    move = setInterval(frame, 1000);
}
function pause() {
    playing = false;
    audio.pause();
    document.getElementById('player-icon').innerText='play_arrow';
    clearInterval(move);
}
function openPlaylist() {
    opened = true;
    playlist.style.display='block';
}
function closePlaylist() {
    opened = false;
    playlist.style.display='none';
}
function openVideo() {
    video_opened = true;
    video.style.display='block';
    video.src = 'https://www.youtube.com/embed/e80qhyovOnA?list=PL394CAi_eVZkqnaK5pigZRF91t-oBXXg4&listType=playlist&autoplay=1&controls=1&showinfo=1&modestbranding=1&rel=0&cc_lang_pref=en&cc_load_policy=1&fs=2';
    opened = false;
    playlist.style.display='none';
}
function closeVideo() {
    video_opened = false;
    video.style.display='none';
    video.src = 'about:blank';
    opened = true;
    playlist.style.display='block';
}
