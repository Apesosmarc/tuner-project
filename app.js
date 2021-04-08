const e = document.querySelector("#e-sound");
const a = document.querySelector("#a-sound");
const d = document.querySelector("#d-sound");
const g = document.querySelector("#g-sound");

const e1 = document.querySelector("#e1");
const a2 = document.querySelector("#a2");
const d3 = document.querySelector("#d3");
const g4 = document.querySelector("#g4");

const playBtns = [...document.querySelectorAll(".play-btn")];

for (let btn of playBtns) {
  btn.addEventListener("click", function () {
    if (btn.id === "e-sound") {
      e1.loop = "true";
      togglePlay(e1);
    } else if (btn.id === "a-sound") {
      a2.loop = "true";
      togglePlay(a2);
    } else if (btn.id === "d-sound") {
      d3.loop = "true";
      togglePlay(d3);
    } else if (btn.id === "g-sound") {
      g4.loop = "true";
      togglePlay(g4);
    }
  });
}

// e.addEventListener("click", function () {
//   e.playAudio();
// });
// e.addEventListener("click", function () {
//   e.playAudio();
// });
// e.addEventListener("click", function () {
//   e.playAudio();
// });
// e.addEventListener("click", function () {
//   e.playAudio();
// });

function togglePlay(audio) {
  return audio.paused ? audio.play() : audio.pause();
}
