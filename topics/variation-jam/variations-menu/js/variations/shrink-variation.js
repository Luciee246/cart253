/**
 * Hockey Master
 * Lucie Soussana
 *
 * This will be a program in which the user can push a puck to a goal
 * on the canvas using their own circle.
 * This is the shrink variation where the goal shrinks over time. The game only ends when the goal size is 0.
 */

/**
 * This will be called just before the shrink variation starts
 */


let shrinkModeState = "playing"; // Can be: playing, gameover

function preload() {
    NHL = loadJSON("assets/data/nhl_players.json");
    sound = loadSound("assets/sounds/canadiens-goal.m4a");
}


function shrinkSetup() {
    createCanvas(500, 500);
    // Random positioning for the target
    target.x = random(0, width);
    target.y = random(0, height);
    shrinkModeState = "playing";

    target.minSize = 0;
    shrinkRate = 0.25;
    target.fill = "#110862";
}


/**
 * This will be called every frame when the shrink variation is active
 */
function shrinkDraw() {
    if (shrinkModeState === "playing") {
        background("#dbd8c7");

        // All NHL players :D
        drawPlayers();

        // Move user circle
        shrinkMoveUser();

        //Draws a target
        shrinkAndDrawTarget();

        // Draw the user and puck
        shrinkDrawUser();
        shrinkDrawPuck();

        // Move the puck with the user circle
        shrinkMovePuck();

        //Draws a score
        shrinkScore();

    }
    else if (shrinkModeState === "gameover") {
        gameOver();
    }
}


function drawPlayers() {
    // Only display players if score is at least 1
    if (score < 1) {
        return;
    }
    let currentLine = NHL.nhl_players[NHLIndex].name;


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
function shrinkMoveUser() {
    user.x = mouseX;
    user.y = mouseY;
};

/**
 * Displays the user circle
 */
function shrinkDrawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
};

/**
 * Displays the puck circle
 */
function shrinkDrawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
};


/** Moves the puck if the user circle is overlapping it
 */
function shrinkMovePuck() {
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


/** Draws a target in a random position. Target shrinks until the user overlaps with it, and then moves it somewhere else
 */
function shrinkAndDrawTarget() {
    push();
    noStroke();
    fill(target.fill);

    while (true) {
        ellipse(target.x, target.y, target.size);
        let d = dist(target.x, target.y, puck.x, puck.y);

        if (d < (target.size / 2 + puck.size / 2)) {
            target.fill = target.fill
            score++;
            // Moves the target somewhere random
            target.x = random(0, width);
            target.y = random(0, height);
            // Resets target size
            target.size = 100;
            d = dist(target.x, target.y, puck.x, puck.y);
            // Adds a random player name
            if (score >= 1) {
                NHLIndex = floor(random(NHL.nhl_players.length));
            }
            break; // Stops loop when puck overlaps target
        }

        // Shrinks target
        target.size -= shrinkRate;

        // If target size is 0, game over
        if (target.size <= target.minSize) {
            gameOver();
            break; // Stops loop when target size is 0
        }
        break; // Stops infinite loop from starting
    }
    pop();
}


/**
 * Adds a score on the top left of the screen
 */
function shrinkScore() {
    fill("#241603");
    textAlign(LEFT, TOP);
    textFont('Courier New, monospace');
    textSize(20);
    text(`Score: ${score}`, 10, 30);
}