function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 220, 140, 235, 230);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 438, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 438, 80);
}

function take_snapshot() {
    save('happy_birthday.png');
}