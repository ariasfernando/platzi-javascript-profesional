const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function() {
  this.media.play();
}

MediaPlayer.prototype.pause = function() {
  this.media.pause();
}

//Escribir el método pause y exponer la propiedad paused para hacer funcionar el player.

const player = new MediaPlayer({ el: video });

button.onclick = () => {
  player.media.paused ? player.play() : player.pause();
}