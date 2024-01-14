const playPause = document.getElementById('playPause');
const videoFa = document.getElementById('videoFa');
const startPause = document.querySelectorAll('.startPause');
const playPausebtns = document.querySelectorAll('.playPausebtns');
playPause.addEventListener('click', () => {
    playPausebtns.forEach(element => {
        element.classList.toggle('d-none');
    });
    startPause.forEach(ele => {
        ele.classList.toggle('d-none')
    })
    videoFa.classList.toggle('redColor');
})