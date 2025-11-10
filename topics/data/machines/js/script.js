/**
 * Machines
 * Pippin Barr
 * 
 * A starting point for a project that displays different machines
 * on the canvas. Eventually I'd like to be able to drag and drop
 * items onto the machines and have them act in different ways.
 * For now I'm happy to just show that they're distinct.
 */

"use strict";

const machines = [{

    x: 0,
    y: 100,
    width: 100,
    height: 100,
    color: "#ff4400"
}, {
    x: 150,
    y: 100,
    width: 100,
    height: 100,
    color: "#bbbbff"
}, {
    x: 300,
    y: 100,
    width: 100,
    height: 100,
    color: "#777777"
}];

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 200);
}

/**
 * Display the three machines
 */
function draw() {
    background(0);

    for (let machine of machines) {
        drawMachine(machine);
    }
}

function drawMachine(machine) {
    push();
    noStroke();
    fill(machine.color);
    rect(machine.x, machine.y, machine.width, machine.height);
    pop();
}