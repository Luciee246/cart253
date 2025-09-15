/**
 * introducing variables
 * Lucie Soussana
 * 
 * Learning what a variable is and how to use it
 */

"use strict";

/**
 * Create  a canvas
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * Draws a circle in the centre of the canvas
*/
function draw() {
    background(0);

    // draw the circle
    push();
    fill(mouseX, mouseY, 100);
    noStroke();
    ellipse(mouseX, mouseY, 100);
    pop();
}