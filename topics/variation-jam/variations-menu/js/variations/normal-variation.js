/**
 * Hockey Master
 * Lucie Soussana
 *
 * This will be a program in which the user can push a puck to a goal
 * on the canvas using their own circle.
 * This is the normal variation.
 */

"use strict";

let normalModeState = "playing"; // Can be: playing, gameover

let score = 0;

let sound;

let timerStarted = false;
let timeLeft = 10;
let timer;

// The NHL teams themselves
let NHL = [];

// Which sentence in the index to display
let NHLIndex = 0;

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
let target = {
    x: undefined,
    y: undefined,
    size: 100,
    fill: "#110862",
}

function preload() {
    NHL = loadJSON("assets/data/nhl_teams.json");
    sound = loadSound("assets/sounds/canadiens-goal.m4a");
}


function normalSetup() {
    createCanvas(500, 500);
    // Random positioning for the target
    target.x = random(0, width);
    target.y = random(0, height);
    normalModeState = "playing";
}


/**
 * This will be called every frame when the normal variation is active
 */
function normalDraw() {
    if (normalModeState === "playing") {
        background("#dbd8c7");

        // All NHL teams :D
        drawTeams();

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
        startCountdown();
    }
    else if (normalModeState === "gameover") {
        gameOver();
    }
}


function drawTeams() {
    // Only display teams if score is at least 1
    if (score < 1) {
        return;
    }
    let currentLine = NHL.nhl_teams[NHLIndex].name;


    // Display the line
    push();
    fill("#241603");
    textSize(32);
    // Bottom left
    textAlign(LEFT, BOTTOM)
    text(currentLine, 10, height - 10);
    pop();
};

/**
 * This will be called whenever a key is pressed while the normal variation is active
 */
function normalKeyPressed(event) {
    // ESC → go back to main menu
    if (event.keyCode === 27) {
        state = "menu";
        score = 0;
        timeLeft = 10;
        timerStarted = false;
        sound.stop();
        return;
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
    puck.x = constrain(puck.x, 0, 500);
    puck.y = constrain(puck.y, 0, 500);
    // Calculate distance between mouse and puck
    const d = dist(user.x, user.y, puck.x, puck.y);
    if (d < user.size / 2 + puck.size / 2) {
        if (puck.x > user.x) {
            puck.x += 3
        }
        if (puck.x < user.x)
            puck.x -= 3
        if (puck.y > user.y) {
            puck.y += 3
        }
        if (puck.y < user.y) {
            puck.y -= 3
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
        target.fill = target.fill
        score++;
        // Adds a random team to array
        target.x = random(0, width);
        target.y = random(0, height);
        d = dist(target.x, target.y, puck.x, puck.y);
        //Next line
        if (score >= 1) {
            NHLIndex++;
        }
        //Wrap around if at the end
        if (NHLIndex >= NHL.length) {
            // Start over
            NHLIndex = 0;
        }
    }
    else {
        target.fill = target.fill
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

function startCountdown() {
    // draw timer every frame
    push();
    fill("#241603");
    textSize(20);
    textAlign(LEFT, TOP);
    text(timeLeft, 10, 10);
    pop();

    // Only start ONCE
    if (!timerStarted) {
        timerStarted = true;

        timer = setInterval(() => {
            timeLeft--;

            if (timeLeft <= 0) {
                clearInterval(timer);
                gameOver();
                timeLeft = 10;
            }
        }, 1000);
    }
}


function gameOver() {
    normalModeState = "gameover";
    if (!sound.isPlaying()) {
        sound.play();
    }
    push();
    // Draws a background
    fill("#b6b6b6");
    rect(0, 0, width, height);
    // Draws the game over text and score
    fill("#241603");
    textAlign(CENTER, CENTER);
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
    pop();
}

function resetGame() {
    gameState = "playing";
}