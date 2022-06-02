noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;



function setup(){
    video=createCapture(VIDEO);
    video.size(550,480);
    video.position(40,90)


    canvas = createCanvas(550,480);
canvas.position(1060,90);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}


function draw(){
    background('#FFFF00');
    document.getElementById("square_side").innerHTML ="Width and the Height of a square will be ="+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}


function modelLoaded (){
    console.log('PoseNet Is Initialized!');
}



function gotPoses (results){
    if(results.length>0){
        console.log (results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY ="+noseY);
        leftWristX =results[0].pose.leftWrist.x;
        rightWristX =results[0].pose.rightWrist.x;
        difference= floor (leftWristX - rightWristX);
        console.log("leftWristX =" +leftWristX+ "rightWristX=" +rightWristX+"difference =" +difference);
    }
}

