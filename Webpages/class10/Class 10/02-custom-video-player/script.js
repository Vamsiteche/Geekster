const video= document.getElementById('video')
const play=document.getElementById('play')
const stop=document.getElementById('stop')
const progress=document.getElementById('progess')
const timestamp=document.getElementById('timestamp')

video.addEventListener('click',toggleVideoStatus)

video.addEventListener('play',updatePlayIcon)