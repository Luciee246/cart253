/**
 * The Greatest Landscape
 * Lucie Soussana, Yelena Arakelan, Scarlett Arriola
 * 
 * A beautiful landscape with land, a lake, a house, a sun, a UFO, and a frog
 */

"use strict";

/** Creates a blue canvas */
function setup() {
    createCanvas(950, 650);
    background("#0492C2")
}


/**
 * Draws land, a lake, a house, a sun, a UFO, and a frog
*/
function draw() {
    // Draw the land
    noStroke();
    fill("#74B72E");
    rect(0, 450, 950, 200);

    // Draw the lake
    noStroke()
    fill("#19437D");
    ellipse(200, 550, 475, 100);

    //Draw the house
    drawHouse();

    // Draw the sun
    fill("#FFDD00");
    circle(100, 100, 100);

    // Draw the UFO
    fill("#7F7D9C");
    ellipse(400, 200, 300, 80);
    fill("#ADADC9");
    ellipse(400, 170, 150, 80);

    // Draw the frog TURN INTO FUNCTION CALL
    drawFrog();
}

function drawHouse() {
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

function drawFrog() {
    // Draw the frog body
    fill("#728C69");
    circle(800, 650, 200);
    // Draw the eyes
    fill("#FFFFFF");
    circle(740, 570, 50);
    circle(860, 570, 50);
    // Draw the pupils
    fill("#000000");
    circle(740, 570, 25);
    circle(860, 570, 25);
    // Draw the tongue
    fill("#FF69B4");
    rect(790, 600, 20, 50);
}