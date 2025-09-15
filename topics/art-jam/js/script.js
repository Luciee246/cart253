/**
 * My awesome self-portrait
 * Lucie Soussana
 * 
 * My face with a moveable microphone that I use to sing all the time

"use strict";

/**
 * Creates a canvas
*/
function setup() {
    createCanvas(640, 480);

}

/**
 * Draws my face and a moveable microphone
*/
function draw() {
    background(255, 238, 140);
    //Hair
    noStroke();
    fill("#65350F");
    rect(200, 90, 240, 290, 60);

    //Face
    fill("#F1D9B7");
    ellipse(320, 240, 200, 240);

    //Neck
    rect(270, 330, 100, 80, 20);

    //Eyes
    fill("#2E1503");
    ellipse(280, 220, 30, 50);
    ellipse(360, 220, 30, 50);

    //Mouth
    fill("#FF8886");
    noStroke();
    ellipse(320, 300, 50, 50);

    //Body
    fill("#45503B");
    rect(170, 390, 300, 200, 50);
}