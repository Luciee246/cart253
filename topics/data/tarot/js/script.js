/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

// Our tarot data
let tarot = undefined;

// Our fortune
let fortune = "Click to show a fortune.";

function preload() {
    tarot = loadJSON("assets/data/tarot_interpretations.json");
}

/**
 * Create canvas
*/
function setup() {
    createCanvas(800, 400);
}

/**
 * Draw the tarot cards
*/
function draw() {
    background(0);

    // Display the information
    push();
    textSize(16);
    fill("yellow");
    textAlign(CENTER, CENTER);
    text(fortune, width / 2, height / 2);
    pop();
}

function mousePressed() {
    // Choose a random card
    const card = random(tarot.tarot_interpretations);
    // Choose a random fortune
    fortune = random(card.fortune_telling);
}