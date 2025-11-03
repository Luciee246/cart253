/**
 * Star-field
 * Pippin Barr
 * 
 * Draws a star-field with a for-loop!
 */

"use strict";

const numStars = 100;

/**
 * Create a canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * Draws the star-field
*/
function draw() {
    background(0);

    randomSeed(10);
    for (let i = 0; i < numStars; i++) {
        drawStar();
    }
}

function drawStar() {
    const x = random(0, width);
    const y = random(0, height);
    const diameter = random(2, 5);

    push();
    fill(255);
    noStroke();
    ellipse(x, y, diameter);
    pop();
}