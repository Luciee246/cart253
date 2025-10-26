/**
 * Speech! Speech!
 * Lucie Soussana
 * 
 * Interactive speech-playing interface!
 */

"use strict";

// The speech itself
const speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
// Which sentence in the index to display
let speechIndex = 0;


/**
 * Create a canvas
*/
function setup() {
    createCanvas(600, 100);
}


/**
 * Display the current line of speech
*/
function draw() {
    background(0);

    let currentLine = speech[speechIndex];

    // Display the line
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

function mousePressed() {
    //Next line
    speechIndex++;
    //Wrap around if at the end
    if (speechIndex >= speech.length) {
        // Start over
        speechIndex = 0;
    }
}