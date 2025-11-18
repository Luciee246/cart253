/**
 * Hockey Master
 * Lucie Soussana
 *
 * This will be a program in which the user can push a puck to a goal
 * on the canvas using their own circle.
 * This is the sound variation where you can find the target by listening to the music get louder or quieter.
 */

"use strict";

let soundModeState = "playing"; // Can be: playing, gameover

let fixYouSound;


function preload() {
    NHL = loadJSON("assets/data/nhl_teams.json");
    sound = loadSound("assets/sounds/canadiens-goal.m4a");
    fixYouSound = loadSound("assets/sounds/fix-you.m4a");
}


function soundSetup() {
    createCanvas(500, 500);
    // Random positioning for the target
    target.x = random(0, width);
    target.y = random(0, height);
    soundModeState = "playing";
    target.fill = "#dbd8c7";

    // Plays the song to find the target
    if (!fixYouSound.isPlaying()) {
        fixYouSound.play();
        // hasSoundPlayed = true;
    }
}


/**
 * This will be called every frame when the sound variation is active
 */
function soundDraw() {
    if (soundModeState === "playing") {
        background("#dbd8c7");

        // All NHL teams :D
        drawTeams();

        // Move user circle
        soundMoveUser();

        //Draws a target
        soundDrawTarget();

        // Draw the user and puck
        soundDrawUser();
        soundDrawPuck();

        // Move the puck with the user circle
        soundMovePuck();

        //Draws a score
        soundScore();

        // Adds a timer
        startCountdown();

        // Raises and lowers volume
        soundVol();
    }
    else if (soundModeState === "gameover") {
        gameOver();
        if (fixYouSound.isPlaying()) {
            fixYouSound.stop();
        }
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
 * Sets the user position to the mouse position
 */
function soundMoveUser() {
    user.x = mouseX;
    user.y = mouseY;
};

/**
 * Displays the user circle
 */
function soundDrawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
};

/**
 * Displays the puck circle
 */
function soundDrawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
};


/** Moves the puck if the user circle is overlapping it
 */
function soundMovePuck() {
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
function soundDrawTarget() {
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
function soundScore() {
    fill("#241603");
    textAlign(LEFT, TOP);
    textFont('Courier New, monospace');
    textSize(20);
    text(`Score: ${score}`, 10, 30);
}

function soundVol() {
    let d = dist(puck.x, puck.y, target.x, target.y);
    let newVolume = map(d, 250, 100, 0, 1, true);
    outputVolume(newVolume);
}