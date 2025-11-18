/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "menu";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "normal-variation":
            normalDraw();
            break;
        case "opposite-variation":
            oppositeDraw();
            break;
        case "sound-variation":
            soundDraw();
            break;
    }
}


/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    // ESC → go back to main menu
    if (event.keyCode === 27) {
        window.location.reload();
    }

    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "opposite-variation":
            oppositeKeyPressed(event);
            break;
    }
}