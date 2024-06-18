song1="";
song2="";

song1_status="";
song2_status="";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

scoreRightWrist=0;
scoreLeftWrist=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("PEPAS.mp3");
}

function setup(){
    canvas=createCanvas(500,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('model is loaded');
}

function draw(){
    image(video, 0, 0, 500, 600);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY"+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY"+rightWristY);
    }
}

song1_status=song1.isPlaying();
song2_status=song2.isPlaying();

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}