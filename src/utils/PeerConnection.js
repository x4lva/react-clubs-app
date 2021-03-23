export const addAudio = (stream) => {
    const videoGrid = document.getElementById("video-grid");
    const audio = document.createElement("video");
    audio.srcObject = stream;
    audio.controls = true;
    audio.muted = true;
    audio.play();
    videoGrid.appendChild(audio);
};
