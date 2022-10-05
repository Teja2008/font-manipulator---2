function setup(){
    video= createCapture(VIDEO);
video.size(550,500)
video.position(300,200)
canvas= createCanvas(550,500)
canvas.position(1000,200)
poseNet= ml5.poseNet(video,modelLoaded)
poseNet.on('pose', gotPoses )
}
function draw(){
    background('#07f0dc')
    }
    function modelLoaded(){
        console.log('poseNet is initialised')
    }
    function gotPoses(results){
        if(results.length>0){
            console.log(results)
        }
    }