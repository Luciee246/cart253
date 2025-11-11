/**
 * This file contains the code to run *only* the opposite variation part of the program.
 * Note how it has its own draw, oppositeDraw(), and its own keyPressed, oppositeKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 * CHANGE WHAT'S IN THE FUNCTIONS TO MAKE VARIATION
 * 
 */

/**
 * This will be called just before the opposite variation starts
 */
function oppositeSetup() {

}

/**
 * This will be called every frame when the opposite variation is active
 */
function oppositeDraw() {
    background("green");
}

/**
 * This will be called whenever a key is pressed while the opposite variation is active
 */
function oppositeKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the opposite variation is active
 */
function oppositeMousePressed() {

}