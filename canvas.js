let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 1;
let postition = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall() {
  if (postition + radius > 640) {
    moveSpeed = -speed;
  } else if (postition - radius < 0) {
    moveSpeed = speed;
  }
  postition += moveSpeed;
}

function drawBall () {
    context.clearRect(0,0, 640, 480);

    context.fillStyle = "#62687f";
    context.beginPath();
    context.arc(postition,50,radius,0,2*Math.PI);
    context.fill();
}


function animate() {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate);