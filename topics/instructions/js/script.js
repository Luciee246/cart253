/**
 * The Greatest Landscape
 * Lucie Soussana, Yelena Arakelan, Scarlett Arriola
 * 
 * A beautiful landscape with land, a lake, a sun, a bird, a frog, and a house
 */

"use strict";

/** Creates a blue canvas */
function setup() {
    createCanvas(950, 650);
    background("#0492C2")
}


/**
 * Draws land, a lake, a sun, a bird, a frog, and a house
*/
function draw() {
    // Green grass
    noStroke();
    fill("#74B72E");
    rect(0, 450, 950, 200);

    // Draw the lake
    noStroke()
    fill("#19437D");
    ellipse(200, 550, 475, 100);

    //Draw the house body
    fill("#FED8B1");
    rect(600, 350, 200, 150);
    // Draw the door
    fill("#7A3803");
    rect(675, 425, 50, 75);
    // Draw the roof
    fill("#B43757");
    triangle(600, 350, 700, 250, 800, 350);
    //Draw the window
    fill("#E2CCE6");
    circle(700, 385, 50);
}