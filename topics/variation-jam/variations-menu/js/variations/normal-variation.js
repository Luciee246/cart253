/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

const target = {
    x: 350,
    y: 350,
    size: 100,
    fill: "#3C4C7D",
    fills: {
        noOverlap: "#3C4C7D",
        overlap: "#EFF542",
    }
}


function normalSetup() {
    createCanvas(500, 500);
}


/**
 * This will be called every frame when the normal variation is active
 */
function normalDraw() {
    background("#aaaaaa");

    // Move user circle
    normalMoveUser();

    //Draws a target
    normalDrawTarget();

    // Draw the user and puck
    normalDrawUser();
    normalDrawPuck();

    // Move the puck with the user circle
    normalMovePuck();
}


/**
 * This will be called whenever a key is pressed while the normal variation is active
 */
function normalKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
};


/**
 * Sets the user position to the mouse position
 */
function normalMoveUser() {
    user.x = mouseX;
    user.y = mouseY;
};

/**
 * Displays the user circle
 */
function normalDrawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
};

/**
 * Displays the puck circle
 */
function normalDrawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
};


/** Moves the puck if the user circle is overlapping it
 */
function normalMovePuck() {
    // Calcuate distance between mouse and puck
    const d = dist(user.x, user.y, puck.x, puck.y);
    if (d < user.size / 2 + puck.size / 2) {
        if (puck.x > user.x) {
            puck.x += 1
        }
        if (puck.x < user.x)
            puck.x -= 1
        if (puck.y > user.y) {
            puck.y += 1
        }
        if (puck.y < user.y) {
            puck.y -= 1
        }
    }
};

/** Draws a target
 */
function normalDrawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    const d = dist(target.x, target.y, puck.x, puck.y);
    if (d < target.size / 2 + puck.size / 2) {
        target.fill = target.fills.overlap
    }
    else {
        target.fill = target.fills.noOverlap
    }
    pop();
}