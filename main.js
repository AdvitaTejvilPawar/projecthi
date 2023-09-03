song1=""
song=""
function prelaod(){
    song=loadSound("smg.mp3")
    
}


function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,640,420)
}
function play_sound(){
    song.play()
}