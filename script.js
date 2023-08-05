console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('Phir-Aur-Kya-Chahiye.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressbar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Tumse Milke Dil Ka",filePath:"Tumse Milke Dil Ka (Main Hoon Na)_64-(PagalWorld.Ink).mp3",coverPath:"cover1.jpg"},
    {songName:"Nazar na lag jaye",filePath:"Nazar Na Lag Jaaye (Stree) 128 Kbps.mp3",coverPath:"cover2.jpg"},
    {songName:"Salem-e-Ishq",filePath:"song/1.mp3",coverPath:"cover3.jpg"},
    {songName:"Bhula denge",filePath:"song/1.mp3",coverPath:"cover3.jpg"},
    {songName:"Teri Meri",filePath:"song/1.mp3",coverPath:"cover3.jpg"},
    {songName:"Tum ho paas mere",filePath:"song/1.mp3",coverPath:"cover3.jpg"},
    {songName:"Dil ibadat",filePath:"song/1.mp3",coverPath:"cover3.jpg"},
    {songName:"Tujhko hi dulhan",filePath:"song/1.mp3",coverPath:"cover3.jpg"},
    {songName:"Yaariyan",filePath:"song/1.mp3",coverPath:"cover3.jpg"},
    {songName:"Rabba",filepath:"song/1.mp3",coverPath:"cover3.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

//listen to Events
document.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duraton)*100);
   // console.log(progress);
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(documents.getElementsByclassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })

})