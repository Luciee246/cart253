/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

//Start in title screen, type "f r o g" to begin
let gameState = "title"; // Can be: title, playing, gameover

// Pepe image variables
let pepeImg;
let pepeCount = 0; // How many pepes to show

// Preloads the pepe image and the sounds
function preload() {
    pepeImg = loadImage("assets/images/pepefrog.png");
}

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

// Our firefly
// Has a position, size, and speed of horizontal movement
const firefly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 4
};

let brightness = 100; // Fully bright
let fliesEaten = 0;
const minBrightness = 40; // Minimum brightness


/**
 * Creates the canvas and initializes the fly and firefly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
    // Give the firefly its first random position
    resetFirefly();
};

/** Draws the background, fly, firefly, and frog depending on the game state
 */
function draw() {
    if (gameState === "title") {
        title();
    }
    else if (gameState === "playing") {
        drawBackground();
        moveFly();
        drawFly();
        moveFirefly();
        drawFirefly();
        moveFrog();
        moveTongue();
        drawFrog();
        checkTongueFlyOverlap();
        addStrike();
    }
    else if (gameState === "gameover") {
        gameOver();
    }
}

/**
 * Draws the start screen with a title and instructions
 */
function title() {
    push();
    // Draws a dark green background
    fill("#154228");
    rect(0, 0, width, height);
    // Draws the title and instructions
    fill("#6b8e23");
    textAlign(CENTER, CENTER);
    textFont("monospace");
    textSize(32);
    text("Frogfrogfrog but better :)", width / 2, height / 2 - 40);
    textFont("monospace");
    textSize(16);
    text("Move the frog with your mouse", width / 2, height / 2);
    text("Click to launch the tongue", width / 2, height / 2 + 20);
    text("Careful! Don't eat the fireflies and don't miss the flies!", width / 2, height / 2 + 40);
    // Draws the start button
    noStroke();
    fill("#0a3622");
    rect(width / 2 - 75, height / 2 + 60, 150, 40);
    fill("#6b8e23");
    textAlign(CENTER, CENTER);
    textFont("monospace");
    text("F R O G to start!", width / 2, height / 2 + 80);
    // Starts the game by spelling out "FROG"
    if (keyIsPressed && (key === 'G' || key === 'g')) {
        gameState = "playing";
        frog.tongue.state = "idle";
    }
    pop();
}

function drawBackground() {
    // Draw the background
    push();
    colorMode(HSB);
    background(200, 100, brightness);
    pop();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    fly.y += sin(frameCount * 0.1) * 2; // Small sine wave movement
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the firefly according to its speed
 * Resets the firefly if it gets all the way to the right
 */
function moveFirefly() {
    // Moves the firefly
    firefly.x += firefly.speed;
    firefly.y += sin(frameCount * 0.2) * 3; // Slightly bigger sine wave movement
    // Handles the firefly going off the canvas
    if (firefly.x > width) {
        resetFirefly();
    }
}

/**
 * Draws the firefly as a black circle
 */
function drawFirefly() {
    push();
    noStroke();
    fill("#ffed29");
    ellipse(firefly.x, firefly.y, firefly.size);
    pop();
}

/**
 * Resets the firefly to the left with a random y
 */
function resetFirefly() {
    firefly.x = 0;
    firefly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#e9658d");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#e9658d");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#6fc276");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly and firefly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);

    // Get distance from tongue to firefly
    const dFirefly = dist(frog.tongue.x, frog.tongue.y, firefly.x, firefly.y);
    // Check if it's an overlap
    const eatenFirefly = (dFirefly < frog.tongue.size / 2 + firefly.size / 2);

    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        // Increase the flies eaten count
        fliesEaten++;
        // Increase speed of fly and firefly
        fly.speed += 0.1;
        firefly.speed += 0.2;
        // Decrease brightness when fly is eaten
        brightness = max(brightness - 5, minBrightness);
    } else if (eatenFirefly) {
        resetFirefly();
        frog.tongue.state = "inbound";
        pepeCount++;
    }
    // If tongue misses fly
    else if (fly.x === 0) {
        pepeCount++;
    }
}

/**
 * Adds a strike (pepe) image to the screen
 */
function addStrike() {
    if (pepeCount >= 1 && pepeImg) {
        image(pepeImg, width - 150, height - 60, 50, 50);
    }
    // Adds 1 pepe everytime the tongue misses or hits a firefly
    if (pepeCount >= 2 && pepeImg) {
        image(pepeImg, width - 100, height - 60, 50, 50);
    }
    if (pepeCount >= 3 && pepeImg) {
        image(pepeImg, width - 50, height - 60, 50, 50);
    }
    // If there are 3 strikes, it's game over
    if (pepeCount >= 3) {
        gameState = "gameover";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

/**
 * Draws the game over screen with the score with my favourite fact
 */
function gameOver() {
    push();
    // Draws a brown background
    fill("#421e05");
    rect(0, 0, width, height);
    // Draws the game over text and score
    fill("#ff6347");
    textAlign(CENTER, CENTER);
    textFont("monospace");
    textSize(32);
    text("TOO MUCH TOO MUCH!", width / 2, height / 2 - 100);
    textFont("monospace");
    textSize(20);
    text(`You ate ${fliesEaten} flies!`, width / 2, height / 2 - 60);
    textSize(16);
    text("Fun fact! The pumpkin toadlet is so small that their", width / 2, height / 2 + 20);
    text("inner ear structure for balance does not allow them to jump properly.", width / 2, height / 2 + 40);
    text("They tumble and land awkwardly instead (YouTube it!)", width / 2, height / 2 + 60);

    // Draws the restart button
    noStroke();
    fill("#230101ff");
    rect(width / 2 - 100, height / 2 + 80, 200, 40);
    fill("#740e0eff");
    textAlign(CENTER, CENTER);
    textFont("monospace");
    // Restarts the game by spelling out "FROG"
    text("F R O G to play again", width / 2, height / 2 + 100);
    if (keyIsPressed && (key === 'G' || key === 'g')) {
        resetGame();
    }
    pop();
}

function resetGame() {
    pepeCount = 0;
    fliesEaten = 0;
    fly.x = 0;
    fly.y = random(0, 300);
    fly.speed = 3;
    firefly.x = 0;
    firefly.y = random(0, 300);
    firefly.speed = 4;
    brightness = 100;
    gameState = "playing";
    frog.tongue.y = 480;
    frog.tongue.state = "idle";
}