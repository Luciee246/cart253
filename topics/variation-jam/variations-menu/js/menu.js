/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
(H) Normal
(A) Opposite day
(B) Music will guide you
(ESC) Menu`

const titleText = `
Hockey Master`

//NOT MY FAVOURITE, CHANGE IT
const instructionsText = `
The puck gets lost a lot. 
Help it go back to its home!`

/**
 * Display the main menu
 */
function menuDraw() {
    background("#dbd8c7");

    push();
    fill("#160539");
    textFont('Courier New, monospace');
    textSize(25);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height * 3 / 4);
    pop();

    menuDrawTitle();
    menuDrawInstructions();
}

function menuDrawTitle() {
    push();
    fill("#800a0a");
    textFont('Courier New, monospace');
    textSize(55);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(titleText, width / 2, height / 4);
    pop();
}

function menuDrawInstructions() {
    push();
    fill("#241603");
    textFont('Courier New, monospace');
    textSize(24);
    textAlign(CENTER, CENTER);
    text(instructionsText, width / 2, height / 2 - 50);
    pop();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 72:
            state = "normal-variation";
            normalSetup();
            break;

        case 65:
            state = "opposite-variation";
            oppositeSetup();
            break;

        case 66:
            state = "sound-variation";
            soundSetup();
            break;
    }
}