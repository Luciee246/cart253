/**
 * Mr. Furious
 * Lucie Soussana, Yelena Arakelian, Scarlett Arriola
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

// A bird that will annoy Mr. Furious
let bird = {
    x: 0,
    y: 50,
    sizeX: 40,
    sizeY: 30,
    fill: {
        r: 255,
        g: 222,
        b: 33
    }
};

// Frame rate
let frameRate = 2;
// The sky shade
let skyShade = 0;
// The bird's x position
let birdX = 0;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(160, 180, 200);

    //Make the sky darker
    skyShade += 1;
    background(160 - skyShade, 180 - skyShade, 200 - skyShade);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    //Make Mr. Furious become redder
    mrFurious.fill.g -= 2;
    mrFurious.fill.b -= 2;

    //Add a bird that annoys the s**t out of Mr. Furious
    push();
    noStroke();
    fill(bird.fill.r, bird.fill.g, bird.fill.b);
    ellipse(birdX, bird.y, bird.sizeX, bird.sizeY);
    birdX += frameRate;
    pop();

    //Make Mr. Furious shake

}

