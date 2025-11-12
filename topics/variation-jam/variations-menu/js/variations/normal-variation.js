/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */


let score = 0;

const puck = {
    x: 100,
    y: 100,
    size: 100,
    fill: "#e86100"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#253d2c"
};

// Cannot have the puck start in this area
const target = {
    x: undefined,
    y: undefined,
    size: 100,
    fill: "#2e6f40",
    fills: {
        noOverlap: "#2e6f40",
        overlap: "#68ba7f",
    }
}


function normalSetup() {
    createCanvas(500, 500);
    // Random positioning for the target
    target.x = random(0, width);
    target.y = random(0, height);
}


/**
 * This will be called every frame when the normal variation is active
 */
function normalDraw() {
    background("#ffee8c");

    // Move user circle
    normalMoveUser();

    //Draws a target
    normalDrawTarget();

    // Draw the user and puck
    normalDrawUser();
    normalDrawPuck();

    // Move the puck with the user circle
    normalMovePuck();

    //Draws a score
    normalScore();
}


/**
 * This will be called whenever a key is pressed while the normal variation is active
 */
function normalKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
        score = 0;
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
    // Calculate distance between mouse and puck
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

/**
 * Adds a score on the top left of the screen
 */
function normalScore() {
    fill("#253d2c");
    textAlign(LEFT, TOP);
    textFont('Courier New, monospace');
    textSize(20);
    text(`Score: ${score}`, 10, 10);
}

/** Draws a target in a random position, and moves it somewhere else when the puck overlaps the target
 */
function normalDrawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    let d = dist(target.x, target.y, puck.x, puck.y);
    if (d < (target.size / 2 + puck.size / 2)) {
        target.fill = target.fills.overlap
        score++;
        target.x = random(0, width);
        target.y = random(0, height);
        d = dist(target.x, target.y, puck.x, puck.y);
    }
    else {
        target.fill = target.fills.noOverlap
    }
    pop();
}