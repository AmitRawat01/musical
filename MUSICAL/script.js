console.log("Welcome to Musical");
let songindex=0;
let audioElement = new Audio('1.mp3'); //audioElement.play();
let masterplay  = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "aabc", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
]
    

   // let audioElement = new Audio(1.mp3);

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
      }
      else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
      }

})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 
})
