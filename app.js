// E1 = Low E on 1st String
// A2 = Low A on 2nd String
// D3 = Low d 3rd string...

const audioFiles = [...document.querySelectorAll("audio")];
const [e1, a2, d3, g4] = audioFiles;
const playBtns = [...document.querySelectorAll(".play-btn")];

audioFiles.forEach((file) => (file.loop = "true"));

for (let btn of playBtns) {
  btn.addEventListener("click", function () {
    if (btn.id === "e-sound") {
      this.classList.toggle("play-btn");
      this.classList.toggle("pause-btn");
      togglePlay(e1);
    } else if (btn.id === "a-sound") {
      this.classList.toggle("play-btn");
      this.classList.toggle("pause-btn");
      togglePlay(a2);
    } else if (btn.id === "d-sound") {
      this.classList.toggle("play-btn");
      this.classList.toggle("pause-btn");
      togglePlay(d3);
    } else if (btn.id === "g-sound") {
      this.classList.toggle("play-btn");
      this.classList.toggle("pause-btn");
      togglePlay(g4);
    }
  });
}

function togglePlay(audio) {
  return audio.paused ? audio.play() : audio.pause();
}
