/**
 * This file contains the code to run *only* the normal variation part of the program.
 * Note how it has its own draw, normalDraw(), and its own keyPressed, normalKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 * CHANGE WHAT'S IN THE FUNCTIONS TO MAKE VARIATION
 */

/**
 * This will be called just before the normal variation starts
 */
function normalSetup() {

}

/**
 * This will be called every frame when the normal variation is active
 */
function normalDraw() {
    background("red");
}

/**
 * This will be called whenever a key is pressed while the normal variation is active
 */
function normalKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the normal variation is active
 */
function normalMousePressed() {

}