const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScr = player.querySelectorAll('.fullScr');



function togglePlay() {
	// if (video.paused) {
	// 	video.play()
	// } else {
	// 	video.pause();
	// }
	let method = video.paused ? 'play' : 'pause';
	video[method]();
}
function updateButton () {
	let icon = this.paused ? '►' : '❚❚';
	toggle.textContent = icon;
}

function skip () {
	video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate () {
	video[this.name] = this.value;
}

function progressUpdate () {
	let percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function launchFullScreen() {
  if(video.requestFullScreen) {
    video.requestFullScreen();
  } else if(video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if(video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen();
  }
}

function newPosition(e) {
	console.log(e);
	let persantage = (e.offsetX * 100) / progress.offsetWidth;
	video.currentTime = persantage / video.duration;
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', progressUpdate);
video.addEventListener('dblclick', launchFullScreen); // при дабл клике разворачивает на весь экран, а обратно, там есть стандартная кнопка.  Сделать по даблклику обратно, не получается
//Еще не исправил

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach (range => range.addEventListener('change', rangeUpdate));
ranges.forEach (range => range.addEventListener('mousemove', rangeUpdate));
fullScr[0].addEventListener('click', launchFullScreen); 
progress.addEventListener ('click', newPosition);
// progress.addEventListener ('mousemove', newPosition);