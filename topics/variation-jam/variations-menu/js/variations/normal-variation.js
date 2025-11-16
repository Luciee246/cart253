/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */


let score = 0;

let teams = undefined;

// The speech itself
const speech = [];

// Which sentence in the index to display
let speechIndex = 0;

let time = 0;

const puck = {
    x: 100,
    y: 100,
    size: 100,
    fill: "#0a0501"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#830b0b"
};

// Cannot have the puck start in this area
const target = {
    x: undefined,
    y: undefined,
    size: 100,
    fill: "#110862",
    fills: {
        noOverlap: "#110862",
        overlap: "#1a2093",
    }
}

function preload() {
    teams = loadJSON("assets/data/nhl_teams.json");
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
    background("#dbd8c7");

    // Good job, wow!
    goodJob();

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

    // Adds a timer
    timer();
}


function goodJob() {
    // Only display speech if score is at least 1
    if (score < 1) {
        return;
    }
    let currentLine = speech[speechIndex];

    // Display the line
    push();
    fill("#241603");
    textSize(32);
    // Bottom left
    textAlign(LEFT, BOTTOM)
    text(currentLine, 10, height - 10);
    pop();
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
        // Adds a random team to array (FIX THIS)
        speech.push(random(teams.nhl_teams));
        target.x = random(0, width);
        target.y = random(0, height);
        d = dist(target.x, target.y, puck.x, puck.y);
        //Next line
        if (score >= 1) {
            speechIndex++;
        }
        //Wrap around if at the end
        if (speechIndex >= speech.length) {
            // Start over
            speechIndex = 0;
        }
    }
    else {
        target.fill = target.fills.noOverlap
    }
    pop();
}

/**
 * Adds a score on the top left of the screen
 */
function normalScore() {
    fill("#241603");
    textAlign(LEFT, TOP);
    textFont('Courier New, monospace');
    textSize(20);
    text(`Score: ${score}`, 10, 30);
}

function timer() {
    // Display the timer
    push();
    fill("#241603");
    textSize(20);
    // Bottom left
    textAlign(LEFT, TOP)
    text(time, 10, 10);
    pop();

    // Add a 10 second timer

    // Game over screen
    if ("10 seconds pass") {
        gameOver();
    }
}

function gameOver() {
    push();
    // Draws a background
    fill("#b6b6b6");
    rect(0, 0, width, height);
    // Draws the game over text and score
    fill("#241603");
    textAlign(CENTER, CENTER);
    textFont("Courier New, monospace");
    textSize(32);
    text("TOO MUCH TOO MUCH!", width / 2, height / 2 - 100);
    textFont("Courier New, monospace");
    textSize(20);
    text(`You got ${score} goals!`, width / 2, height / 2 - 60);
    pop();

    push();
    // Draws the restart button
    noStroke();
    fill("#740e0e");
    rect(width / 2 - 100, height / 2 + 80, 200, 40);
    fill("#110862");
    textAlign(CENTER, CENTER);
    textStyle(BOLD)
    textFont("Courier New, monospace");
    // Restarts the game by pressing ESC
    textSize(16);
    text("Esc to play again!", width / 2, height / 2 + 100);
    if (keyCode === 27) {
        menuDraw();
    }
    pop();
}