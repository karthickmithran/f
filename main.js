noseX=0;
noseY=0;

leftWristX=0;
rightWristX=0;

difference=0;

function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 500);
  canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Posenet is initialized')
}

function gotPoses(results){
    if (results.length>0){
        console.log("results");
       
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
console.log("leftwristX = " + leftWristX + "rightwristx = " + rightWristX + "difference = " + difference);
     }
    }

function draw() {
    background('#969A97');
    document.getElementById("font_size").innerHTML
    "Width And Height of a Font will be = "+difference +"px";
    fill('green');
    //stroke('#F90093');
   // square(noseX, noseY, difference);
    textSize(difference);
    text('karthick', 50, 100)
}