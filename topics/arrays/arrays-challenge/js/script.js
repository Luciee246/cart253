/**
 * Jiggly balls!!!
 * Chloé Guerrin, Yelena Arakelian, Scarlett Arriola, Lucie Soussana
 * 
 * A ball that jiggles around on the canvas
 */

"use strict";
let balls = [];

/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties
    const ball = {
        // Position and dimensions
        x: random(0, width),
        y: random(0, height),
        size: random(20, 40),
        // Colour
        fill: ("#000000"),
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };
    return ball;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    // Go through all the balls
    for (let ball of balls) {
        moveBall(ball);
        drawBall(ball);
        bounceBall(ball);
    }
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
    ball.x += random(-ball.velocity.x, ball.velocity.x);
    ball.y += random(-ball.velocity.y, ball.velocity.y);
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
    // Check if the ball has reached the left or right
    const bounceX = (ball.x > width || ball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (ball.y > height || ball.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        ball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

/**
 * Adds a random ball on a key press
 */
function mousePressed() {
    // Create a new ball
    const newBall = createBall();
    // Add it to the array
    balls.push(newBall);
}