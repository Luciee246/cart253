/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
(N) Normal
(O) Opposite day
(B) Blue variation
(ESC) Menu`

const titleText = `
Devil in the details`

//NOT MY FAVOURITE, CHANGE IT
const instructionsText = `
The devil gets lost a lot. 
Help him go back to his throne.`

/**
 * Display the main menu
 */
function menuDraw() {
    background("#a40000");

    push();
    fill("#e76161");
    textFont('Courier New, monospace');
    textSize(32);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height / 2);
    pop();

    menuDrawTitle();
    menuDrawInstructions();
}

function menuDrawTitle() {
    push();
    fill("#350707");
    textFont('Courier New, monospace');
    textSize(48);
    textAlign(CENTER, CENTER);
    text(titleText, width / 2, height / 4);
    pop();
}

function menuDrawInstructions() {
    push();
    fill("#350707");
    textFont('Courier New, monospace');
    textSize(24);
    textAlign(CENTER, CENTER);
    text(instructionsText, width / 2, height * 3 / 4);
    pop();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 78:
            state = "normal-variation";
            normalSetup();
            break;

        case 79:
            state = "opposite-variation";
            oppositeSetup();
            break;

        case 66:
            state = "blue-variation";
            blueSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}