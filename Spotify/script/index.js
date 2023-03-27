
const songs = [
    {songName: "My Life is Going on", filePath:"media/MoneyHeist.mp3", duration:"3:35", coverPath:"media/image.1.jfif"},
    {songName: "Shape of you", filePath:"media/ShapeOfYou.mp3", duration:"3:56", coverPath:"media/image.2.jpg"},
    {songName: "Senorita", filePath:"media/Senorita.mp3", duration:"3:26", coverPath:"media/media.3.jpg"},
    {songName: "Heathens - 21 Piolets", filePath:"media/heathens.mp3", duration:"3:15", coverPath:"media/media.4.jpg"},
    {songName: "Perfect", filePath:"media/Perfect.mp3", duration:"4:40", coverPath:"media/media.5.jfif"},
    {songName: "Beliver", filePath:"media/Beliver.mp3", duration:"3:37", coverPath:"media/media.6.jpg"},
]

const audio = new Audio('./media/4.mp3')

const masterPlay = document.getElementById("masterPlay");
const progress = document.getElementById("songRange");
const songItems = Array.from(document.getElementsByClassName('songItem'));
const playNext = document.getElementById("next");
const playPrev = document.getElementById("previous");
const stopSong = document.getElementsByClassName('fa-pause');
var songIndex = 0;

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('duration')[0].innerText = songs[i].duration;
})


masterPlay.addEventListener("click", () => {
    if(audio.paused || audio.currentTime <= 0){
        audio.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }else{
        audio.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        })
    }
})



audio.addEventListener('timeupdate', () => {
    progress.value = parseInt((audio.currentTime / audio.duration) * 100);
})

progress.addEventListener('change', () => {
    audio.currentTime = progress.value * audio.duration / 100;
});


function makeAllPlays(){
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element,i) => {
    element.addEventListener('click' , (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');

        songIndex = parseInt(e.target.id);
        audio.src = `./media/${songIndex+1}.mp3`;
        audio.currentTime = 0;
        audio.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
});

playPrev.addEventListener('click' , () => {
    if(songIndex <= 0){
        songIndex = 0;
    }else {
        songIndex -= 1;
    }
        audio.src = `./media/${songIndex+1}.mp3`;
        audio.currentTime = 0;
        audio.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})


playNext.addEventListener('click', () => {
    if(songIndex < 5){
        songIndex += 1;
    }else{
        songIndex = 0;
    }

    audio.src = `media/${songIndex+1}.mp3`;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

stopSong.addEventListener('click', () => {
    audio.pause();
    stopSong.classList.remove('fa-pause');
    stopSong.classList.add('fa-play');
})
