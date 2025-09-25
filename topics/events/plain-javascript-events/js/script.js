/**
 * Pain Javascript Events
 * Lucie Soussana
 * 
 * Experimenting with event handling in Plain Javascript
 */

"use strict";

// Information about the current and possible background fills
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    },
    switchKey: 32 // Space bar
}

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);

    // Listen for keypresses
    window.addEventListener("keydown", changeBG);
}


/**
 * Displays the background
*/
function draw() {
    background(bg.fill);

}

function changeBG(event) {
    if (event.keyCode === bg.switchKey) {
        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        }
        else {
            bg.fill = bg.fills.black;
        }
    }
}