/**
 * My awesome self-portrait
 * Lucie Soussana
 * 
 * My face with a moveable microphone that I use to sing all the time

*Uses:
*p5.js
*https://p5js.org/
"use strict";

/**
 * Creates a canvas
*/
function setup() {
    createCanvas(640, 480);
}

let mySound;
let hasSoundPlayed = false;

function preload() {
    mySound = loadSound('assets/sounds/With-you-LucieSoussana.mp3')
}

function mousePressed() {
    if (!mySound.isPlaying() && !hasSoundPlayed) {
        mySound.play();
        hasSoundPlayed = true;
    }
}

/**
 * Draws a quote, my face and a moveable microphone
*/
function draw() {
    background(255, 238, 140);

    //Quote
    drawQuote();

    //My self-portait
    drawHair();
    drawFaceNeck();
    drawEyes();
    drawGlasses();
    drawMouth();
    drawClothes();

    //Microphone
    drawMicrophone();

    //Raising and lowering sound
    soundVol();

}

function soundVol() {
    let d = dist(mouseX, mouseY, 320, 300);
    let newVolume = map(d, 100, 0, 0, 1, true);
    outputVolume(newVolume);
}


function drawQuote() {
    //Quote
    fill("#45503B");
    textSize(16);
    textFont("Georgia");
    textAlign(RIGHT, TOP);
    text("Lord have mercy HUAGHH - Elvis Presley", width / 2, 30);
}

function drawHair() {
    //Hair
    push();
    noStroke();
    fill("#65350F");
    rect(200, 90, 240, 290, 60);
    pop();
}

function drawFaceNeck() {
    //Face and neck
    push();
    noStroke();
    fill("#F1D9B7");
    ellipse(320, 240, 200, 240);
    rect(270, 330, 100, 80, 20);
    pop();
}

function drawEyes() {
    //Eyes
    push();
    fill("#2E1503");
    ellipse(275, 220, 20, 40);
    ellipse(365, 220, 20, 40);
    pop();
}

function drawGlasses() {
    //Glasses
    push();
    noFill();
    stroke("#3D0734");
    strokeWeight(5);
    rect(230, 200, 80, 40, 10);
    rect(330, 200, 80, 40, 10);
    line(310, 220, 330, 220);
    line(200, 200, 230, 220);
    line(410, 220, 440, 200);
    pop();
}

function drawMouth() {
    //Mouth
    push();
    fill("#FF8886");
    noStroke();
    // d = distance between mouse and center of mouth
    let d = dist(mouseX, mouseY, 320, 300);
    let mouthSize = map(d, 0, 300, 50, 20);
    mouthSize = constrain(mouthSize, 20, 50);
    ellipse(320, 300, mouthSize, mouthSize);
    pop();
}

function drawClothes() {
    //Clothes
    push();
    noStroke();
    fill("#45503B");
    rect(170, 390, 300, 200, 50);
    pop();
}

function drawMicrophone() {
    //Microphone
    push();
    noStroke();
    noCursor();
    fill("#000000");
    rect(mouseX, mouseY, 20, 100, 10);
    fill("#BBBBBB");
    ellipse(mouseX + 10, mouseY, 40, 40);
    pop();
}