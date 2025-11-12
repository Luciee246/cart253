/**
 * This file contains the code to run *only* the sound variation part of the program.
 * Note how it has its own draw, soundDraw(), and its own keyPressed, soundKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 * CHANGE WHAT'S IN THE FUNCTIONS TO MAKE VARIATION
 */

/**
 * This will be called just before the sound variation starts
 */
function soundSetup() {

}

/**
 * This will be called every frame when the sound variation is active
 */
function soundDraw() {
    background("blue");
}

/**
 * This will be called whenever a key is pressed while the sound variation is active
 */
function soundKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the sound variation is active
 */
function soundMousePressed() {

}