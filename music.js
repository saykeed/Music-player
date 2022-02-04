


let tracks = ["Badboytimz", "chandelier", "Lilfrosh", "Wizkalipha", "Zinoleesky"];
let songIndex = 0;
let music = document.querySelector("audio");
let musicStatus = false;
let songTitle = document.querySelector("#top h1");
let totalTime;
let currentTime;
let getCurrentTime = document.querySelector("#current");
let getDuration = document.querySelector("#total");
let getSlider = document.querySelector("#upper");




// for the play and pause button
let playPause = (x) => {
  
  if (!musicStatus) {
   music.play();
    x.innerHTML = "pause_arrow";
 musicStatus = true;
  } else {
    music.pause();
    x.innerHTML = "play_arrow";
   musicStatus = false;
  }
}


// for the next button
let playNext = function () {
  songIndex++;
  if (songIndex > tracks.length - 1) {
    songIndex = 0;
    loadMusic(songIndex);
    music.play();
  } else {
    loadMusic(songIndex);
    music.play();
  }
  
}

// to play the previous music
let playPrev = function() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = tracks.length - 1;
    loadMusic(songIndex);
    music.play();
  } else {
    loadMusic(songIndex);
    music.play();
  }

}

// function that uodates the music progress
let updateProgess = function () {
  currentTime = music.currentTime.toFixed(0);
  let currentMin = Math.floor(currentTime/60);
  let currentSec = Math.floor(currentTime%60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`
  }
  getCurrentTime.innerText = `${currentMin}:${currentSec}`;
  updateDuration();
  updateSlider();
}

let updateDuration = () => {
  totalTime = music.duration.toFixed(0);
  let totalMin = Math.floor(totalTime / 60);
  let totalSec = Math.floor(totalTime % 60);
  if (totalSec < 10) {
    totalSec = `0${totalSec}`
  }
  getDuration.innerText = `${totalMin}:${totalSec}`;
}

 let updateSlider = () => {
   let percent = Math.floor(currentTime/totalTime * 100);
   getSlider.style.left = percent + "%";
 }

let loadMusic = function (x) {
 music.setAttribute("src", "audio/" + tracks[x]);
 songTitle.innerText = tracks[x];
 setInterval(() => {
   updateProgess();
   
 }, 1000)
 
 
}

  window.onload = loadMusic(songIndex);